angular.module('OpiningApp').config(function($mdThemingProvider) {
  
	$mdThemingProvider.theme('default')
		.primaryPalette('deep-purple')
    	.accentPalette('amber')
    	.warnPalette('red');

    $mdThemingProvider.alwaysWatchTheme(true);

});