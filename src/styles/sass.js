import { unsafeCSS } from 'lit-element';

function compile(sass, { resolve, reject }) {
  window.Sass.compile(sass, result => {
    if (result.text) resolve(unsafeCSS(result.text));
    else reject(new Error(result.message));
  });
}

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
    if (window.Sass) {
      compile(sassText, { resolve, reject });
    } else {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/sass.js@0.11.1/dist/sass.sync.js';
      script.type = 'text/javascript';
      script.onload = () => compile(sassText, { resolve, reject });
      script.onerror = () => reject(new Error(`Failed to load ${script.src}`));
      document.head.appendChild(script);
    }
  });
}
