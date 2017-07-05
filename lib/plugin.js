function plugin (options = {}) {
  return files => {
    return files.map(file => {
      return Object.assign(file, { contents: options.contents || 'test' })
    })
  }
}

module.exports = plugin
