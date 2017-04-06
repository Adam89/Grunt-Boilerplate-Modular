/*!
 * Adams Gruntfile
 * @author Adam
 */


module.exports = function(grunt) {

    var tasks = { scope: ['devDependencies', 'dependencies'] };


    // Gruntfile.js
    var options = {
        config: {
            src: "/tasks/*.js"
        }
    };

    var configs = require('load-grunt-configs')(grunt, options);


    require('load-grunt-tasks')(grunt, tasks);
    grunt.initConfig(configs);
    grunt.loadTasks('tasks');

    grunt.registerTask('default', ['sass', 'postcss', 'cssmin','browserify', 'uglify', 'copy', 'browserSync', 'watch']);
    grunt.registerTask('build', ['sass', 'postcss', 'cssmin', 'browserify', 'uglify', 'copy', 'imagemin', 'browserSync', 'watch']);
};
