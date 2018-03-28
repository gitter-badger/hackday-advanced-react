export const getDisplayName = (hoc, component) =>
  `${hoc}(${component.displayName || component.name || 'component'})`

export const parseJSON = res => res.json()
