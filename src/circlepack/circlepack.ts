import { HPCCSVGElement, attribute, property, ChangeMap, customElement, css, display, html, ref } from "../common";

import * as d3 from "d3";

interface Leaf {
    name: string;
    value: number
}

interface Node {
    name: string;
    children: Array<Leaf | Node>
}

const template = html<HPCCCirclepackElement>`\
<svg ${ref("_svg")}>
    <g ${ref("_nodesG")}></g>
    <g ${ref("_labelsG")}></g>
</svg>`;
// const template = html<HPCCCirclepackElement>`\
// <svg ${ref("_svg")}>
// </svg>`;

const styles = css`
${display("inline-block")}

:host {
}

svg {
}
`;

@customElement("hpcc-circlepack", { template, styles })
export class HPCCCirclepackElement extends HPCCSVGElement {

    /**
     * Data to be rendered
     *
     * @defaultValue undefined
     */
    @property data: Node = {
        name: "A",
        children: [
            {name:"B", value:123},
            {name:"C", value:234},
            {name:"D", children:[
                {name:"E", value:123},
                {name:"F", value:234},
            ]},
        ]
    };

    @property _root: any;
    @property _focus: any;
    @property _view: any;

    protected _nodesG: d3.Selection<SVGGElement, unknown, null, undefined>;
    protected _labelsG: d3.Selection<SVGGElement, unknown, null, undefined>;
    protected _test: HierarchyNode;
    constructor() {
        super();
        this._nodesG = d3.select<SVGGElement, unknown>(this._nodesG);
        this._labelsG = d3.select<SVGGElement, unknown>(this._labelsG);
    }

    enter() {
        super.enter();
    }
    update(changes: ChangeMap) {
        super.update(changes);
        const data = 
            typeof this.data === "string" ? JSON.parse(this.data) : this.data
            ??
            {
                name: "A",
                children: [
                    {name:"B", value:123},
                    {name:"C", value:234},
                    {name:"D", children:[
                        {name:"E", value:123},
                        {name:"F", value:234},
                    ]},
                ]
            }
            ;
        if (data) {
            
            this._root = this.pack(data);
            this._focus = this._root;
            this._view;

            const svg = d3.select(this._svg);
            const width = this._svg.clientWidth;
            const height = this._svg.clientHeight;
            const maxColorDepth = 5;
            const color = d3.interpolateYlGn;
            svg
                .attr("viewBox", `-${width / 2} -${height / 2} ${width} ${height}`)
                .style("display", "block")
                .style("margin", "0 -14px")
                .style("background", color(0))
                .style("cursor", "pointer")
                .on("click", (event) => this.zoom(event, this._root));

            this._nodesG
                .selectAll("circle")
                .data(this._root.descendants().slice(1))
                .join("circle")
                // .attr("fill", d => d.children ? color(d.depth) : "white")
                .attr("fill", (d) => d.children ? color(d.depth/maxColorDepth) : "white")
                .attr("pointer-events", d => !d.children ? "none" : null)
                .on("mouseover", function (this: SVGElement) { d3.select(this).attr("stroke", "#000"); })
                .on("mouseout", function (this: SVGElement) { d3.select(this).attr("stroke", null); })
                .on("click", (event, d) => focus !== d && (this.zoom(event, d), event.stopPropagation()))
                ;
            console.log("this._root.descendants()", this._root.descendants());
            this._labelsG
                .style("font", "10px sans-serif")
                .attr("pointer-events", "none")
                .attr("text-anchor", "middle")
            .selectAll("text")
            .data(this._root.descendants())
            .join("text")
                .style("fill-opacity", d => d.parent === this._root ? 1 : 0)
                .style("display", d => d.parent === this._root ? "inline" : "none")
                .text(d => d.data.name)
                ;
            
            this.zoomTo([this._root.x, this._root.y, this._root.r * 2]);
        }
    }
    exit() {
        super.exit();
        
    }

    pack(data) {
        const width = this._svg.clientWidth;
        const height = this._svg.clientHeight;

        const data2 = d3.hierarchy(data)
            .sum(d => d.value)
            ;
        // const data3 = data2
        //     .sort((a, b) => b.value - a.value)
        //     ;
        const data3 = data2
            .sort((a, b) => b.value! - a.value!)
            ;
        console.log("data", data);
        console.log("data2", data2);
        console.log("data3", data3);
        return d3.pack()
            .size([width, height])
            .padding(3)(data2)
            ;
    }

    zoomTo(v) {
        const k = this._svg.clientWidth / v[2];
    
        this._view = v;
        this._labelsG.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
        this._nodesG.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
        this._nodesG.attr("r", d => d.r * k);
    }
    zoom(event, d) {    
        this._focus = d;

        const transition = d3.select(this._svg).transition()
            .duration(event.altKey ? 7500 : 750)
            .tween("zoom", d => {
              const i = d3.interpolateZoom(this._view, [this._focus.x, this._focus.y, this._focus.r * 2]);
              return t => this.zoomTo(i(t));
            });
    
        this._labelsG
            .filter(function (this: SVGElement, d) { return d.parent === focus || this.style.display === "inline"; })
            .transition(transition)
            .style("fill-opacity", d => d.parent === focus ? 1 : 0)
            .on("start", function (this: SVGElement, d) { if (d.parent === focus) this.style.display = "inline"; })
            .on("end", function (this: SVGElement, d) { if (d.parent !== focus) this.style.display = "none"; })
            ;
    }
}
