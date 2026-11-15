'use strict'

// Number of versions besides the latest one, or undefined when there are none
module.exports = (versions) => {
  const count = Array.isArray(versions) ? versions.length - 1 : 0
  return count > 0 ? count : undefined
}
