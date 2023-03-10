import { LitElement, html, css } from 'lit'
import {customElement, property} from 'lit/decorators.js'

@customElement('article-detail')
export class ArticleDetail extends LitElement {
  @property({type: String})
  sku: string = '';

  render() {
    if (this.sku) {
      return html`
          <h1 class="decide_header shared-class-name">This is a Lit component</h1>
          <div class="flex">
              <div class="decide_product">
                  <h2 class="decide_headline">Eicher Diesel 215/16 SKU: (${this.sku})</h2>
                  <img class="decide_image" src="https://mi-fr.org/img/eicher.svg"/>
              </div>
              <aside class="decide_info">
                  <div>
                      <select @change=${this.onSelectSku} >
                          <option value="123" ?selected=${this.sku === '123'}>Einfach</option>
                          <option value="456" ?selected=${this.sku === '456'}>Premium</option>
                      </select>
                  </div>
                  <div>
                      Hier wird der Button von Team Buy eingefügt:
                      <slot name="checkout-buy"></slot>
                  </div>
              </aside>
          </div>
      `
    }

    return html`
        <h2>Loading...</h2>
    `
  }

  private onSelectSku(e: Event) {
    window.location.href = `/decide/${(e.target as HTMLSelectElement).value}`
  }

  static styles = css`
    * {
      box-sizing: border-box;
    }

    html {
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-size: 20px;
    }

    a {
      color: inherit;
    }

    /* PRODUCT PAGE STYLES */
    
    .shared-class-name {
      background-color: cornflowerblue;
    }
    
    .decide_info {
      margin: 20px;
    }
    
    .decide_info div {
      border: 1px dashed #666;
      padding: 8px;
      margin: 8px;
    }

    .decide_layout {
      display: grid;
      padding: 0 1rem 3rem;
      grid-gap: 2rem;
      grid-template-columns: 3fr 2fr;
      min-width: 42rem;
      max-width: 55rem;
      margin: 0 auto;
    }

    .decide_header {
      font-size: 2rem;
      margin: 1rem 0 0;
      text-align: center;
      padding: 0.25rem;
      border-width: 3px 0;
      grid-column: 1 / span 2;
    }

    .decide_headline {
      font-size: 1.5em;
      text-align: center;
      margin: 0;
    }
    
    .flex {
      display: flex;
    }

    .decide_image {
      width: 100%;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'article-detail': ArticleDetail
  }
}
