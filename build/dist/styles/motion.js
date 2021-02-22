import{merge as m}from"../../modules/pkg/lodash.js";import p from"./sass.js";export const baseMotionTokens={"transition-duration-slow":"0.275s","transition-duration-medium":"0.225s","transition-duration-fast":"0.2s","transition-function-soft":"cubic-bezier(0.48, 0, 0.48, 1)","transition-function-calm":"cubic-bezier(0.64, 0, 0.92, 1)","transition-function-energic":"cubic-bezier(0.08, 0, 0.35, 1)","transition-type-fade":"background-color: #fff;","transition-type-spin":"transform: rotate(360deg);","transition-type-scale-5p":"transform: scale(1.05);","transition-type-scale-20p":"transform: scale(1.2);","transition-type-scale-25p":"transform: scale(1.25);","transition-type-scale-50p":"transform: scale(1.5);"};function e(n){return typeof n=="object"?m(baseMotionTokens,n):baseMotionTokens}export default function a(n){const t=e(n);return p`
    [motion*='slow'] {
      transition-duration: ${t["transition-duration-slow"]};
    }

    [motion*='medium'] {
      transition-duration: ${t["transition-duration-medium"]};
    }

    [motion*='fast'] {
      transition-duration: ${t["transition-duration-fast"]};
    }

    [motion*='soft'] {
      transition-timing-function: ${t["transition-function-soft"]};
    }

    [motion*='calm'] {
      transition-timing-function: ${t["transition-function-calm"]};
    }

    [motion*='energic'] {
      transition-timing-function: ${t["transition-function-energic"]};
    }

    [motion*='hover']:hover {
      &[motion*='fade'] {
        ${t["transition-type-fade"]}
      }

      &[motion*='spin'] {
        ${t["transition-type-spin"]}
      }

      &[motion*='scale-5p'] {
        ${t["transition-type-scale-5p"]}
      }

      &[motion*='scale-20p'] {
        ${t["transition-type-scale-20p"]}
      }

      &[motion*='scale-25p'] {
        ${t["transition-type-scale-25p"]}
      }

      &[motion*='scale-50p'] {
        ${t["transition-type-scale-50p"]}
      }
    }
  `}export async function useMotion(n,t,r=!1){const c=document.createTextNode((await a(e(n))).cssText);t.forEach(i=>{const s=r?i.shadowRoot:i;if(s.querySelector("#jota-motion"))return;const o=document.createElement("style");o.id="jota-motion",o.appendChild(c),s.appendChild(o)})}
