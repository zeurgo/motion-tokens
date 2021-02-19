import { merge } from 'lodash';

const brandingTokens = {
  'color-brand-primary-pure': '#ec3413',
  'color-brand-primary-01': '#f9cec7',
  'color-brand-primary-02': '#f07f6b',
  'color-brand-primary-03': '#991700',
  'color-brand-secondary-pure': '#fc0',
  'color-brand-secondary-01': '#fff3c2',
  'color-brand-secondary-02': '#ffdf61',
  'color-brand-secondary-03': '#c29b00',
  'color-brand-tertiary-pure': '#00a0de',
  'color-brand-tertiary-01': '#ade4fa',
  'color-brand-tertiary-02': '#55c8f6',
  'color-brand-tertiary-03': '#0075a3',
  'color-base-dark-pure': '#000',
  'color-base-dark-01': '#616161',
  'color-base-dark-02': '#474747',
  'color-base-dark-03': '#333',
  'color-base-light-pure': '#fff',
  'color-base-light-01': '#f0f0f0',
  'color-base-light-02': '#e0e0e0',
  'color-base-light-03': '#bdbdbd',
  'font-family-base': "'Inter',sans-serif",
  'font-weight-extrabold': '800',
  'font-weight-bold': '700',
  'font-weight-semibold': '600',
  'font-weight-regular': '400',
  'font-weight-light': '300',
  'color-feedback-negative-pure': '#fb1964',
  'color-feedback-negative-01': '#fcbac8',
  'color-feedback-negative-02': '#fc6988',
  'color-feedback-negative-03': '#aa0327',
  'color-feedback-positive-pure': '#18dc8e',
  'color-feedback-positive-01': '#bafde2',
  'color-feedback-positive-02': '#66f5bc',
  'color-feedback-positive-03': '#14b273',
  'color-feedback-informative-pure': '#0057ff',
  'color-feedback-informative-01': '#0057ff',
  'color-feedback-informative-02': '#669aff',
  'color-feedback-informative-03': '#003499',
};

/**
 *
 * @param {typeof brandingTokens} tokens
 */
export default function set(tokens) {
  if (typeof tokens === 'object') {
    return merge(brandingTokens, tokens);
  }

  return brandingTokens;
}
