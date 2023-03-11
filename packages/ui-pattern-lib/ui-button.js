var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
let UiButton = class UiButton extends LitElement {
    render() {
        return html `
        <div>
            <button part="button" class="shared-class-name">
                <slot></slot>
            </button>
        </div>
    `;
    }
};
UiButton.styles = css `
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
UiButton = __decorate([
    customElement('ui-button')
], UiButton);
export { UiButton };
//# sourceMappingURL=ui-button.js.map