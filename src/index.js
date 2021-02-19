import Playground from './components/playground/index.js';
import getPlaygroundStyle from './components/playground/styles.js';

import branding from './styles/branding.js';
import global from './styles/global.js';

async function register({ brandingTokens, globalTokens } = {}) {
  const tokens = {
    brandingTokens: branding(brandingTokens),
    globalTokens: global(globalTokens),
  };

  Playground.styles = [await getPlaygroundStyle(tokens)];
  customElements.define('jota-playground', Playground);
}

export default register;
