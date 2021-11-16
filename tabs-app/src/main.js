import "../style.css";
const template = document.createElement("template");
template.innerHTML = `
<style>
  .tab-container {
    display: flex;
    justify-content: space-evenly;
    
  }
  .tab-container .tab {
    cursor: pointer;
  }
  .tab-container .tab.active {
    border-bottom: 1px solid blue;
  }

  .tab-content.active {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .tab-content {
    display: none;
    margin-top: 50px;
  }
 }
 </style>
 <div class="tab-wrapper">
  <div class="tab-container">
    <div class="tab active">tab a</div>
    <div class="tab">tab b</div>
    <div class="tab">tab c</div>
  </div>
  <div class="tab-content active">
  <h4>tab a</h4>
  <p>foo</p>
  </div>
  <div class="tab-content">
    <h4>tab b</h4>
    <p>bar</p>
  </div>
  <div class="tab-content">
    <h4>tab c</h4>
    <p>baz</p>
  </div>
</div>
  
  `;
customElements.define(
  "tabs-app",
  class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      const tabContainer = this.shadowRoot.querySelector(".tab-container");
      const children = tabContainer.children;
      for (let idx = 0; idx < children.length; idx++) {
        const currentTab = children[idx];
        currentTab.addEventListener("click", () => {
          this.shadowRoot
            .querySelectorAll(".tab")
            .forEach((tab) => tab.classList.remove("active"));
          this.shadowRoot
            .querySelectorAll(".tab-content")
            .forEach((tab) => tab.classList.remove("active"));
          currentTab.classList.add("active");
          this.shadowRoot
            .querySelectorAll(".tab-content")
            [idx].classList.add("active");
        });
      }
    }
  }
);
