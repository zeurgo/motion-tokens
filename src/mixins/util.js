export function multipleSelectors(base, selectors) {
  if (typeof base !== 'undefined' && !base.includes('%sel%')) {
    throw new Error('base is invalid');
  }

  let mappedSelectors = [];

  if(typeof selectors !== 'undefined'){
    mappedSelectors = selectors.map(selector => {
      if(typeof base !== 'undefined'){
        return base.replace(/%sel%/g, selector)
      }
    });
  }

  return `${(mappedSelectors || ['.empty']).join()} {
      ${typeof this !== 'undefined' ? (this.content || ''): ''}
    }`;
}
