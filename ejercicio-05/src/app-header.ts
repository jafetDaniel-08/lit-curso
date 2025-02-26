import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("app-header")
class AppHeader extends LitElement {
  static styles = css`
    h1 {
      font-family: sans-serif, "Times New Roman";
      font-weight: bold;
      text-align: center;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    const token = localStorage.getItem('authToken');
    if (!token) {
      window.location.href = '/'; // Redirige al login si no está autenticado
    }
  }

  logout() {
    // Elimina el token de localStorage y redirige al login
    localStorage.removeItem('authToken');
    window.location.href = '/'; // Redirige a la página de login
  }


  render() {
    return html`
      <header>
        <h1>Especies de Animales</h1>
        <button @click="${this.logout}">Cerrar sesión</button>
      </header>
    `;
  }
}