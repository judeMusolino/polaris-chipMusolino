import { LitElement, html, css } from 'lit';

export class Alert extends LitElement {

    static get tag() {
        return "this-alert"; 
    }

    constructor() {
        super(); 
        this.content="This is an alert. This is the extended paragraph with details.";  
        this.status="original"; 
        this.sticky=false; 
        this.date="March 13, 2022"
    }

    static get styles() {
      return css`
        :host([sticky]) {
          position: sticky;
          top: 0px;
          bottom: 0px; 
        }

        :host {
          position: inline-flex;  
          background-color: purple; 
        }
        
        .wrapper {
          background-color: transparent; 
          height: 3.375rem; 
          display: flex; 
          justify-content: center; 
        }

        .wrapper [open] {
          background-color: red; 
          justify-content: center; 
          display: flex; 
        }

        .content {
          padding: 8px; 
          margin: 16px; 
          color: white; 
        }

        details summary {
          height: 3.375rem;
          width: 313.9px; 
          display: flex;
          border: none;
          position: center; 
          background-color: transparent;
          cursor: pointer;
          text-transform: uppercase;
          font-weight: 700;
          font-style: italic;
          justify-content: center;
          align-items: center;
          color: #000321;
          font-size: 1.25rem; 
        }

        details div {
          
          max-width: 1350px;
          height: 100%;
          font-family: 'Roboto', sans-serif;
          color: #000;
          font-size: 1.2em;
          font-weight: 200;
          padding: 0;
          background-color: #cfeceb;
        }

        .alert-icon {
          height: 1.75rem;
          padding: 0;
          margin-right: -0.75rem;
          stroke: black; 
        }

        .content {
          position: relative;
          flex: 8;
          display: flex;
          align-items: center;
          margin-right: 2vw;
          padding: 24px 0;
        }

        .triangle {
          bottom: 50px;
          left: -35px;
          position: absolute;
          border-style: solid;
          border-width: 0 50px 50px;
        }

        .polygon {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          -webkit-transform: skew(21deg, 0);
          -ms-transform: skew(21deg, 0);
          transform: skew(21deg, 0);
          left: -20px;
          width: 105%;
        }

        .date-time {
          display: block;
          flex: 2;
          align-self: center;
          padding: 0;
          position: relative;
          margin-right: 2vw;
        }
        `;
    }

    openChanged(e) {
        console.log(e.newState);
        if (e.newState === "open") {
          this.opened = true;
        }
        else {
          this.opened = false;
        }
      }


    render() {
      
      return html`
        <div class="wrapper" ?open="${this.closed}">
        <details ?open="${this.closed}" @toggle="${this.openChanged}">
            <summary>
            <svg xmlns="http://www.w3.org/2000/svg" width="82" height="82" viewBox="0 0 82 82" class="alert-icon"><g transform="translate(-350.099 -428.714)"><g transform="translate(350.099 428.714)" fill="none" stroke-width="6"><circle cx="41" cy="41" r="41" stroke="none"></circle><circle cx="41" cy="41" r="38" fill="none"></circle></g><g transform="translate(384.41 448.566)"><rect width="10.381" height="7.786" transform="translate(0.919 34.336)"></rect><path d="M6520.672,2327.554h-5.854l-3.21-23.669V2299.2h11.81v4.681Z" transform="translate(-6511.607 -2299.203)" class="alert-icon-min"></path></g></g></svg>
            Test Campus Alert!
            <i class="icon-angle-down"></i>
            </summary>
            <div class="content">
              <div class="date-time">
                <p>${this.date}</p>
                <p>12:00 AM</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="82" height="82" viewBox="0 0 82 82" class="alert-icon"><g transform="translate(-350.099 -428.714)"><g transform="translate(350.099 428.714)" fill="none" stroke-width="6"><circle cx="41" cy="41" r="41" stroke="none"></circle><circle cx="41" cy="41" r="38" fill="none"></circle></g><g transform="translate(384.41 448.566)"><rect width="10.381" height="7.786" transform="translate(0.919 34.336)"></rect><path d="M6520.672,2327.554h-5.854l-3.21-23.669V2299.2h11.81v4.681Z" transform="translate(-6511.607 -2299.203)" class="alert-icon-min"></path></g></g></svg>
            <slot class="content">${this.content}</slot>
              <div class="triangl"></div>
              <div class="polygon"></div>
            </div>
        </details>
        </div>
         
        `;
    }

    
    
    static get properties() {
      return {
        content: { type: String , reflect: true},
        closed: { type: Boolean , reflect: true},
        status: { type: String , reflect: true},
        date: { type: String , reflect: true},
        sticky: { type: Boolean , reflect: true},
        };
    }
}

globalThis.customElements.define(Alert.tag, Alert);
