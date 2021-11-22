import "../style.css";
const template = document.createElement("template");
template.innerHTML = `
<style></style>
<div class="modal-container">
modal
</div>
`;
customElements.define(
  "modal-app",
  class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
);
