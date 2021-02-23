# Jota Motion

## Installation

```bash
yarn add https://github.com/Meiuca/jota-motion
```

## Getting Started

### Using Default Export

```js
/**
 * The default export provides a function that returns a CSSResult Promise.
 * It must be used directly in the `styles` property
 */

import getMotion from 'jota-motion';

class MyElement extends LitElement {
  static styles;
}

(async () => {
  MyElement.styles = [ myCSS, await getMotion( myBaseMotionTokens ) ];  // `myBaseMotionTokens` is optional
                                                                        // and it's used to override the default BaseMotionTokens
  
  customElements.define( 'my-element', MyElement );
})();
```

### Using `useMotion`

```js
/**
 * The `useMotion` function is a way to inject style into the document
 */

import { useMotion } from 'jota-motion';

useMotion(
  { /* myBaseMotionTokens */ },
  document.querySelectorAll('#root'), // React
  // There is a third parameter that is a boolean. If true is set, the function will inject the style into the ShadowRoot
)
```

### Element Syntax

```html
<my-element motion="$type $velocity $vibe $trigger">...</my-element>

<!-- 
  $type => fade | spin | scale-(5p | 20p | 25p | 50p)
  $velocity => slow | medium | fast
  $vibe => calm | soft | energic
  $trigger => hover
 -->
```
