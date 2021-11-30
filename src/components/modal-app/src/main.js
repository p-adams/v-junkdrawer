import "../style.css";
const template = document.createElement("template");
template.innerHTML = `
<style>
  .modal {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: black;
    opacity: 0.4;
  }
  .content-wrapper {
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: white;
    margin: 15% auto;
    width: 75%;
  }
</style>
<div class="modal">
  <div class="content-wrapper">
    <slot name="modal-dismiss" class="dismiss"/>
    <slot name="modal-content"/>
    <slot name="modal-actions"/>
  </div>
</div>
`;
customElements.define(
  "modal-app",
  class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      const modalContainer = this.shadowRoot.querySelector(".modal");
      const contentWrapper = this.shadowRoot.querySelector(".content-wrapper");
      modalContainer.addEventListener("click", (e) => {
        modalContainer.style.display = "none";
      });
      contentWrapper.addEventListener("click", (e) => {
        e.stopPropagation();
      });
    }
  }
);
