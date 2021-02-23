import Playground from './playground/index.js';
import getPlaygroundStyle from './playground/styles.js';

import getMotion from './styles/motion.js';

async function register() {
  Playground.styles = [await getPlaygroundStyle(), await getMotion()];
  customElements.define('jota-playground', Playground);
}

export default register;
