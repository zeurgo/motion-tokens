export const transitionDurationSlow = '0.275s';
export const transitionDurationMedium = '0.225s';
export const transitionDurationFast = '0.15s';

export const transitionVibeSoft = 'cubic-bezier(0.48, 0, 0.48, 1)';
export const transitionVibeEnergetic = 'cubic-bezier(0.64, 0, 0.92, 1)';
export const transitionVibeCalm = 'cubic-bezier(0.08, 0, 0.35, 1)';

export function transitionTypeSpin(deg = 'roll') {
  let rotation;

  if (deg.includes('tilt')) {
    rotation = '90deg';
  } else if (deg.includes('flip')) {
    rotation = '180deg';
  } else if (deg.includes('roll')) {
    rotation = '360deg';
  } else {
    throw new Error(`${deg} is not valid`);
  }

  return `
  transform: rotate(${rotation});
  -webkit-transform: rotate(${rotation});
  -moz-transform: rotate(${rotation});
  -ms-transform: rotate(${rotation});
  -o-transform: rotate(${rotation});`;
}

export function transitionTypeScale(scale) {
  let _scale;

  if(typeof scale !== "undefined"){
    if (scale.includes('small')) {
      _scale = 1.05;
    } else if (scale.includes('medium')) {
      _scale = 1.25;
    } else if (scale.includes('large')) {
      _scale = 1.5;
    } else {
      throw new Error(`${scale} is not valid`);
    }
  }

  return `
  transform: scale(${_scale});
  -webkit-transform: scale(${_scale});
  -moz-transform: scale(${_scale});
  -ms-transform: scale(${_scale});
  -o-transform: scale(${_scale});`;
}
