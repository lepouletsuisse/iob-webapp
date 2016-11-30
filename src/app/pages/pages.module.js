/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages', [
    'ui.router',
    'iobirds.pages.birds',
    /*
    'BlurAdmin.pages.dashboard',
    'BlurAdmin.pages.ui',
    'BlurAdmin.pages.components',
    'BlurAdmin.pages.form',
    'BlurAdmin.pages.tables',
    'BlurAdmin.pages.charts',
    'BlurAdmin.pages.maps',
    'BlurAdmin.pages.profile',
    */
  ])
    .config(routeConfig)
    .run(setupSocketIO);
  ;

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/birds');

    /*
        baSidebarServiceProvider.addStaticItem({
          title: 'Pages',
          icon: 'ion-document',
          subMenu: [{
            title: 'Sign In',
            fixedHref: 'auth.html',
            blank: true
          }, {
            title: 'Sign Up',
            fixedHref: 'reg.html',
            blank: true
          }, {
            title: 'User Profile',
            stateRef: 'profile'
          }, {
            title: '404 Page',
            fixedHref: '404.html',
            blank: true
          }]
        });
        baSidebarServiceProvider.addStaticItem({
          title: 'Menu Level 1',
          icon: 'ion-ios-more',
          subMenu: [{
            title: 'Menu Level 1.1',
            disabled: true
          }, {
            title: 'Menu Level 1.2',
            subMenu: [{
              title: 'Menu Level 1.2.1',
              disabled: true
            }]
          }]
        });
      */

  }

  function setupSocketIO(socketio, $rootScope) {
    console.log("setup socket io factory");
    console.log(socketio);
    socketio.init();

    socketio.on('msg_welcome', function (msg) {
      console.log("welcome message received via socket.io received in pages.module.js");
      console.log(msg);
      console.log("broadcasting socket.io message via AngularJS event system");
      $rootScope.$broadcast('msg_welcome', msg);
    });
    socketio.on('msg_observation', function (msg) {
      console.log("observation message received via socket.io in pages.module.js");
      console.log(msg);
      console.log("broadcasting socket.io message via AngularJS event system");
      $rootScope.$broadcast('msg_observation', msg);
    });

  }


})();