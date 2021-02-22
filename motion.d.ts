import { CSSResult } from 'lit-element';

/**
 * `transition-duration-*: Ns`
 *
 * `transition-function-*: cubic-bezier(N, N, N, N)`
 *
 * `transition-type-*: <css-property: value;>#`
 */
interface MotionTokens {
  'transition-duration-slow'?: string;
  'transition-duration-medium'?: string;
  'transition-duration-fast'?: string;
  'transition-function-soft'?: string;
  'transition-function-calm'?: string;
  'transition-function-energic'?: string;
  'transition-type-fade'?: string;
  'transition-type-spin'?: string;
  'transition-type-scale-5p'?: string;
  'transition-type-scale-20p'?: string;
  'transition-type-scale-25p'?: string;
  'transition-type-scale-50p'?: string;
}

export const motionTokens: MotionTokens;

/**
 * to insert the style into one or more HTML Elements
 *
 * @param {} shadowRoot if true the style will be inserted into the ShadowRoot. Default is `false`
 */
export async function useMotion(
  motionTokens: MotionTokens,
  components: Element[],
  shadowRoot?: boolean,
): Promise<void>;

export default function (motionTokens: MotionTokens): Promise<CSSResult>;
