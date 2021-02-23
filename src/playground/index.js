import { LitElement, html } from 'lit-element';
import render from './render.js';
import firstUpdated from './first-updated.js';

export default class Playground extends LitElement {
  static styles;

  constructor() {
    super();
    this.variation = html``;
    this.motion = {
      type: '',
      velocity: '',
      vibe: '',
      trigger: 'hover',
    };
  }

  firstUpdated = firstUpdated.bind(this);

  render = render.bind(this);
}
