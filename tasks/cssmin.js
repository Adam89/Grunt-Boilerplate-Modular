module.exports = function(grunt) {
    grunt.config('cssmin', {
        cssmin: {


                files: [{
                    expand: true,
                    cwd: 'dist/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/css/',
                    ext: '.min.css'
                }]
        }
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
};
