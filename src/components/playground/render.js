import { html } from 'lit-element';

export default function render() {
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
      <div
        motion="${this.motion.type} ${this.motion.velocity} ${this.motion.vibe} ${this.motion.trigger}"
        id="square"
      >
        <span>Hover Me</span>
      </div>
    </main>
  </div> `;
}
