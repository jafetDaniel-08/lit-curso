import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

//nota: el nombre del componente debe constar de dos o mas elementos (name1-name2)
@customElement("app-extenssions")
export class Extenssions extends LitElement{

    @property()
    bodyText = "text in child expression";

    @property()
    label = "cerrar";

    @property({type: Boolean})
    editing = true;

    @property({type: Number})
    value =7;
    
    @property({type: Number})
    counter =0;

    condition = false;

    eventClick() {
      alert("Click")
    }

    eventClickIncrement() {
      this.counter++;
    }
    eventClickDecrement() {
      this.counter--;
    }

    @property()
    animals = ["lion","dog", "cat"];

  render(){
    return html `
    <div>child expression: ${this.bodyText}</div>
    <button aria-label=${this.label}>X</button>
    <div>
        boolean expression
        <input type="text" ?disabled=${!this.editing}>
    </div>

    <div>
         property
        <input id="example-number" type="number" .valueAsNumber=${this.value}>
    </div>

    <div>
        Event
        <button @click="${this.eventClick}">Click me!</button>
      </div>
      
      <div>
        Render
        ${this.condition
          ? html`<p>Condition is true</p>`
          : html`<p>Condition is false</p>`}
      </div>

      <div>
        <button @click="${this.eventClickIncrement}">+</button>
        <input id="count" type="number" value=${this.counter}>
        <button @click="${this.eventClickDecrement}">-</button>
      </div>

      <div>
        <p>Render list</p>
        <ul>
        ${this.animals.map((animal) => {
          return html`<li>${animal}</li>`;
        })}
      </ul>
      </div>
    `;
  }
}