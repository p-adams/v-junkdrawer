import "../style.css";
const template = document.createElement("template");
template.innerHTML = `
  <div>
    testing
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
