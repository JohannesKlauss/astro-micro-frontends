import { LitElement, html, css } from 'lit'
import {customElement, property, state} from 'lit/decorators.js'

@customElement('article-detail')
export class ArticleDetail extends LitElement {
  @property({type: String})
  sku: string = '';

  render() {
    if (this.sku) {
      return html`
          <div class="article_detail">
              <h1 class="find_header shared-class-name">This is a Lit component</h1>
              <div class="flex">
                  <div class="find_product">
                      <h2 class="find_headline">Eicher Diesel 215/16 SKU: (${this.sku})</h2>
                      <img class="find_image" src=${`/find/api/${this.sku}.svg`}/>
                  </div>
                  <aside class="find_info">
                      <div>
                          Static updates (MPA style):
                          <select @change=${this.onReload}>
                              <option value="123" ?selected=${this.sku === '123'}>Einfach</option>
                              <option value="456" ?selected=${this.sku === '456'}>Premium</option>
                          </select>
                      </div>

                      <div>
                          Hier wird der Button von Team Buy eingefügt (einmaliger Aufruf, MPA fähig):
                          <slot name="checkout-buy"></slot>
                      </div>

                      <div>
                          Dynamic Updates (SPA style):
                          <select @change=${this.onSelectSku}>
                              <option value="123" ?selected=${this.sku === '123'}>Einfach</option>
                              <option value="456" ?selected=${this.sku === '456'}>Premium</option>
                          </select>
                      </div>

                      <div>
                          Hier wird der React Buy Button von Team Buy eingefügt (gekapselt, refetch bei Änderung der
                          URL):
                          <slot name="checkout-buy-dynamic" data-url="/buy/add-to-basket/${this.sku}"></slot>
                      </div>

                      <div>
                          Hier wird der Lit Buy Button von Team Buy eingefügt (gekapselt, refetch bei Änderung der URL):
                          <slot name="checkout-buy-v2-dynamic" data-url="/buy/add-to-basket/v2/${this.sku}"></slot>
                      </div>
                  </aside>
              </div>
          </div>
      `
    }

    return html`
        <h2>Loading...</h2>
    `
  }

  private onSelectSku(e: Event) {
    this.sku = (e.target as HTMLSelectElement).value;
  }

  private onReload(e: Event) {
    window.location.href = `/find/${(e.target as HTMLSelectElement).value}`
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
    
    .find_info {
      margin: 20px;
    }
    
    .find_info div {
      border: 1px dashed #666;
      padding: 8px;
      margin: 8px;
    }

    .find_layout {
      display: grid;
      padding: 0 1rem 3rem;
      grid-gap: 2rem;
      grid-template-columns: 3fr 2fr;
      min-width: 42rem;
      max-width: 55rem;
      margin: 0 auto;
    }

    .find_header {
      font-size: 2rem;
      margin: 1rem 0 0;
      text-align: center;
      padding: 0.25rem;
      border-width: 3px 0;
      grid-column: 1 / span 2;
    }

    .find_headline {
      font-size: 1.5em;
      text-align: center;
      margin: 0;
    }
    
    .flex {
      display: flex;
    }

    .find_image {
      width: 100%;
    }
    
    .article_detail {
      margin: 4px;
      padding: 4px;
      border: 4px solid darkkhaki;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'article-detail': ArticleDetail
  }
}
