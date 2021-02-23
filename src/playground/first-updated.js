import { html } from 'lit-element';
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

export default function firstUpdated() {
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

  const setType = async () => {
    let type = typeSelect.value;

    if (expandSelect.value !== 'n/a') {
      type += `-${expandSelect.value}`;
    }

    this.motion.type = type;
    await this.requestUpdate();
  };

  variationSelect.onchange = async () => {
    velocitySelect.value = variationMap[variationSelect.value].vel;
    vibeSelect.value = variationMap[variationSelect.value].vibe;

    this.motion.velocity = velocitySelect.value;
    this.motion.vibe = vibeSelect.value;
    await setType();
  };

  typeSelect.onchange = async () => {
    this.variation = renderTypeVariation(typeSelect.value);
    await this.requestUpdate();

    if (typeSelect.value === 'scale') {
      expandSelect.value = '20p';
      expandSelect.disabled = false;
      expandSelectLabel.classList.remove('disabled');
    } else {
      expandSelect.value = 'n/a';
      expandSelect.disabled = true;
      expandSelectLabel.classList.add('disabled');
    }

    variationSelect.value = variationSelect.querySelector('option').value;
    await variationSelect.onchange();
  };

  velocitySelect.onchange = async () => {
    this.motion.velocity = velocitySelect.value;
    await this.requestUpdate();

    checkVariation();
  };

  vibeSelect.onchange = async () => {
    this.motion.vibe = vibeSelect.value;
    await this.requestUpdate();

    checkVariation();
  };

  expandSelect.onchange = setType;

  typeSelect.onchange();
}
