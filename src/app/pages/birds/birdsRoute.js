'use strict';

angular.module('iobirds.pages.birds')
	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider
			.state('birds', {
				url: '/birds',
				templateUrl: 'app/pages/birds/birds.html',
				title: 'Birds',
				sidebarMeta: {
					icon: 'ion-social-twitter',
					order: 0,
				},
				controller: 'BirdsCtrl',
				controllerAs: 'vm'
			});
	}]);