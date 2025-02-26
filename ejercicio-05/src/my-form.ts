import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-form')
export class LoginForm extends LitElement {

  static styles = css`
    .error { 
        color: red; 
    }
    input.error { 
        color: black;
        background-color: #f4c2c2;
    }
  `;

  @property({ type: String })
  email = '';

  @property({ type: String })
  password = '';

  @property({ type: Boolean })
  validEmail = false;

  @property({ type: Boolean })
  isLoggedIn = false;

  connectedCallback() {
    super.connectedCallback();
    // Verificar si hay un token en localStorage
    this.isLoggedIn = !!localStorage.getItem('authToken');
  }

  emailChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.email = target.value;
    this.validEmail = this.validateEmail();
  }
  
  passwordChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.password = target.value;
  }

  validateEmail() {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(this.email);
  }

  login() {
    // Simula la validación de las credenciales
    if (this.validEmail && this.password) {
      // Guardamos el token en localStorage
      localStorage.setItem('authToken', 'valid-token');
      this.isLoggedIn = true;
      this.requestUpdate(); // Solicita una actualización del componente
      this.redirectToAppPage(); // Redirige a la página destino
    } else {
      alert('Credenciales incorrectas');
    }
  }

  redirectToAppPage() {
    // Redirige al usuario a la página de destino
    window.location.href = '/app-page';
  }

  logout() {
    // Elimina el token de localStorage y cierra la sesión
    localStorage.removeItem('authToken');
    this.isLoggedIn = false;
    this.requestUpdate(); // Solicita una actualización del componente
    window.location.href = '/'; // Redirige nuevamente a la página de login
  }

  render() {
    return html`
        ${this.isLoggedIn
          ? html`
              <app-page></app-page>
            `
          : html`
              <form @submit="${(e: Event) => e.preventDefault()}">
                <label>Username:
                  <input type="email" .value="${this.email}" @input="${this.emailChange}" class="${this.validEmail ? '' : 'error'}">
                  ${this.validEmail ? '' : html`<span class="error">Ingrese un correo válido.</span>`}
                </label>
                <br>
                <label>Password:
                  <input type="password" .value="${this.password}" @input="${this.passwordChange}">
                </label>
                <br>
                <button @click="${this.login}" ?disabled="${!this.validEmail || !this.password}">
                  Login
                </button>
              </form>
            `}
    `;
  }
}

