import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('ui-button')
export class UiButton extends LitElement {
  override render() {
    return html`
        <div>
            <button part="button" class="shared-class-name">
                <slot></slot>
            </button>
        </div>
    `;
  }

  static override styles = css`
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
      border-radius: 45px;
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease 0s;
      cursor: pointer;
      outline: none;
    }

    button:hover {
      background-color: #2EE59D;
      box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
      color: #fff;
      transform: translateY(-7px);
    }
    
    .shared-class-name {
      border: 1px solid rgba(46, 229, 157, 0.4);
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'ui-button': UiButton;
  }
}
