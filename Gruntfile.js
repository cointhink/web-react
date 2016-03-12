module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
         dist: {
            options: {
               transform: [
                  ["babelify", {}]
               ]
            },
            files: { "./build/bundle.js": "./js/*.js"}
         }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');

  // Default task(s).
  grunt.registerTask('default', ['browserify']);

}
