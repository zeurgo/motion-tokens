import { unsafeCSS } from 'lit-element';

/**
 *
 * @param { TemplateStringsArray } strings
 * @param  { unknown[] } values
 * @returns { Promise<import('lit-element').CSSResult> }
 */
export default function scss(strings, ...values) {
  const sassText = values.reduce(
    (prev, curr, idx) => prev + curr + strings[idx + 1],
    strings[0],
  );

  return new Promise((resolve, reject) => {
    // eslint-disable-next-line no-undef
    Sass.compile(sassText, result => {
      if (result.text) resolve(unsafeCSS(result.text));
      else reject(new Error('Sass Compiler failed. Check your code.'));
    });
  });
}
