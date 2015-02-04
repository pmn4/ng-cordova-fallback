angular
	.module("ngCordovaFallback.plugins.appAvailability", [])
	.factory("$cordovaFallbackAppAvailability", [
		"$q",
		function ($q) {
			var unsupported = $q.reject("This feature is not supported on the web. Visit the app store to download our app.");

			return {
				check: function (urlScheme) { return unsupported; }
			};
		}
	]);
