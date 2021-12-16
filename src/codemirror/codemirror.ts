import { display } from "@microsoft/fast-foundation";
import { EditorState, EditorView, basicSetup } from "@codemirror/basic-setup";
import { html as cmHtml } from "@codemirror/lang-html";
import { json as cmJson } from "@codemirror/lang-json";
import { defaultHighlightStyle } from "@codemirror/highlight";
import { oneDarkTheme, oneDarkHighlightStyle } from "@codemirror/theme-one-dark";
import { HPCCResizeElement, attribute, property, ChangeMap, customElement, css, html, ref } from "../common/hpcc-element";

const template = html<HPCCCodemirrorElement>` <div ${ref("_div")}></div> `;

const styles = css`
    ${display("inline")} :host {
    }

    .cm-editor {
        border: 1px solid #ddd;
    }
`;

@customElement({ name: "hpcc-codemirror", template, styles })
export class HPCCCodemirrorElement extends HPCCResizeElement {
    @attribute width?: number | string = "100%";
    @attribute height?: number | string = "100%";

    /**  
     * Text to be displayed in the editor
     */
    @attribute type: "html" | "json" = "html";

    /**  
     * Text to be displayed in the editor
     */
    @attribute theme: "light" | "dark" = "light";

    /**  
   * Text to be displayed in the editor
   */
    @property text: string = "";
    private _text: string;

    protected _cmLight = [defaultHighlightStyle];
    protected _cmDark = [oneDarkTheme, oneDarkHighlightStyle];
    protected _cmJson = cmJson();
    protected _cmHtml = cmHtml();

    _div: HTMLDivElement;
    _view: EditorView;

    protected extension() {
        const retVal = [basicSetup];
        switch (this.type) {
            case "json":
                retVal.push(this._cmJson);
                break;
            case "html":
            default:
                retVal.push(this._cmHtml);
                break;
        }
        switch (this.theme) {
            case "dark":
                retVal.push(this._cmDark);
                break;
            case "light":
            default:
                retVal.push(this._cmLight);
                break;
        }
        return retVal;
    }

    enter() {
        super.enter();
        this._view = new EditorView({
            state: EditorState.create({
                doc: "",
                extensions: this.extension()
            }),
            parent: this._div,
            dispatch: (tr) => {
                this._view.update([tr]);
                if (!tr.changes.empty) {
                    this._text = this._view.state.doc.toString();
                    this.$emit("change", this._text);
                }
            }
        });
    }

    update(changes: ChangeMap) {
        super.update(changes);
        if (changes.type) {
            this._view.dispatch({
                reconfigure: {
                    full: this.extension(),
                }
            } as any);
        }
        if (changes.text) {
            this._view.dispatch({
                changes: {
                    from: 0,
                    to: this._view.state.doc.length,
                    insert: this.text
                }
            });
        }
    }

    exit() {
        this._view.destroy();
        super.exit();
    }
}
