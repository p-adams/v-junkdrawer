import "./style.css";

const template = document.createElement("template");
template.innerHTML = `
  <div>
    <h2>Counter App</h2>
      <div class="count">0</div>
      <div>
        <button id="dec">-</button>
        <button id="inc">+</button>
      </div>
  </div>`;

customElements.define(
  "counter-app",
  class extends HTMLElement {
    constructor() {
      super();
      this.count = 0;
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      this.countContainer = this.shadowRoot.querySelector(".count");
      this.decBtn = this.shadowRoot.getElementById("dec");
      this.incBtn = this.shadowRoot.getElementById("inc");

      this.decBtn.addEventListener("click", () => {
        this.count--;
        this.countContainer.innerText = this.count;
      });
      this.incBtn.addEventListener("click", () => {
        this.count++;
        this.countContainer.innerText = this.count;
      });
    }
  }
);
