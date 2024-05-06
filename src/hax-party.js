import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import {html, css } from 'lit';
import "@lrnwebcomponents/rpg-character/rpg-character.js";


export class HaxParty extends DDD {
    static get tag() {
        return "hax-party"; 
    }

    constructor() {
        super(); 
        this.title = "Add User(s) to Party"; 
        this.party = []; 
        this.seed = "username"; 
        this.saved = false; 
    }
    
    static get styles() {
      return [
        super.styles,
        css`
        :host {
          display: block;
        }

        .wrapper {
            background-color: white; 
            width: 98%; 
            margin-left: auto;
            margin-right: auto; 
            border-radius: var(--ddd-radius-xs); 
            padding-top: 0px; 
            padding-bottom: var(--ddd-spacing-4);  
            box-shadow: 0px 0px 5px 4px grey;
        }

        .titlebar {
            margin-top: 0px;
            border-radius: var(--ddd-radius-xs) var(--ddd-radius-xs) 0px 0px; 
            padding: var(--ddd-spacing-4);
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: var(--simple-modal-titlebar-height, unset);
            background-color: var(--ddd-theme-default-keystoneYellow);
        }

        .title {
            margin: 0;
            padding: 0;
            text-align: center;
            font-size: var(--ddd-theme-h6-font-size);
            line-height: 20px;
            color: black;
        }

        .close {
          color: var(--ddd-theme-default-original87Pink);
          background-color: transparent; 
        }

        .heading {
          display: block; 
          font-size: var(--ddd-theme-h8-font-size); 
          margin: 0px;
          padding: var(--ddd-spacing-4);
        }

        .inputwrapper {
          padding: 0px; 
          padding-left: var(--ddd-spacing-4);
          padding-right: var(--ddd-spacing-4); 
          display: flex;
          align-items: center;
        }

        .inputname {
          font-family: "Press Start 2P", sans-serif; 
          font-size: var(--ddd-theme-h6-font-size);
          padding: var(--ddd-spacing-2);
          margin: 0px; 
        }

        .theparty {
          padding: var(--ddd-spacing-2); 
          display: inline-flex; 
          flex-wrap: wrap; 
        }

        .character { 
          margin: var(--ddd-spacing-2); 
          background-color: transparent; 
          border: 2px solid var(--ddd-theme-default-keystoneYellow); 
          width: auto; 
          height: auto; 
        }

        .rpg {
          transform: scale(0.75);   
          margin-left: var(--ddd-spacing-2); 
        }

        .userName {
          margin: var(--ddd-spacing-2); 
          text-align: center; 
        }

        .remove {
          color: var(--ddd-theme-default-original87Pink);
          background-color: transparent; 
          float: right; 
          margin: var(--ddd-spacing-4); 
        }

        .remove:hover {
          background-color: black; 
          color: white; 
          cursor: pointer; 
        }

        .save, .add, .unsave {
          font-size: 16px; 
          padding: 8px;
          margin-left: var(--ddd-spacing-4); 
          display: block; 
          color: white;
          background-color: green;
          border: 2px solid black;
          border-radius: 8px;
          font-family: "Press Start 2P", sans-serif; 
          cursor: pointer; 
        }

        .unsave {
          margin-top: var(--ddd-spacing-2);
        }

        .save:hover, .add:hover, .unsave:hover {
          background-color: black; 
          border: 2px solid white; 
        }

        .save:disabled, .add:disabled {
          background-color: grey; 
          border: 2px solid grey; 
        }

        .unsave:disabled {
          font-size: 0px; 
          padding: 0px; 
          border: 0px solid transparent; 
        }

        #confetti {
          height: 100%; 
          width: 100%; 
        }
      `];
    }

    addOnEnter(e) {
      if (e.key === 'Enter') {
        e.preventDefault(); 
        const addButton = this.shadowRoot.querySelector('.add');
        addButton.click();
      }
    }

    addUser(e) {      
      const user = this.shadowRoot.querySelector('.inputname'); 

      if (!/[a-z0-9]/.test(user.value)) {
        e.preventDefault(); 
        alert ("Username should consist of only lowercase letters and numbers.")
      }
      else {
        if (this.party.includes(user.value)) {
          console.log(user.value);  
        }
        else {
        console.log(user.value); 
        this.party.push(user.value); 
        this.requestUpdate(); 
        console.log(this.party);
        this.shadowRoot.querySelector('.inputname').value = ''; 
        } 
      }
    }

    removeUser(e) {
      const userNameL = e.target.parentNode.querySelector('.userName').innerText; 
      const index = this.party.indexOf(userNameL);

      if (index !== -1) {
        this.party.splice(index, 1);
        this.requestUpdate();
        // e.target.parentNode.remove();
      }

      console.log(this.party); 
      console.log(userNameL); 
    }

    saveParty(e) {
      if (this.saved === false) {
        this.saved = true;
        console.log(this.party); 
      }
      else {
        this.saved = false;  
      }
    }
  
    render() {
        return html`          
          <confetti-container id="confetti">
          <div class=wrapper>
            <div class=titlebar>
              <div class=title>${this.title}</div>
              <button class=close>x</button>
            </div>

            <h5 class=heading>Enter Username</h5>
            <div class=inputwrapper>
              <input class=inputname maxlength="30" placeholder="user name..." pattern="[a-z0-9]*" @keypress="${this.addOnEnter}"/>
              <button class=add @click="${this.addUser}" ?disabled="${this.saved === true}">Add</button>
            </div>

            <slot class=theparty>
              ${this.party.map((user) => html`
              <div class="character">
                <rpg-character class="rpg" seed="${user}"></rpg-character>
                <button class="remove" @click="${this.removeUser}" ?disabled="${this.saved === true}">x</button>
                <p class="userName">
                  ${user}
                </p>
                
              </div>
              `)}
            </slot>
            <button class="save" @click="${this.saveParty}" ?disabled="${this.saved === true}">Save Party</button>
            <button class="unsave" @click="${this.saveParty}" ?disabled="${this.saved === false}">Edit Party</button>
          </div>
          </confetti-container>
          `;
      }

    updated(changedProperties) {
      if (changedProperties.has("saved") && this.saved == true) {
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
        ...super.properties,
        title: { type: String },
        party: { type: Array },
        seed: { type: String, attribute: "username"},
        saved: { type: Boolean },
      }
    }
  }

  globalThis.customElements.define(HaxParty.tag, HaxParty);
