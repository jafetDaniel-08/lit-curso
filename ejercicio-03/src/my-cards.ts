import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('card-list')
class CardList extends LitElement {
    static styles = css`
    .card-container {
      display: flex;
      flex-wrap: nowrap;
      overflow-x: auto;
    }
    .card {
      font-family: sans-serif;
      border: 1px solid #946bca;
      padding: 16px;
      margin: 16px;
      border-radius: 8px;
      min-width: 300px;
      max-width: 300px;
      height: 400px;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-sizing: border-box;
      box-shadow: 0 10px 8px #946bca; /* sombra */
      transition: box-shadow 0.3s ease-in-out; /* Transición suave para la sombra */
    }
    .card:hover {
      box-shadow: 0 2px 16px #946bca; /* Sombra más prominente en hover */
    }
    .card img {
      width: 100%;
      height: auto;
      border-radius: 8px 8px 0 0;
    }
    .card h2 {
      margin: 16px 0 8px;
      font-size: 1.5em;
      text-align: center;
    }
    .card p {
      margin: 0.5em 0 0;
      padding: 0 16px;
      text-align: center;
      flex-grow: 1;
    }
  `;

  @property({ type: Array }) 
  cards: Array<{ title: string, imageUrl: string, description: string }> = [];

  connectedCallback() {
    super.connectedCallback();
    this.fetchCards();
  }

  async fetchCards() {//simulacion de peticion http
    const response = await fetch('./src/cards.json');
    const cardData: Array<{ title: string, imageUrl: string, description: string }> = await response.json();
    this.cards = cardData;
  }

render() {
    return html`
      <div class="card-container">
        ${this.cards.map(card => html`
          <div class="card">
            <img src="${card.imageUrl}" alt="${card.title}">
            <h2>${card.title}</h2>
            <p>${card.description}</p>
          </div>
        `)}
      </div>
    `;
  }
}
