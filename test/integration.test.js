const test = require('ava')
const weh = require('@weh/weh')
const plugin = require('../lib/plugin')

const layout = (file, files) =>
`
h${file.contents}
`

test('plugin works', async t => {
  const files = [
    {
      contents: 'ello',
      metadata: {
        layout: 'layout'
      }
    }
  ]

  const res = await weh.integration(async site => {
    site.use(plugin, {layouts: {layout}})
    return site
  }, files)

  t.is(res.files[0].contents, 'hello')
})
