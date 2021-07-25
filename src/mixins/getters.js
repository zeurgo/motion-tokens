import * as animatedBases from '../animated-bases.js';

export function getTransitionDuration(duration) {
  let _duration;

  if(typeof duration !== "undefined"){
    if (duration.includes('slow')) {
      _duration = animatedBases.transitionDurationSlow;
    } else if (duration.includes('medium')) {
      _duration = animatedBases.transitionDurationMedium;
    } else if (duration.includes('fast')) {
      _duration = animatedBases.transitionDurationFast;
    } else {
      throw new Error(`${duration} is not valid`);
    }
  }

  return `transition-duration: ${_duration};`;
}

export function getTransitionVibe(vibe) {
  let _vibe;

  if(typeof vibe !== 'undefined'){
    if (vibe.includes('soft')) {
      _vibe = animatedBases.transitionVibeSoft;
    } else if (vibe.includes('calm')) {
      _vibe = animatedBases.transitionVibeCalm;
    } else if (vibe.includes('energetic')) {
      _vibe = animatedBases.transitionVibeEnergetic;
    } else {
      throw new Error(`${vibe} is not valid`);
    }
  }

  return `transition-timing-function: ${_vibe};`;
}

export function getTransitionType(type) {

  if(typeof type !== "undefined"){
    if (type.includes('rotation')) {
      return animatedBases.transitionTypeSpin(type);
    }
    if (type.includes('scale')) {
      return animatedBases.transitionTypeScale(type);
    }
    if (type.includes('switch')) {
      return '';
    }
  }

  throw new Error(`${type} is not valid`);
}
