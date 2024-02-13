import { LitElement, html, css } from 'lit';

export class CounterApp extends LitElement {

    static get tag() {
        return "counter-app"; 
    }

    constructor() {
        super(); 
        this.counter = 10; 
        this.min = 0; 
        this.max = 100; 
    }

    static get styles() {
      return css`
        :host {
          display: inline-flex; 
        }

        .wrapper {
            background-color: yellow; 
        }

        .count {
            font-size: 64px; 
            color: black; 
            text-align: center;
            margin: 8px;
        }
        `;
    }

    render() {
      return html`
        <div class="wrapper">
        <div class="count">${this.counter}
        </div>
        <div class="min">${this.min}
        </div>
        <div class="max">${this.max}
        </div>
        </div> 
        `;
    }
    static get properties() {
      return {
        counter: { type: String },
        min: { type:  String },
        max: { type: String },
        };
    }
}

globalThis.customElements.define(CounterApp.tag, CounterApp);
