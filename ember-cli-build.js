'use strict';

const commonjs = require('rollup-plugin-commonjs');
const glimmerRedux = require('rollup-plugin-glimmer-redux');
const GlimmerApp = require('@glimmer/application-pipeline').GlimmerApp;

module.exports = function(defaults) {
  let app = new GlimmerApp(defaults, {
    rollup: {
      plugins: [
        glimmerRedux({
          'middleware': './src/middleware/index.ts'
        }),
        commonjs()
      ]
    }
  });

  return app.toTree();
};
