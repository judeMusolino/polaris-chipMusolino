import { LitElement, html, css } from 'lit';

export class Alert extends LitElement {

    static get tag() {
        return "this-alert"; 
    }

    constructor() {
        super(); 
        this.content = "This is an alert";  
        this.status = "notice"; 
    }

    static get styles() {
      return css`
        :host([notice]) {
          background-color: blue;    
        }
        
        :host {
          position: sticky;  
           top: 0px; 
           
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
          this.fancy = true;
        }
        else {
          this.fancy = false;
        }
      }


    render() {
      var textColor = "black";
      if(this.status === "notice") {backgroundcolor = "blue"}
      
      return html`
        <div class="wrapper" style="color:${backgroundcolor}">
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
        sticky: { type: String , reflect: true},
        };
    }
}

globalThis.customElements.define(Alert.tag, Alert);
