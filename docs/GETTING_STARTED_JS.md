# Getting Started

## Using Default Import

The default import provides a global style injection that must be used with the `motion-token` tag
property.

```js
import getMotionTokens from 'motion-tokens';

`
${getMotionTokens()}

.my-style {
  // your stuff
}
`;
```

Output:

```js
`
// ...other motion tokens...

[motion-token*='spin-slow'] {
  transition-duration: 0.275s;
  transition-timing-function: cubic-bezier(0.48, 0, 0.48, 1);
}

// ... ...

[motion-token*='.open'].open[motion-token*='spin-slow'],
[motion-token*=':hover']:hover[motion-token*='spin-slow'] {
  transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -o-transform: rotate(90deg);
}

// ... ...

.my-style {
  // your stuff
}
`;
```

Element Syntax:

```html
<!-- <my-element motion-token="$motion-token $trigger">...</my-element> -->
<my-element motion-token="switch-medium:hover">...</my-element>
```

## Using `inject-motion`

Use this helper to inject the properties directly at the element style.

**When you have different changes for each trigger, you can use it this way:**

```js
import { injectMotion } from 'jota-motion/helpers.js';

`
.my-style {
  ${injectMotion('switch-slow')}

  // your stuff

  &.open {
    color: red;
  }

  &:focus {
    color: palevioletred;
  }
}
`;
```

Output:

```js
`
.my-style {
  transition-duration: 0.275s;
  transition-timing-function: cubic-bezier(0.48, 0, 0.48, 1);

  // your stuff
}
.my-style.open {
  color: red;
}
.my-style:focus {
  color: palevioletred;
}
`;
```

**When you have the same changes occuring for all triggers, you can use it this way:**

```js
import { injectMotion } from 'jota-motion/helpers.js';

const bindedInject = injectMotion.bind({
  content: 'color: red;',
});

`
.my-style {
  ${bindedInject('switch-slow', ['.open', ':focus'])}
}
`;
```

Output

```js
`
.my-style {
  transition-duration: 0.275s;
  transition-timing-function: cubic-bezier(0.48, 0, 0.48, 1);
}
.my-style.open,
.my-style:focus {
  color: red;
}
`;
```

## Animated Bases

| Scale         | Rotation     | Velocity         | Vibe                                        |
| ------------- | ------------ | ---------------- | ------------------------------------------- |
| Small: `05%`  | Tilt: `90°`  | Slow: `0.275s`   | Soft: `cubic-bezier(0.48, 0, 0.48, 1)`      |
| Medium: `25%` | Flip: `180°` | Medium: `0.225s` | Calm: `cubic-bezier(0.08, 0, 0.35, 1)`      |
| Large: `50%`  | Roll: `360°` | Fast: `0.15s`    | Energetic: `cubic-bezier(0.64, 0, 0.92, 1)` |

## Motion Tokens

```txt
$Spin-slow: rotation-tilt + velocity-slow + vibe-soft
$Spin-medium: rotation-flip + velocity-medium + vibe-calm
$Spin-fast: rotation-tilt + velocity-fast + vibe-energetic

$Expand-slow: scale-small + velocity-slow + vibe-soft
$Expand-medium: scale-medium + velocity-medium + vibe-calm
$Expand-fast: scale-large + velocity-fast + vibe-energetic

$Switch-slow: velocity-slow + vibe-soft
$Switch-medium: velocity-medium + vibe-calm
$Switch-fast: velocity-fast + vibe-energetic
```
