import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import {html, css } from 'lit';


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
            background-color: white; 
            margin: 20px; 
            border-radius: var(--ddd-radius-xs); 
            height: 400px;
            width: 600px;
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
            color: var(--ddd-theme-default-keystoneYellow);
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
          font: var(--ddd-font-secondary); 
          margin: 0px;
          padding: var(--ddd-spacing-4);
          color: var(--simple-modal-header-color);
        }

        .inputwrapper {
          padding: 0px; 
          padding-left: var(--ddd-spacing-4);
          padding-right: var(--ddd-spacing-4); 
          justify-content: space-between;
          display: flex;
          align-items: center;
        }

        .username {
          font-family: "Press Start 2P", sans-serif;
          font-size: 32px;
          padding: 8px;
          margin: 0px; 
        }

        .add {
          font-size: 16px; 
          padding: 8px; 
        }
      `];
    }

    render() {
      
        return html`          
          <div class=wrapper>


            <div class=titlebar>
              <div class=title>${this.title}</div>
              <button class=close>x</button>
            </div>

            <h5 class=heading>Enter username</h5>
            <div class=inputwrapper>
              <input class=username maxlength="30" placeholder="user name.." tabindex="">
              <button class=add>Add</button>
            </div>

            <slot class=theparty></slot>
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
