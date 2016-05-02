angular.module('OpiningApp').config(function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/home');

	$stateProvider

		.state('home', {
		    url: '/home',
		    templateUrl: 'client/view/home.html',
		    controller: 'testCtrl',
		    controllerAs: 'ctrl'
	  	});
});