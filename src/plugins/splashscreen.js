angular
	.module("ngCordovaFallback.plugins.splashscreen", [])
	.factory("$cordovaFallbackSplashscreen", [
		function () {
			return {
				hide: angular.noop,
				show: angular.noop
			};
		}
	]);
