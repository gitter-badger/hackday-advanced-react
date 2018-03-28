export const getDisplayName = (hoc, component) =>
  `${hoc}(${component.displayName || component.name || 'component'})`

export const parseJSON = res => res.json()

export const capitalizeTitle = words =>
  words
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')

export const range = n => new Array(n).fill(0).map((_, x) => x)
