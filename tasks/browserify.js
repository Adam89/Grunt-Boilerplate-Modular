module.exports = function(grunt) {
//     grunt.config('browserify', {
//         dist: {
//             src: ['src/js/application.js'],
//             dest: 'dist/js/application.js',
//             browserifyOptions: {
//                 debug: true,
//                 compress: false,
//             }
//         }
//     });

//     grunt.loadNpmTasks('grunt-browserify');
// };
 grunt.initConfig({
        browserify: {
            development: {
                src: [
                    "src/js/application.js",
                ],
                dest: 'dist/js/application.js',
                options: {
                    browserifyOptions: { debug: true },
                    transform: [["babelify", { "presets": ["es2015"] }]],
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-browserify');
};
