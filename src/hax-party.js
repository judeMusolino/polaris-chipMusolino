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

        .box {
            width: 200px; 
            height: 200px; 
            color: var(--ddd-theme-default-keystoneYellow); 
        }

        .wrapper {
            color: var(--ddd-theme-default-keystoneYellow); 
            min-height: var(--simple-modal-min-height, unset);
            min-width: var(--simple-modal-min-width, unset);
            z-index: var(--simple-modal-z-index, 1000);
            resize: var(--simple-modal-resize, unset);
            padding: 0px;
            --dialog-height: var(--simple-modal-height, auto);
            --dialog-width: var(--simple-modal-width, 75vw);
            --dialog-max-width: var(--simple-modal-max-width, 100vw);
            --dialog-max-height: var(--simple-modal-max-height, 100vh);
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
          <div class="box"></div>
          
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
