export function multipleSelectors(base, selectors) {
  if (!base?.includes('%sel%')) {
    throw new Error('base is invalid');
  }

  const mappedSelectors = selectors?.map(selector => {
    return base?.replace(/%sel%/g, selector);
  });

  return `${(mappedSelectors || ['.empty']).join()} {
      ${this?.content || ''}
    }`;
}
