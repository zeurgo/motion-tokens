export function multipleSelectors(base, selectors) {
  if (!base?.includes('%sel%')) {
    throw new Error('base is invalid');
  }

  const mappedSelectors = selectors?.map(selector => base?.replace(/%sel%/g, selector));

  return `${(mappedSelectors || ['.empty']).join()} {
      ${this?.content || ''}
    }`;
}
