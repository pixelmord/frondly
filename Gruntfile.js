/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },
    copy: {
      dist: {
        files: {
          "./": "styleguide/*"
        }
      }
    },
    watch: {
      files: [ '<config:lint.files>', 'assets/scss/*.scss' ],
      tasks: [ 'default' ]
    },
    exec: {
      kss: {
        command: 'kss-node sass -t "templates/styleguide/"',
        stdout: true
      }
    },
    jshint: {
      files: {
        src: ['Gruntfile.js', 'js/*.js']
      },
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        }
      }
    }
  });
  // load plugin tasks
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // tasks
  grunt.registerTask('styleguide', ['compass', 'exec:kss', 'copy']);

  // Default task.
  grunt.registerTask('default', ['jshint', 'compass']);

};
