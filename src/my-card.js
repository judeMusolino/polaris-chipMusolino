import { LitElement, html, css } from 'lit';

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
    this.title = "My card";
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }
      .card {
        background-color: orange; 
        border-radius: 10%;
        width: 300px; 
        height: 240px; 
        padding: 16px; 
        margin: 8px; 
}

      #card-list {
      display: flex;
}
      .heading {
        font-size: 32px; 
        color: black; 
        margin: 8px 4px 8px 80px; 
}
      .image {
        float: left; 
        margin: 8px 4px 4px 10px; 
        border-radius: 0%; 
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

    `;
  }

  render() {
    return html`
      <div id="wrapper">
      <div class="card">
      <div class="heading">${this.title}</div>
    <img src="${this.image}"class="image" width=120 height=120>
  </img>
    <p class="para">${this.para}</p>
    <a href="${this.link}">
      <button class="btn">${this.button}</button>
    </a>
    </div>
    </div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type:  String },
      para: { type: String },
      button: { type: String },
      link: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
