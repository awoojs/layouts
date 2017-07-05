const test = require('ava')
const weh = require('@weh/weh')
const plugin = require('../lib/plugin')

test('plugin works', async t => {
  const files = [
    {
      contents: 'sample contents'
    }
  ]

  const res = await weh.integration(async site => {
    site.use(plugin, { contents: 'aaa' })
    return site
  }, files)

  t.is(res.files[0].contents, 'aaa')
})
