import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "./app-header.ts";
import "./app-section.ts";
import "./app-footer.ts";

@customElement("app-page")
class AppPage extends LitElement {
  render() {
    return html`
      <app-header></app-header>
      <app-section></app-section>
      <app-footer></app-footer>
    `;
  }
}