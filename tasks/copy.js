module.exports = function(grunt) {
    grunt.config('copy', {
   main: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: [
                        '*.html',
                        'images/{,*/}*.{png,jpg,gif}',
                        'fonts/*.{woff,woff2}',
                        'libs/*',
                    ],
                    dest: 'dist'
                }]
            }
        });

            grunt.loadNpmTasks('grunt-contrib-copy');
        };