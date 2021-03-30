import * as animatedBases from '../animated-bases.js';

export function getTransitionDuration(duration) {
  let _duration;

  if (duration?.includes('slow')) {
    _duration = animatedBases.transitionDurationSlow;
  } else if (duration.includes('medium')) {
    _duration = animatedBases.transitionMurationMedium;
  } else if (duration.includes('fast')) {
    _duration = animatedBases.transitionDurationFast;
  } else {
    throw new Error(`${duration} is not valid`);
  }

  return `transition-duration: ${_duration};`;
}

export function getTransitionVibe(vibe) {
  let _vibe;

  if (vibe?.includes('soft')) {
    _vibe = animatedBases.transitionVibeSoft;
  } else if (vibe?.includes('calm')) {
    _vibe = animatedBases.transitionVibeCalm;
  } else if (vibe?.includes('energetic')) {
    _vibe = animatedBases.transitionVibeEnergetic;
  } else {
    throw new Error(`${vibe} is not valid`);
  }

  return `transition-timing-function: ${_vibe};`;
}

export function getTransitionType(type) {
  if (type?.includes('rotation')) {
    return animatedBases.transitionTypeSpin(type);
  } else if (type?.includes('scale')) {
    return animatedBases.transitionTypeScale(type);
  } else if (!type?.includes('switch')) {
    throw new Error(`${type} is not valid`);
  }
}
