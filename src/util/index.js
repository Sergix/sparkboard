const removeProperties = (object, ...keys) =>
  Object.entries(object).reduce(
    (prev, [key, value]) => ({
      ...prev,
      ...(!keys.includes(key) && { [key]: value }),
    }),
    {},
  )

// minimize string if too long, appending '...' at the end
const minimizeText = (text, maxLength) =>
  text.length > maxLength ? text.substr(0, maxLength - 3).concat('...') : text

export { removeProperties, minimizeText }
