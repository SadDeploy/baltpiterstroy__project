/**
 * ## grunt-jscs
 * Checking JavaScript Code Style
 *
 */

module.exports = {

  options: {
    config: 'config/.jscsrc'
  },

  main: [
    'app/scripts/**/script.js',
    '!app/scripts/vendor/**'
  ]

};
