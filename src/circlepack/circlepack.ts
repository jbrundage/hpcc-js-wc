import { HPCCSVGElement, property, ChangeMap, customElement, css, display, html, ref } from "../common";

import * as d3 from "d3";

interface Node {
    name: string;
    children?: Node[],
    value?: number
}

interface HierarchyCircularNode extends d3.HierarchyCircularNode<Node> {
}

const template = html<HPCCCirclepackElement>`\
<svg ${ref("_svg")}>
    <g ${ref("_nodesG")}></g>
    <g ${ref("_labelsG")}></g>
</svg>
`;

const styles = css`
${display("inline-block")}
`;

@customElement("hpcc-circlepack", { template, styles })
export class HPCCCirclepackElement extends HPCCSVGElement {

    /**
     * Data to be rendered
     *
     * @defaultValue { name: "root", children: [] }
     */
    @property data: Node = { name: "root", children: [] };

    protected _d3Svg: d3.Selection<SVGSVGElement, unknown, null, unknown>;;
    protected _nodesG: SVGGElement;
    protected _labelsG: SVGGElement;
    protected _d3NodesG: d3.Selection<SVGGElement, unknown, null, unknown>;
    protected _d3LabelsG: d3.Selection<SVGGElement, unknown, null, unknown>;

    constructor() {
        super();
        this._d3Svg = d3.select<SVGSVGElement, unknown>(this._svg);
        this._d3NodesG = d3.select<SVGGElement, unknown>(this._nodesG);
        this._d3LabelsG = d3.select<SVGGElement, unknown>(this._labelsG);
    }

    enter() {
        super.enter();
    }

    update(changes: ChangeMap) {
        super.update(changes);
        const data: Node = typeof this.data === "string" ? JSON.parse(this.data) : this.data;
        if (!data) return;
        this._d3NodesG.attr("transform", `translate(${this.clientWidth / 2}, ${this.clientHeight / 2})`);
        this._d3LabelsG.attr("transform", `translate(${this.clientWidth / 2}, ${this.clientHeight / 2})`);

        const context = this;

        const root = this.pack(data);
        let focus = root;
        let view;

        const color = d3.scaleLinear<string, string>()
            .domain([0, 5])
            .range(["hsl(152,80%,80%)", "hsl(228,30%,40%)"])
            .interpolate(d3.interpolateHcl)
            ;
        this._d3Svg
            .style("cursor", "pointer")
            .on("click", (event) => zoom(event, root))
            ;

        const node = this._d3NodesG.selectAll("circle").data(root.descendants().slice(1))
            .join("circle")
            .attr("fill", d => d.children ? color(d.depth) : "white")
            .attr("pointer-events", d => !d.children ? "none" : null)
            .on("mouseover", function () { d3.select(this).attr("stroke", "#000"); })
            .on("mouseout", function () { d3.select(this).attr("stroke", null); })
            .on("click", (event, d) => focus !== d && (zoom(event, d), event.stopPropagation()))
            ;

        const label = this._d3LabelsG
            .style("font", "10px sans-serif")
            .attr("pointer-events", "none")
            .attr("text-anchor", "middle")
            .selectAll("text")
            .data(root.descendants())
            .join("text")
            .style("fill-opacity", d => d.parent === root ? 1 : 0)
            .style("display", d => d.parent === root ? "inline" : "none")
            .text(d => d.data.name)
            ;

        zoomTo([root.x, root.y, root.r * 2]);

        function zoomTo(v: [number, number, number]) {
            const k = context._svg.clientWidth / v[2];

            view = v;
            label.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
            node.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
            node.attr("r", d => d.r * k);
        }

        function zoom(event, d: HierarchyCircularNode) {
            const focus0 = focus;

            focus = d;

            const transition = context._d3Svg.transition()
                .duration(event.altKey ? 7500 : 750)
                .tween("zoom", () => {
                    const i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2]);
                    return t => zoomTo(i(t));
                });

            label
                .filter(function (d) { return d.parent === focus || (this as SVGTextElement).style.display === "inline"; })
                .transition(transition as any)
                .style("fill-opacity", d => d.parent === focus ? 1 : 0)
                .on("start", function (d) { if (d.parent === focus) (this as SVGTextElement).style.display = "inline"; })
                .on("end", function (d) { if (d.parent !== focus) (this as SVGTextElement).style.display = "none"; })
                ;
        }
    }

    exit() {
        super.exit();
    }

    pack(data: Node): HierarchyCircularNode {
        const width = this._svg.clientWidth;
        const height = this._svg.clientHeight;

        const pack = d3.pack<Node>()
            .size([width, height])
            .padding(3)
            ;

        const treeData = d3.hierarchy(data)
            .sum(d => d.value!)
            .sort((a, b) => b.value! - a.value!);

        return pack(treeData);
    }
}
