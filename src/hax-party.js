import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";

export class HaxParty extends DDD {
    static get tag() {
        return "hax-party"; 
    }

    constructor() {
        super(); 
        this.title = "Add User(s) to Party"; 
    }
    
    static get styles() {
      return [
        super.styles,
        css`
        :host {
          display: block;
        }

        .wrapper {
            color: var(--ddd-theme-default-keystoneYellow); 
            height: 200px;
            width: 200px;
            padding: 0px;
        }

        .titlebar {
            margin-top: 0px;
            padding: var(--simple-modal-titlebar-padding, 0px var(--ddd-spacing-4));
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: var(--simple-modal-titlebar-background, var(--ddd-theme-default-limestoneLight));
            height: var(--simple-modal-titlebar-height, unset);
            line-height: var(--simple-modal-titlebar-line-height, unset);
            color: var(--ddd-theme-default-nittanyNavy);
            font-size: var(--ddd-theme-h3-font-size);
        }

        .title {
            background-color: transparent;
            margin: 0;
            padding: 0;
            text-align: center;
            font-size: 20px;
            line-height: 20px;
            color: black;
        }

      `];
    }

    render() {
      
        return html`          
          <div class="wrapper">
            <div class="titlebar">
                <div class=title>${this.title}</div>
            </div>

          </div>
           
          `;
      }
      
      
    static get properties() {
      return {
        ...super.properties,
        title: { type: String }
      }
    }
  }

  globalThis.customElements.define(HaxParty.tag, HaxParty);
