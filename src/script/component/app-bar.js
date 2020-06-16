import "../../images/titleIcon.png";
class AppBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
       <style>
           * {
               margin: 0;
               padding: 0;
               box-sizing: border-box;
           }
           :host {
               display: block;
               width: 100%;
               color: rosybrown;
               box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
           }
           h2 {
               padding: 10px;
               font-size: 40px;
               font-family: Forte,sans-serif;
           }
           .gridme {
           display: grid;
           grid-template-columns: 5% 5%;
           margin-left: 10px;
           }
           .gridme > button {
                background: darkslategray;
                border: darkslategray;
           }
           img {
           width: 70px;
           height: 70px;
           }
           @media screen and (max-width: 720px) {
                .gridme {
                grid-template-columns: 70% 20%;
                }
           }
       </style>
       <div class="gridme">
            <img src="../../../dist/52857137a58156c7739c0fac0e99953a.png" alt="icon">
            <h2>Meals</h2>
        </div>
       `;
    }
}

customElements.define("app-bar", AppBar);