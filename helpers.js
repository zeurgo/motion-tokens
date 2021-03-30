import motionTokens from './src/motion-tokens.js';
import * as getters from './src/mixins/getters.js';
import { multipleSelectors } from './src/mixins/util.js';
import * as keys from './src/keys.js';

export { default as motionTokens, motionTokensObject } from './src/motion-tokens.js';

export const triggerList = keys.triggers;

export function injectMotion(motionTokenId, triggers = triggerList) {
  let _return = '';
  let triggerListContent = '';

  if (!motionTokens[motionTokenId]) throw new Error(`'${motionTokenId}' was not found`);

  _return = `
      ${getters.getTransitionDuration(motionTokens[motionTokenId].duration)}
  
      ${getters.getTransitionVibe(motionTokens[motionTokenId].vibe)}
    `;

  if (motionTokens[motionTokenId].type !== 'switch') {
    triggerListContent = `${getters.getTransitionType(motionTokens[motionTokenId].type)}`;
  }

  return (
    _return + '\n' + multipleSelectors.call({ content: triggerListContent }, '&%sel%', triggers)
  );
}
