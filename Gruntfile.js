module.exports = function(grunt) {

  // Project configuration.
    grunt.initConfig({

        // Metadata.
        pkg: grunt.file.readJSON('package.json'),

        // Task configuration.
        jasmine: {
            all: {
                src: [
                    'js/**/*.js',
                ],
                options: {
                    'vendor': 'test/libs/**/*.js',
                    'specs': 'test/spec/**/*.js'
                }
            }
        },
        watch: {
            js: {
                files: [
                    'js/**/*.js',
                    'test/spec/**/*.js'
                ],
                tasks: ['jasmine:all']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('test', ['jasmine:all']);
    grunt.registerTask('default', ['watch']);

};
