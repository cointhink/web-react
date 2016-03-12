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
    },
    copy: {
      main: {
        expand: true,
        cwd: 'html',
        src: '**',
        dest: 'build/',
      },
    },
  });

  grunt.loadNpmTasks('grunt-browserify')
  grunt.loadNpmTasks('grunt-contrib-copy')

  // Default task(s).
  grunt.registerTask('default', ['browserify', 'copy']);

}
