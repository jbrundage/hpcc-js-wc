import { customElement, css, display, html, ref, ChangeMap, attribute } from "../../common";
import { TabPanel, Widget } from "@lumino/widgets";
import { HPCCLuminoElement } from "./common";
import { tabbar, tabpanel, widget } from "./styles";
import { tabbar as tabbarTheme } from "./theme";
import { WidgetAdapter } from "./widgetAdapter";

const template = html<HPCCTabPanelElement>`\
<div ${ref("_div")}>
</div>
<slot ${ref("_slot")}></slot>`;

const styles = css`
${display("inline-block")} 

:host > slot {
    visibility: hidden;
}

${widget}
${tabbar}
${tabpanel}

${tabbarTheme}

.hpcc-LuminoAdapter {
    padding: 8px;
    border: 1px solid #c0c0c0;
}

:host-context([tab_placement="top"]) .hpcc-LuminoAdapter  {
    border-top: none;
}

:host-context([tab_placement="bottom"]) .hpcc-LuminoAdapter  {
    border-bottom: none;
}
`;

@customElement("hpcc-tabpanel", { template, styles })
export class HPCCTabPanelElement extends HPCCLuminoElement {

    /**
     *  Whether the tabs are movable by the user
     * 
     * @defaultValue false
     */
    @attribute({ type: "boolean" }) tabs_movable: boolean = false;

    /**
     *  Whether the button to add new tabs is enabled
     * 
     * @defaultValue false
     */
    @attribute({ type: "boolean" }) add_button_enabled: boolean = false;

    /**
     *  The placement of the tab bar relative to the content 
     * 
     * @defaultValue "top"
     */
    @attribute tab_placement: "top" | "left" | "right" | "bottom" = "top";

    protected _div: HTMLDivElement;
    protected _slot: HTMLSlotElement;
    protected _tabPanel: TabPanel;

    constructor() {
        super();
    }

    createPanel(): void {
        this._tabPanel = new TabPanel({ document: this.shadowRoot!, tabsMovable: this.tabs_movable, addButtonEnabled: this.add_button_enabled, tabPlacement: this.tab_placement });
    }

    addWidget(w: WidgetAdapter, _e: HTMLElement, _ref?: Widget): void {
        this._tabPanel.addWidget(w);
    }

    enter() {
        super.enter();
        Widget.attach(this._tabPanel, this._div);
    }

    update(changes: ChangeMap<this>) {
        console.log(changes);
        super.update(changes);
        this._tabPanel.tabsMovable = this.tabs_movable;
        this._tabPanel.addButtonEnabled = this.add_button_enabled;
        this._tabPanel.tabPlacement = this.tab_placement;
        this._tabPanel.node.style.width = `${this.clientWidth}px`;
        this._tabPanel.node.style.height = `${this.clientHeight}px`;
        this._tabPanel.update();
    }

    exit() {
        Widget.detach(this._tabPanel);
        super.exit();
    }
}
