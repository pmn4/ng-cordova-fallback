angular
	.module("ngCordovaFallback.plugins.vibration", [])
	.factory("$cordovaFallbackVibration", [
		function () {
			return {
				vibrate: angular.noop,
				vibrateWithPattern: angular.noop,
				cancelVibration: angular.noop
			};
		}
	]);
