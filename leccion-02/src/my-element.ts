import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { localDateFromUTC } from "./date-utils";

@customElement("my-element")
class MyElement extends LitElement{

  static styles = css`
  .title {
    color: blue;
    font-weight: bold;
    font-size: 32px;
  }
  .sub-title {
    color: blue;
    font-size: 28px;
  }
`;
  
  @property()
  date?: Date;

  _dateChanged(e: Event){
    const utcDate = (e.target as HTMLInputElement).valueAsDate;
    if (utcDate) {
      this.date = localDateFromUTC(utcDate);
      console.log(":D", this.date)
    }
  }

  _chooseToday(){
    this.date = new Date();
  }

  render(){
    return html `
    <p>elige fecha:</p>
    <input type="date" @change=${this._dateChanged}/>
    <p><input type="submit"/></p>
    <p><button @click=${this._chooseToday}>
      seleccione hoy
    </button></p>
    <p>fecha elegida: <date-display>.date=${this.date}</date-display></p>

    <label class="">hola lit</label>
    `
  }

}