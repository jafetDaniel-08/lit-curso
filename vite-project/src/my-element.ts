import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";


@customElement("my-element")
export class MyElement extends LitElement{

  static styles = css `
  p {
    color:white;
    font-weight: bold;
    }
    `;

    @property()
    name = "jose";

  render(){
    return html `<p>hola ${this.name}</p>`;
  }
}