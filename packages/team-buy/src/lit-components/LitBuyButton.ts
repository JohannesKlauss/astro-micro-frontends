import { LitElement, html, css } from 'lit'
import {customElement, property} from 'lit/decorators.js'

@customElement('buy-button')
export class LitBuyButton extends LitElement {
  @property({type: String})
  sku: string = '';

  @property({type: Number})
  price: number = 0;

  broadcastChannel: BroadcastChannel | undefined;

  constructor() {
    super();

    if (typeof BroadcastChannel !== 'undefined') {
      this.broadcastChannel = new BroadcastChannel('mini-cart');
    }
  }

  render() {
    if (this.sku) {
      return html`
          <div>
              <p>This is a Lit component</p>
              <button @click=${this.onClick} class="shared-class-name">
                  Buy SKU ${this.sku} for ${this.price}€.
              </button>
          </div>
      `
    }

    return html`
        <h2>Loading...</h2>
    `
  }

  private onClick() {
    this.broadcastChannel?.postMessage({
      type: 'ADD_TO_CART',
      sku: this.sku,
      price: this.price
    });
  }

  static styles = css`
    .shared-class-name {
      background-color: tomato;
      border-color: tomato;
    }

    div {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    button {
      width: 140px;
      height: 45px;
      font-family: 'Roboto', sans-serif;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 2.5px;
      font-weight: 500;
      color: #000;
      background-color: #fff;
      border: none;
      border-radius: 4px;
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease 0s;
      cursor: pointer;
      outline: none;
    }

    button:hover {
      box-shadow: 0px 4px 4px rgba(255, 99, 71, 0.4);
      color: #fff;
      transform: translateX(7px);
    }

    .shared-class-name {
      border: 1px solid tomato;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'buy-button': LitBuyButton
  }
}
