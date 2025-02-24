import { html, LitElement, PropertyValues } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { isSameDate } from "./date-utils";

@customElement('date-display')
class DateDisplay extends LitElement{

    @property({
    hasChanged: (value: Date, oldValue:Date)=>{
        return isSameDate(value,oldValue);
    }
   })
    date?: Date;

    @query("datefield")
    datefield!: HTMLSpanElement;

    frames = [
        {backgroundColor: "#fff"},
         {backgroundColor: "#324fff"},
         {backgroundColor: "#fff"}    
    ]

    render(){
        return html `
        <span id="datefield">
            ${this.date?.toLocaleDateString()}
        </span>
        `;
    }
    update(changed: PropertyValues<this>){
        if (changed.has('date')) {
            console.log(this.date);
        }
    }
}