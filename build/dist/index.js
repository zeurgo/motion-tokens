import o from"./components/playground/index.js";import s from"./components/playground/styles.js";import r from"./styles/branding.js";import l from"./styles/global.js";import{useMotion as a}from"./styles/motion.js";async function i({brandingTokens:t,globalTokens:n}={}){const e={brandingTokens:r(t),globalTokens:l(n)};o.styles=await s(e),customElements.define("jota-playground",o),await a({},document.querySelectorAll(".motion"),!0)}export default i;
