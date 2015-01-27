module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 4000,
          base: ''
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');

};
