module.exports = function(grunt) {
    grunt.config('watch', {
         sass: {
                files: 'src/scss/**/*.scss',
                tasks: ['sass'],
                options: {
                    livereload: true
                }
            },

            html: {
                files: ['src/*.html'],
                tasks: ['copy'],
                options: {
                    livereload: true
                }
            },

             js: {
                files: ['src/js/**/*.js'],
                tasks: ['browserify'],
                options: {
                    livereload: true
                }
            },

            images: {
                files: ['src/images/{,*/}*.{png,jpg,gif,svg}'],
                tasks: ['copy'],
                options: {
                    livereload: true
                }
          }
  });

    grunt.loadNpmTasks('grunt-contrib-watch');

};