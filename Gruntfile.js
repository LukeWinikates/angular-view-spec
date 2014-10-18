module.exports = function(grunt){
  grunt.initConfig({
    jasmine: {
      pivotal: {
        src: 'src/**/*.js',
        options: {
          specs: 'spec/**/*Spec.js',
          helpers: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/jquery/dist/jquery.js',
            'spec/support/*.js'
          ]
        }
      }
    },
    connect: {
      jasmine: {
        options: {
          port: 8888,
          keepalive: true
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-connect');
};
