module.exports = function (grunt) {

  grunt.initConfig({

    less: {
      dist: {
        files: {
          'dist/js-loading.css': 'src/js-loading.less'
        }
      }
    },

    cssmin: {
      dist: {
        expand: true,
        cwd: 'dist',
        src: ['*.css', '!*.min.css'],
        dest: 'dist',
        ext: '.min.css'
      }
    },

    copy: {
      dist: {
        files: {
          'dist/js-loading.js': 'src/js-loading.js'
        }
      }
    },

    uglify: {
      dist: {
        options: {
          preserveComments: 'some'
        },
        files: [
          {
            expand: true,
            cwd: 'dist',
            src: ['*.js', '!*.min.js'],
            dest: 'dist',
            ext: '.min.js'
          }
        ]
      }
    }

  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['less', 'cssmin', 'copy', 'uglify']);
};
