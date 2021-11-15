import "../style.css";
const template = document.createElement("template");
template.innerHTML = `
<style>
  .tab-container {
    display: flex;
    justify-content: space-evenly;
    
  }
  .tab-container .tab.active {
    border-bottom: 1px solid blue;
  }
 }
 </style>
  <div class="tab-container">
    <div class="tab active">tab a</div>
    <div class="tab">tab b</div>
    <div class="tab">tab c</div>
  </div>`;
customElements.define(
  "tabs-app",
  class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
);
