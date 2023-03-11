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
              <p>This is a react component</p>
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
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'buy-button': LitBuyButton
  }
}
