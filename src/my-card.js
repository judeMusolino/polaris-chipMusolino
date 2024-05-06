import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js"; 

/**
 * Now it's your turn. Here's what we need to try and do
 * 1. 
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.fancy=false;
    this.description="This is the description for the box. There is something fancy going on.";
    this.title="Card Title";
    this.image="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg"; 
    this.para="This is probably an image of a dog. This is the default text for the dog image."; 
    this.link="https://hax.psu.edu"; 
    this.button="Details"; 
  }

  static get styles() {
    return css`
      :host([fancy]) {
        display: inline-flex;
        background-color: lightblue; 
        border: 2px solid blue;
        box-shadow: 10px 5px 5px blue;
        width: 340px; 
        height: 360px;
        margin: 16px;   
      }
      
      :host {
        display: inline-flex;
      }

      
      .card {
        background-color: lightblue; 
        border-radius: 5%;
        width: 300px; 
        height: 240px; 
        padding: 16px; 
        margin: 2px auto;  
}

      .change-color{
        background-color: yellow; 
      }

      #card-list {
      display: flex;
}
      .heading {
        font-size: 32px; 
        color: black; 
        text-align: center;
        margin: 8px; 
        height: 36px;  
        overflow: hidden; 
}

      .image {
        float: left; 
        margin: 8px 4px 4px 10px; 
        border-radius: 0%;     
}
      .meme {
        font-size: 8px; 
        width: 120px; 
        height: 120px; 
      }

      .para {
        padding: 4px; 
        font-size: 16px; 
        width: 120px; 
        float: right; 
        margin: 8px 8px 4px 4px; 
}
      .btn {
        background-color: blue; 
        color: white; 
        font-size: 16px; 
        border-radius: 0%; 
        /*1 value is all margins, 2 values is top+bot, l+r*/
        padding: 8px 40px; 
        /*margin goes up,right,down,left*/
        margin: 16px 4px 4px 80px; 
}

      .btn:focus,
      .btn:hover {
        background-color: lime; 
}
      details summary {
          text-align: left;
          font-size: 20px;
          padding: 8px 0;
          margin: 16px 0px 0px 0px; 
        }

      details [open] summary {
        font-weight: bold; 
      }

      details div {
        border: 2px solid blue;
        text-align: left;
        padding: 8px;
        height: 18px;
        overflow: auto;
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
    return html`
      <div class="wrapper">
      <div class="card">
      <div class="heading">${this.title}</div>
      <div class="image">
      <meme-maker class="meme" alt="Cat stalking a small toy" image-url="${this.image}" top-text="" bottom-text=""> </meme-maker> 
      </div>
      <p class="para">${this.para}</p>
    <a href="${this.link}">
      <button class="btn">${this.button}</button>
    </a>
    <details ?open="${this.fancy}" @toggle="${this.openChanged}">
      <summary>Description</summary>
    <div>
    <slot>${this.description}</slot>
    </div>
    </details>
    </div>
  </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type:  String },
      para: { type: String },
      button: { type: String },
      link: { type: String },
      fancy: { type: Boolean, reflect: true },
    };
  }
}


globalThis.customElements.define(MyCard.tag, MyCard);
