/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    lint: {
      files: ['grunt.js', 'js/*.js']
    },
    compass: {
      config: 'config.rb'
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
        browser: true
      },
      globals: {
        jQuery: true
      }
    }
  });
  // load plugin tasks
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-compass');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // tasks
  grunt.registerTask('styleguide', 'compass exec:kss copy');

  // Default task.
  grunt.registerTask('default', 'lint compass');

};
