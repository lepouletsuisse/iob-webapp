(function() {
	'use strict';

  	angular
		.module('iobirds.pages.birds')
		.factory('BirdsService', Birds);

		Birds.$inject = ['$http', 'socketio'];

		function Birds ($http, socketio) {
			console.log("Setup Birds service...");

			socketio.on('msg_observation', function(msg) {
				console.log("observation message received via socket.io in birdsService.js");
				console.log(msg);
			});

			socketio.on('msg_welcome', function(msg) {
				console.log("welcome message received via socket.io in birdsService.js");
				console.log(msg);
			});

			return {};

		}

})();