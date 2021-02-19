import { LitElement, html } from 'lit-element';
import { upperFirst } from 'lodash';

function renderTypeVariation(type) {
  return html`
    <option value="${type}-slow">${upperFirst(type)}-Slow</option>
    <option value="${type}-medium">${upperFirst(type)}-Medium</option>
    <option value="${type}-fast">${upperFirst(type)}-Fast</option>
    <option hidden value="n/a">undefined</option>
  `;
}

const variationMap = {
  'fade-slow': { vel: 'slow', vibe: 'calm' },
  'fade-medium': { vel: 'medium', vibe: 'calm' },
  'fade-fast': { vel: 'fast', vibe: 'calm' },
  'spin-slow': { vel: 'slow', vibe: 'energic' },
  'spin-medium': { vel: 'medium', vibe: 'energic' },
  'spin-fast': { vel: 'fast', vibe: 'energic' },
  'scale-slow': { vel: 'slow', vibe: 'soft' },
  'scale-medium': { vel: 'medium', vibe: 'soft' },
  'scale-fast': { vel: 'fast', vibe: 'soft' },
};

export default class Playground extends LitElement {
  static styles;

  constructor() {
    super();
    this.variation = html``;
    this.variationValue = '';
  }

  firstUpdated() {
    const square = this.shadowRoot.querySelector('#square');
    const velocitySelect = this.shadowRoot.querySelector('#velocity');
    const vibeSelect = this.shadowRoot.querySelector('#vibe');
    const expandSelect = this.shadowRoot.querySelector('#expand');
    const expandSelectLabel = this.shadowRoot.querySelector('[for="expand"]');
    const variationSelect = this.shadowRoot.querySelector('#variation');
    const typeSelect = this.shadowRoot.querySelector('#type');

    const checkVariation = () => {
      let variation = `${typeSelect.value}-${velocitySelect.value}`;

      if (variationMap[variation].vibe !== vibeSelect.value) {
        variation = 'n/a';
      }

      variationSelect.value = variation;
    };

    const setType = () => {
      let type = typeSelect.value;
      if (expandSelect.value !== 'n/a') {
        type += `-${expandSelect.value}`;
      }
      square.setAttribute('type', type);
    };

    variationSelect.onchange = () => {
      velocitySelect.value = variationMap[variationSelect.value].vel;
      vibeSelect.value = variationMap[variationSelect.value].vibe;

      setType();
      square.setAttribute('velocity', velocitySelect.value);
      square.setAttribute('vibe', vibeSelect.value);

      this.variationValue = variationSelect.value;
    };

    typeSelect.onchange = async () => {
      this.variation = renderTypeVariation(typeSelect.value);
      await this.requestUpdate();

      if (typeSelect.value !== 'scale') {
        expandSelect.value = 'n/a';
        expandSelect.disabled = true;
        expandSelectLabel.classList.add('disabled');
      } else {
        expandSelect.value = '20p';
        expandSelect.disabled = false;
        expandSelectLabel.classList.remove('disabled');
      }

      variationSelect.value = variationSelect.querySelector('option').value;
      variationSelect.onchange();
    };

    velocitySelect.onchange = () => {
      square.setAttribute('velocity', velocitySelect.value);
      checkVariation();
    };

    vibeSelect.onchange = () => {
      square.setAttribute('vibe', vibeSelect.value);
      checkVariation();
    };

    expandSelect.onchange = setType;

    typeSelect.onchange();
  }

  render() {
    return html`<div>
      <aside>
        <h1>Jota Design System</h1>

        <h2>Motion Tokens</h2>

        <section>
          <h3>Base Motion Tokens</h3>

          <label for="velocity">Velocity</label>
          <select id="velocity">
            <option hidden></option>
            <option value="slow">Slow</option>
            <option value="medium">Medium</option>
            <option value="fast">Fast</option>
          </select>

          <label for="vibe">Vibe</label>
          <select id="vibe">
            <option hidden></option>
            <option value="soft">Soft</option>
            <option value="calm">Calm</option>
            <option value="energic">Energic</option>
          </select>

          <label for="displacement" class="disabled">Displacement</label>
          <select id="displacement" disabled>
            <option>n/a</option>
          </select>

          <label for="expand">Expand</label>
          <select id="expand">
            <option value="5p">5%</option>
            <option value="20p">20%</option>
            <option value="25p">25%</option>
            <option value="50p">50%</option>
            <option hidden value="n/a">n/a</option>
          </select>
        </section>

        <section>
          <h3>Animated Tokens</h3>

          <label for="type">Type</label>
          <select id="type">
            <!-- <option hidden></option> -->
            <option value="fade">Fade</option>
            <option value="spin">Spin</option>
            <option value="scale">Scale</option>
          </select>

          <label for="variation">Variation</label>
          <select id="variation">
            ${this.variation}
          </select>
        </section>

        <section>
          <h3>Animation Setting</h3>

          <label for="trigger" class="disabled">Trigger</label>
          <select id="trigger" disabled>
            <option>Hover</option>
          </select>

          <label for="anchor" class="disabled">Anchor Placements</label>
          <select id="anchor" disabled>
            <option>n/a</option>
          </select>
        </section>
      </aside>

      <main>
        <div id="square">
          <span>Hover Me</span>
        </div>
      </main>
    </div> `;
  }
}
