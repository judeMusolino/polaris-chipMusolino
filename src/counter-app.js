import { LitElement, html, css } from 'lit';

export class CounterApp extends LitElement {

    static get tag() {
        return "counter-app"; 
    }

    constructor() {
        super(); 
        this.counter = 10; 
        this.min = 0; 
        this.max = 20; 
    }

    static get styles() {
      return css`
        :host {
          display: inline-flex; 
        }

        :host([counter=16]).count {
            color: red; 
        }

        .wrapper {
            background-color: yellow; 
            width: 180px; 
            height: 160px;  
        }

        .count {
            font-size: 64px; 
            color: black; 
            text-align: center;
            margin: 8px;
        }

        .min, .max {
            font-size: 0px;  
            
        }

        .buttonwrap {
            text-align: center; 
        }

        .plus, .minus {
            font-size: 32px; 
            margin: 8px;
            width: 40px; 

        }

        .plus:hover, .plus:focus, .minus:hover, .minus:focus {
            background-color: black; 
            color: white; 
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
        <div class="buttonwrap">
        <button class="minus" @click="${this.decrease}" ?disabled="${this.min === this.counter}">-</button>
        <button class="plus" @click="${this.increase}" ?disabled="${this.max === this.counter}">+</button>
        </div>
        </div> 
        `;
    }

    decrease() {
        if (this.counter > this.min) {
            this.counter--;
        }
    }

    increase() {
        if (this.counter < this.max) {
            this.counter++;
        }
    }

    static get properties() {
      return {
        counter: { type: Number , reflect: true},
        min: { type:  Number },
        max: { type: Number },
        };
    }
}

globalThis.customElements.define(CounterApp.tag, CounterApp);
