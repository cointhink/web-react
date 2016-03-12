module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jade: {
      compile: {
        options: {
          pretty: true
        },
        files: [{
          expand: true,
          cwd: 'jade',
          src: ['*.jade'],
          dest: 'build',
          ext: '.html'
        }]
      }
    },
    babel: {
      dist: {
        files: [{
          expand: true,
          cwd: 'js',
          src: ['*.js'],
          dest: 'build',
        }]
      }
    },
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
        cwd: 'vendor',
        src: '**',
        dest: 'build/',
      },
    },
  });

  grunt.loadNpmTasks('grunt-browserify')
  grunt.loadNpmTasks('grunt-babel')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-jade')

  // Default task(s).
  grunt.registerTask('default', ['babel', 'jade', 'copy']);

}
