import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("app-footer")
class AppFooter extends LitElement {
  static styles = css`
    :host {
      bottom: 0;
      left: 0;
      right: 0;
    }
    footer {
      margin-top:5px;
      text-align:center;
      justify-content: center;
      font-family: sans-serif, "Times New Roman";
    }
  `;

  render() {
    return html`
      <footer>
        <p>
        © 2025 Jafet Daniel. Todos los derechos reservados.
        Para más información, contáctanos en email@example.com
        </p>
      </footer>
    `;
  }
}