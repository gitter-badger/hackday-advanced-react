const critical = require('critical')
const path = require('path')

critical.generate({
  base: path.join(path.resolve(__dirname), 'build/'),
  src: 'index.html',
  dest: 'index.html',
  inline: true,
  extract: true,
  penthouse: {
    blockJSRequests: false,
  },
})
