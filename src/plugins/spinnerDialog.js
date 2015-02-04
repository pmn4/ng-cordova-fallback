// http://ionicframework.com/docs/api/service/$ionicLoading/

angular
	.module("ngCordovaFallback.plugins.spinnerDialog", [])
	.factory("$cordovaFallbackSpinnerDialog", [
		"$window",
		function ($window) {
			return {
				show: angular.noop,
				hide: angular.noop
			};
		}
	]);
