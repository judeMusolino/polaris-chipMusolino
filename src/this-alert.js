import { LitElement, html, css } from 'lit';

export class Alert extends LitElement {

    static get tag() {
        return "this-alert"; 
    }

    constructor() {
        super(); 
        this.content="This is an alert";  
        this.status="original"; 
        this.sticky=false; 
    }

    static get styles() {
      return css`
        :host([sticky]) {
          position: sticky;  
        }

        :host([sticky]).wrapper {
          background-color: yellow;  
        }

        :host {
          position: inline-flex;  
          top: 0px; 
          background-color: yellow; 
        }

        .wrapper {
          background-color: purple; 
          box-shadow: 5px 5px 5px blue;
          margin: 0px;  
          padding: 16px;   
        }

        .content {
            padding: 8px; 
            margin: 16px; 
            color: white; 
        }

        details summary {
            color: white; 
        }

        `;
    }

    openChanged(e) {
        console.log(e.newState);
        if (e.newState === "open") {
          this.sticky = true;
        }
        else {
          this.sticky = false;
        }
      }


    render() {
      
      return html`
        <div class="wrapper">
        <details @toggle="${this.openChanged}">
            <summary>Alert!</summary>
            <div class="content">
            <slot>${this.content}</slot>
            </div>
        </details>
        
        </div> 
        `;
    }

    
    
    static get properties() {
      return {
        content: { type: String , reflect: true},
        opened: { type: String , reflect: true},
        status: { type: String , reflect: true},
        date: { type: String , reflect: true},
        sticky: { type: Boolean , reflect: true},
        };
    }
}

globalThis.customElements.define(Alert.tag, Alert);
