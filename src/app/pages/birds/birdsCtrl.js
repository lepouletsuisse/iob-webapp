(function () {
	'use strict';

	angular
		.module('iobirds.pages.birds')
		.controller('BirdsCtrl', Birds);

	Birds.$inject = ["$scope", "BirdsService", "toastr", "$timeout"];

	function Birds($scope, BirdsService, toastr, $timeout) {
		/*jshint validthis: true */
		var vm = this;
		var map;

		$scope.$on("msg_welcome", function (event, msg) {
			console.log("received welcome message via angular event system in birdsCtrl.js");
			console.log(event);
			toastr.info("Connected to realtime server", 'Information');
		});

		$scope.$on("msg_observation", function (event, msg) {
			console.log("received observation message via angular event system in birdsCtrl.js");
			console.log(msg);

			toastr.success(msg.data.sciName + " seen at " + msg.coordinates, 'Observation');

			L.marker(msg.coordinates)
				.addTo(map)
				.bindPopup("<b>" + msg.data.sciName  + "</b><br>" + msg.timestamp)
				.openPopup();
		});


		function initialize() {
			L.Icon.Default.imagePath = 'assets/img/theme/vendor/leaflet/dist/images';
			map = L.map(document.getElementById('leaflet-map')).setView([46.790310, 6.522273], 11);
			L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
				attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(map);

		}

		$timeout(function () {
			initialize();
		}, 100);


	}

})();