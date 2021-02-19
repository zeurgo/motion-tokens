function h(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}import{LitElement as f,html as r}from"../../../_snowpack/pkg/lit-element.js";import{upperFirst as c}from"../../../_snowpack/pkg/lodash.js";function m(e){return r`
    <option value="${e}-slow">${c(e)}-Slow</option>
    <option value="${e}-medium">${c(e)}-Medium</option>
    <option value="${e}-fast">${c(e)}-Fast</option>
    <option hidden value="n/a">undefined</option>
  `}const s={"fade-slow":{vel:"slow",vibe:"calm"},"fade-medium":{vel:"medium",vibe:"calm"},"fade-fast":{vel:"fast",vibe:"calm"},"spin-slow":{vel:"slow",vibe:"energic"},"spin-medium":{vel:"medium",vibe:"energic"},"spin-fast":{vel:"fast",vibe:"energic"},"scale-slow":{vel:"slow",vibe:"soft"},"scale-medium":{vel:"medium",vibe:"soft"},"scale-fast":{vel:"fast",vibe:"soft"}};export default class b extends f{constructor(){super();this.variation=r``,this.variationValue=""}firstUpdated(){const t=this.shadowRoot.querySelector("#square"),i=this.shadowRoot.querySelector("#velocity"),l=this.shadowRoot.querySelector("#vibe"),a=this.shadowRoot.querySelector("#expand"),v=this.shadowRoot.querySelector('[for="expand"]'),o=this.shadowRoot.querySelector("#variation"),n=this.shadowRoot.querySelector("#type"),d=()=>{s[this.variationValue].vel!==i.value||s[this.variationValue].vibe!==l.value?o.value="n/a":o.value=this.variationValue},p=()=>{let u=n.value;a.value!=="n/a"&&(u+=`-${a.value}`),t.setAttribute("type",u)};o.onchange=()=>{i.value=s[o.value].vel,l.value=s[o.value].vibe,p(),t.setAttribute("velocity",i.value),t.setAttribute("vibe",l.value),this.variationValue=o.value},n.onchange=async()=>{this.variation=m(n.value),await this.requestUpdate(),n.value!=="scale"?(a.value="n/a",a.disabled=!0,v.classList.add("disabled")):(a.value="20p",a.disabled=!1,v.classList.remove("disabled")),o.value=o.querySelector("option").value,o.onchange()},i.onchange=()=>{t.setAttribute("velocity",i.value),d()},l.onchange=()=>{t.setAttribute("vibe",l.value),d()},a.onchange=p,n.onchange()}render(){return r`<div>
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
