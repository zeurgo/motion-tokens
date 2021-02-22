import { merge } from 'lodash';
import css from './sass.js';

export const motionTokens = {
  'transition-duration-slow': '0.275s',
  'transition-duration-medium': '0.225s',
  'transition-duration-fast': '0.2s',
  'transition-function-soft': 'cubic-bezier(0.48, 0, 0.48, 1)',
  'transition-function-calm': 'cubic-bezier(0.64, 0, 0.92, 1)',
  'transition-function-energic': 'cubic-bezier(0.08, 0, 0.35, 1)',
  'transition-type-fade': 'background-color: #fff;',
  'transition-type-spin': 'transform: rotate(360deg);',
  'transition-type-scale-5p': 'transform: scale(1.05);',
  'transition-type-scale-20p': 'transform: scale(1.2);',
  'transition-type-scale-25p': 'transform: scale(1.25);',
  'transition-type-scale-50p': 'transform: scale(1.5);',
};

function mergeTokens(tokens) {
  if (typeof tokens === 'object') {
    return merge(motionTokens, tokens);
  }

  return motionTokens;
}

/**
 * @param { motionTokens } tokens
 */
export default function scss(tokens) {
  const mergedTokens = mergeTokens(tokens);

  return css`
    *[motion*='slow'] {
      transition-duration: ${mergedTokens['transition-duration-slow']};
    }

    *[motion*='medium'] {
      transition-duration: ${mergedTokens['transition-duration-medium']};
    }

    *[motion*='fast'] {
      transition-duration: ${mergedTokens['transition-duration-fast']};
    }

    *[motion*='soft'] {
      transition-timing-function: ${mergedTokens['transition-function-soft']};
    }

    *[motion*='calm'] {
      transition-timing-function: ${mergedTokens['transition-function-calm']};
    }

    *[motion*='energic'] {
      transition-timing-function: ${mergedTokens[
        'transition-function-energic'
      ]};
    }

    *[motion*='hover']:hover {
      &[motion*='fade'] {
        ${mergedTokens['transition-type-fade']}
      }

      &[motion*='spin'] {
        ${mergedTokens['transition-type-spin']}
      }

      &[motion*='scale-5p'] {
        ${mergedTokens['transition-type-scale-5p']}
      }

      &[motion*='scale-20p'] {
        ${mergedTokens['transition-type-scale-20p']}
      }

      &[motion*='scale-25p'] {
        ${mergedTokens['transition-type-scale-25p']}
      }

      &[motion*='scale-50p'] {
        ${mergedTokens['transition-type-scale-50p']}
      }
    }
  `;
}

/**
 * @param { motionTokens } tokens
 * @param { Element[] } components
 */
export async function useMotion(tokens, components, shadowRoot = false) {
  const motionCSS = document.createTextNode(
    (await scss(mergeTokens(tokens))).cssText,
  );

  components.forEach(cpt => {
    const component = shadowRoot ? cpt.shadowRoot : cpt;

    if (component.querySelector('#jota-motion')) return;

    const motionEl = document.createElement('style');
    motionEl.id = 'jota-motion';
    motionEl.appendChild(motionCSS);

    component.appendChild(motionEl);
  });
}
