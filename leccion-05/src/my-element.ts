import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("my-element")
export class MyElement extends LitElement {
  render() {
    return html`<p>Hola, Mundo!</p>`;
  }

  static styles = css``;

  sum(n1: number, n2: number){//para pruenas unitarias
    if (isNaN(n1) || isNaN(n2)) {
        throw new  Error("parametros incorrectos");
    }
    return n1+n2;
}

}

declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement;
  }
}
