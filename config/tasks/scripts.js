/**
 * ## task-scripts
 *
 */

module.exports = function (grunt) {

  grunt.registerTask('scripts', function(status) {
    status = typeof status !== 'undefined' ? status : 'development';
    if (status === 'production') {
      grunt.task.run(['clean:scripts']);
    }

    grunt.task.run(['concat']);

  });

};
