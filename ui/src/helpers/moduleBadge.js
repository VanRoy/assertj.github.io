'use strict'

// Short label shown in a module card badge, e.g. "AssertJ DB" -> "DB", "AssertJ Core" -> "Core"
module.exports = (title) => {
  const name = String(title || '').replace(/^\s*AssertJ\s*/i, '').trim()
  return (name.split(/\s+/)[0] || 'AJ').slice(0, 5)
}
