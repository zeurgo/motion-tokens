function h(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}import{LitElement as f,html as c}from"../../../_snowpack/pkg/lit-element.js";import{upperFirst as r}from"../../../_snowpack/pkg/lodash.js";function m(e){return c`
    <option value="${e}-slow">${r(e)}-Slow</option>
    <option value="${e}-medium">${r(e)}-Medium</option>
    <option value="${e}-fast">${r(e)}-Fast</option>
    <option hidden value="n/a">undefined</option>
  `}const d={"fade-slow":{vel:"slow",vibe:"calm"},"fade-medium":{vel:"medium",vibe:"calm"},"fade-fast":{vel:"fast",vibe:"calm"},"spin-slow":{vel:"slow",vibe:"energic"},"spin-medium":{vel:"medium",vibe:"energic"},"spin-fast":{vel:"fast",vibe:"energic"},"scale-slow":{vel:"slow",vibe:"soft"},"scale-medium":{vel:"medium",vibe:"soft"},"scale-fast":{vel:"fast",vibe:"soft"}};export default class b extends f{constructor(){super();this.variation=c``,this.variationValue=""}firstUpdated(){const o=this.shadowRoot.querySelector("#square"),t=this.shadowRoot.querySelector("#velocity"),s=this.shadowRoot.querySelector("#vibe"),a=this.shadowRoot.querySelector("#expand"),v=this.shadowRoot.querySelector('[for="expand"]'),i=this.shadowRoot.querySelector("#variation"),l=this.shadowRoot.querySelector("#type"),p=()=>{let n=`${l.value}-${t.value}`;d[n].vibe!==s.value&&(n="n/a"),i.value=n},u=()=>{let n=l.value;a.value!=="n/a"&&(n+=`-${a.value}`),o.setAttribute("type",n)};i.onchange=()=>{t.value=d[i.value].vel,s.value=d[i.value].vibe,u(),o.setAttribute("velocity",t.value),o.setAttribute("vibe",s.value),this.variationValue=i.value},l.onchange=async()=>{this.variation=m(l.value),await this.requestUpdate(),l.value!=="scale"?(a.value="n/a",a.disabled=!0,v.classList.add("disabled")):(a.value="20p",a.disabled=!1,v.classList.remove("disabled")),i.value=i.querySelector("option").value,i.onchange()},t.onchange=()=>{o.setAttribute("velocity",t.value),p()},s.onchange=()=>{o.setAttribute("vibe",s.value),p()},a.onchange=u,l.onchange()}render(){return c`<div>
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
    </div> `}}h(b,"styles",void 0);
