import { LitElement, html, css } from 'lit';
import { customElement, property} from 'lit/decorators.js';

@customElement("my-form")
export class LoginForm extends LitElement {

    static styles = css`
    .error { 
        color: red; 
    }
    input.error { 
        color:black;
        background-color: #f4c2c2;
    }
  `;

  @property({ type: String })
  email = "";

  @property({ type: String })
  password = "";

  @property({type: Boolean}) 
  validEmail = false


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

  render() {
    return html`
      <form>
        <label>Username
          <input type="email" .value="${this.email}" @input="${this.emailChange}" class="${this.validEmail ? '' : 'error'}">
          ${this.validEmail ? '' : html`<span class="error">ingrese un correo válido.</span>`}
        </label>
        <br>
        <label>Password
          <input type="password" .value="${this.password}" @input="${this.passwordChange}">
        </label>
        <br>
        <button type="button" ?disabled="${!this.validEmail || !this.password}">
          Log In
        </button>
      </form>
    `;
  }


}