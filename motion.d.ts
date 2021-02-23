import { CSSResult } from 'lit-element';

/**
 * `transition-duration-*: Ns`
 *
 * `transition-function-*: cubic-bezier(N, N, N, N)`
 *
 * `transition-type-*: <css-property: value;>#`
 */
declare interface BaseMotionTokens {
  'transition-duration-slow': string;
  'transition-duration-medium': string;
  'transition-duration-fast': string;
  'transition-function-soft': string;
  'transition-function-calm': string;
  'transition-function-energic': string;
  'transition-type-fade': string;
  'transition-type-spin': string;
  'transition-type-scale-5p': string;
  'transition-type-scale-20p': string;
  'transition-type-scale-25p': string;
  'transition-type-scale-50p': string;
}

/**
 * `transition-duration-*: Ns`
 *
 * `transition-function-*: cubic-bezier(N, N, N, N)`
 *
 * `transition-type-*: <css-property: value;>#`
 */
declare type UserBaseMotionTokens = Partial<BaseMotionTokens>;

export const baseMotionTokens: BaseMotionTokens;

/**
 * to insert the style into one or more HTML Elements
 *
 * @param {} shadowRoot if true the style will be inserted into the ShadowRoot. Default is `false`
 */
export async function useMotion(
  motionTokens: UserBaseMotionTokens,
  components: Element[],
  shadowRoot = false,
): Promise<void>;

export default function (
  motionTokens: UserBaseMotionTokens,
): Promise<CSSResult>;
