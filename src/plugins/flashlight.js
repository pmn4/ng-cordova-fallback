angular
	.module("ngCordovaFallback.plugins.flashlight", [])
	.factory("$cordovaFallbackFlashlight", [
		"$q",
		function ($q) {
			var unsupported = $q.reject("This feature is not supported on the web. Visit the app store to download our app.");

			return {
				available: function () { return unsupported; },
				switchOn: function () { return unsupported; },
				switchOff: function () { return unsupported; }
			};
		}
	]);
