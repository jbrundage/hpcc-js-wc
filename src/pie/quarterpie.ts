import { attribute, css, ChangeMap, customElement, display, html, ref } from "../common";
import { HPCCPieElement } from "./pie";
import * as d3 from "d3";

const template = html<HPCCQuarterPieElement>`\
<svg ${ref("_svg")}>
    <g ${ref("_slicesG")}></g>
    <g ${ref("_labelsG")}></g>
</svg>`;

const styles = css`
${display("inline-block")}

:host {
}

svg {
    font-family: sans-serif;
    font-size: 12;
}

.arc path {
    stroke: white;
    stroke-width: 0.75px;
}

polyline {
    opacity: .3;
    stroke: black;
    stroke-width: 2px;
    fill: none;
}
`;

@customElement("hpcc-quarterpie", { template, styles })
export class HPCCQuarterPieElement extends HPCCPieElement {
    /**
     * Determines the placement and start/end angle.
     * 
     * @defaultValue "left"
     */
     @attribute({ type: "string" }) orientation: "left" | "right" = "left";

    constructor() {
        super();
        this._slices = d3.select<SVGGElement, unknown>(this._slicesG);
        this._labels = d3.select<SVGGElement, unknown>(this._labelsG);
        console.log("this.orientation", this.orientation);
    }

    update(changes: ChangeMap) {
        super.update(changes);
        console.log("changes", changes);
        const outerRadius = this.calcOuterRadius();
        const x = (this.clientWidth / 2) - (this.orientation === "left" ? (outerRadius/2) : -(outerRadius/2));
        const y = (this.clientHeight / 2) + (outerRadius/2);
        this._slices.attr("transform", `translate(${x}, ${y})`);
        this._labels.attr("transform", `translate(${x}, ${y})`);
    }

    updateD3Pie() {
        super.updateD3Pie();
        this.d3Pie
            .startAngle(this.orientation === "left" ? 0 : -Math.PI / 2)
            .endAngle(this.orientation === "left" ? Math.PI / 2 : 0)
            ;
    }

    calcOuterRadius() {
        const maxTextWidth = this._legacy.textSize(this.data.map(d => this.getLabelText({ data: d })), "Verdana", 12).width;
        return Math.min(this._svg.clientWidth - maxTextWidth - 10, this._svg.clientHeight - 12 * 6) - 2;
    }

}
