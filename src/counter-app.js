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

        #confetti {
            height: 100%; 
            width: 100%; 
        }

        .wrapper {
            background-color: khaki; 
            width: 180px; 
            height: 160px;  
            box-shadow: 5px 5px 5px brown;
            margin: 8px;  
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
        var textColor = "black";
        if(this.counter === 18) {textColor = "blue"}
        if(this.counter === 21) {textColor = "magenta"}
        if(this.counter === this.min) {textColor = "brown"}
        if(this.counter === this.max) {textColor = "brown"}


      return html`
        <div class="wrapper">
        <confetti-container id="confetti">
        <div class="count" style="color:${textColor}">${this.counter}
        </div>
        <div class="buttonwrap">
        <button class="minus" @click="${this.decrease}" ?disabled="${this.min === this.counter}">-</button>
        <button class="plus" @click="${this.increase}" ?disabled="${this.max === this.counter}">+</button>
        </div>
        </confetti-container>
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

    
    updated(changedProperties) {
        if (changedProperties.has("counter") && this.counter == 21) {
            this.makeItRain(); 
        }
    }
  
    makeItRain() {
        import("@lrnwebcomponents/multiple-choice/lib/confetti-container.js").then(
        (module) => {
            setTimeout(() => {
            this.shadowRoot.querySelector("#confetti").setAttribute("popped", "");
            }, 0);
        }
        );
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
