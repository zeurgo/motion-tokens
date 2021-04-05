import * as getters from './src/mixins/getters.js';
import { multipleSelectors } from './src/mixins/util.js';
import motionTokens from './src/motion-tokens.js';
import * as keys from './src/keys.js';

export { default as motionTokens, motionTokensObject } from './src/motion-tokens.js';

export const triggerList = keys.triggers;

export default function getMotionTokens(tokens = motionTokens, triggers = triggerList) {
  let _return = '';
  let triggerListContent = '';

  for (const token of Object.entries(tokens)) {
    _return = _return.concat(`
    [motion-token*='${token[0]}'] {
      ${getters.getTransitionDuration(token[1].duration)}
  
      ${getters.getTransitionVibe(token[1].vibe)}
    }
    `);

    if (token[1].type !== 'switch') {
      triggerListContent = triggerListContent.concat(`
      &[motion-token*='${token[0]}'] {
       ${getters.getTransitionType(token[1].type)}
     }
     `);
    }
  }

  return `${_return}\n${multipleSelectors.call(
    { content: triggerListContent },
    "[motion-token*='%sel%']%sel%",
    triggers,
  )}`;
}
