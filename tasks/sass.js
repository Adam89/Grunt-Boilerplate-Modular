module.exports = function(grunt) {
    grunt.config('sass', {
            options: {
                sourceMap: true,
                sourceComments: false,
                style: 'compressed',
            },
            dist: {
                files: {
                    'dist/css/app.css': 'src/scss/app.scss'
                }
            }
    });
    grunt.loadNpmTasks('grunt-sass');
};


