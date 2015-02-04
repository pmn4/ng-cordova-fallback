var fs = require('fs');
var pkg = require('../package.json');

module.exports = {
  banner: '/*!\n' +
    ' * ngCordovaFallback\n' +
    ' * v' + pkg.version + '\n' +
    ' * Project started by @gcpmn\n' +
    ' */\n',

  closureStart: ';(function(){\n\t"use strict";\n',
  closureEnd: '\n})();',

  dist: 'dist',
  // demo : {
  //   ngCordovaFallback : 'demo/www/lib/ngCordovaFallback/dist',
  //   lib : 'demo/www/lib',
  //   www : 'demo/www'
  // },

  pluginFiles: [
    'src/module.js',
    'src/plugins/*.js'
  ],

  // mockFiles: [
  //   'src/module-mocks.js',
  //   'src/mocks/*.js'
  // ],

  versionData: {
    version: pkg.version
  }
};
