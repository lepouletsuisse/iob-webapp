/* 
See:
https://codepen.io/mi-lee/post/integrate-socket-with-angular
http://www.piecemeal.us/docs/socket.module.html
*/


(function() {
  'use strict';

  angular.module('BlurAdmin.pages')

  .factory('socketio', socketFactory);

  socketFactory.$inject = ['$rootScope', '$window'];

   function socketFactory($rootScope, $window) {

    var socket;
    var services = {
      on: on,
      emit: emit,
      init: init
    };

    return services;

    function init() {
      var ioUrl = "http://localhost:3000";
      $window.socket = io(ioUrl);
    }

    function on(eventName, callback) {
      $window.socket.on(eventName, function() {
        var args = arguments;
        $rootScope.$apply(function() {
          callback.apply($window.socket, args);
        });
      });
    }

    function emit(eventName, data, callback) {
      $window.socket.emit(eventName, data, function() {
        var args = arguments;
        $rootScope.$apply(function() {
          if (callback) {
            callback.apply($window.socket, args);
          }
        });
      });
    }
  }

})();