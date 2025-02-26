import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

//nota: el nombre del componente debe constar de dos o mas elementos (name1-name2)
@customElement("app-ejercicio01")
export class Ejercicio1 extends LitElement{
    
    @property({type: Number})
    counter =0;
  
    eventClickIncrement() {
      this.counter++;
    }
    eventClickDecrement() {
      this.counter--;
    }
    
  render(){
    return html `
      <div>
        <button @click="${this.eventClickIncrement}">+</button>
        <input id="count" type="number" .value=${this.counter.toString()}>
        <button @click="${this.eventClickDecrement}">-</button>
      </div>
    `;
  }
}