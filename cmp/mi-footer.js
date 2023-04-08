class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2023
        Vladimir Reza Cerna.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
