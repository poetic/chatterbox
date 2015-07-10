Package.describe({
  name: 'poetic:chatterbox',
  version: '0.0.1',
  summary: 'chat bot for meteor apps',
  git: 'https://github.com/poetic/chatterbox',
  documentation: 'README.md'
})

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2')

  api.use('matb33:collection-hooks@0.7.13')
  api.use('grigio:babel@0.1.4')

  api.imply('matb33:collection-hooks@0.7.13')
  api.addFiles('chatterbox.es6.js', ['server'])
  api.export('Chatterbox')
})
