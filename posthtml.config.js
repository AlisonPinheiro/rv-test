const path = require('path')

module.exports = {
  plugins: {
    'posthtml-shorten': {
      shortener: {
        process: function (url) {
          return new Promise((resolve, reject) => {
            resolve(url.replace('.html', ''))
          })
        }
      },
      tag: ['a'], // Allowed tags for URL shortening
      attribute: ['href'] // Attributes to replace on the elements
    },
    'posthtml-include': {
      root: path.resolve(__dirname, 'src')
    },
    'posthtml-inline-svg': {
      root: path.resolve(__dirname, 'src')
    },
  }
}
