export class InputField extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // Define required attributes
    this._label = this.innerHTML;
    this._type = this.getAttribute('type');
    this._placeholder = this.getAttribute('placeholder');
    this._id = this.getAttribute('id');

    // Define optional attributes
    this._min = this.getAttribute('min');
    this._max = this.getAttribute('max');

    // Create DOM elements and expose the `<input>` tag
    const el_Label = document.createElement('label');
    const el_Input = this._el_Input = document.createElement('input');
    
    // Set basic styles
    const el_Style = document.createElement('style');
    el_Style.textContent = `
      :host {
        display: none;
        margin: 0.5rem;
        width: 50%;
        background-color: rgb(9, 40, 70);
        padding: 0.5rem;
        border-radius: 0.5rem;
      }
    `;
    this._enableDisplay();

    // Set required attributes
    el_Label.innerHTML = this._label;
    el_Label.setAttribute('for', this._id);
    el_Input.setAttribute('type', this._type);
    el_Input.setAttribute('placeholder', this._placeholder);
    el_Input.setAttribute('name', this._id);

    // Set optional attributes
    if (this._min)
      el_Input.min = this._min;
    if (this._max)
      el_Input.max = this._max;

    // Establish hierarchy
    this._shadowRoot.append(el_Style);
    this._shadowRoot.append(el_Label);
    this._shadowRoot.append(el_Input);

    // Simulate and forward events from `<input>` tag
    el_Input.addEventListener('keydown', event => {
      if (event.key !== 'Enter') return;
      this.dispatchEvent(new Event('submit', { bubbles: true }));
    });
  }

  /**
   * Update display of this element based on boolean
   * @param {boolean} doEnable
   */
  updateDisplay(doEnable) {
    if (doEnable)
      this._enableDisplay();
    else
      this._disableDisplay();
  }

  _enableDisplay() { this.style.display = 'block'; }
  _disableDisplay() { this.style.display = 'none'; }

  /** Forward the value from the stored `<input>` tag */
  get value() { return this._el_Input.value; }
  get id() { return this._id; }
}

customElements.define('input-field', InputField);
