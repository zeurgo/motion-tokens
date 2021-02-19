import { property, LitElement, html } from 'lit-element';

export default class DsButton extends LitElement {
  @property({ type: Boolean }) primary = false;

  @property({ type: Boolean }) secondary = false;

  @property({ type: Boolean }) disabled = false;

  @property({ type: Boolean }) inverse = false;

  @property() size = 'large';

  static styles;

  update(changes) {
    super.update(changes);

    const el = this.shadowRoot.querySelector('button');

    el.classList.toggle('disabled', this.disabled);
    el.classList.toggle('primary', this.primary);
    el.classList.toggle('secondary', this.secondary);
    el.classList.toggle('inverse', this.inverse);
  }

  render() {
    return html`
      <button ?disabled=${this.disabled} class="${this.size}">
        <slot></slot>
      </button>
    `;
  }
}

// prettier-ignore
export function Button({ type, size, label, inverse, disabled }) {
  return html`
  <ds-button
    ?primary=${type === 'primary'}
    ?secondary=${type === 'secondary'}
    ?inverse=${inverse}
    ?disabled=${disabled}
    size="${size}"
  >
    ${label}
  </ds-button>`;
}
