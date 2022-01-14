import { ChangeMap } from "./message";
import { HPCCResizeElement } from "./resize";

export class HPCCSVGElement extends HPCCResizeElement {

    protected _svg: SVGSVGElement;

    constructor() {
        super();
        if (!this._svg) {
            throw new Error("SVG element not found");
        }
    }

    enter() {
    }

    update(changes: ChangeMap) {
        super.update(changes);
        this._svg.setAttribute("width", `${this.clientWidth}px`);
        this._svg.setAttribute("height", `${this.clientHeight - 5}px`);
        this._svg.setAttribute("viewBox", `0 0 ${this._svg.clientWidth} ${this._svg.clientHeight}`);
    }
}
