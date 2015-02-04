angular
	.module("ngCordovaFallback.plugins.globalization", [])
	.factory("$cordovaFallbackGlobalization", [
		"$q",
		function ($q) {
			var rejected = $q.reject("Not implemented");

			return {
				getPreferredLanguage: function () { return rejected; },
				getLocaleName: function () { return rejected; },
				getFirstDayOfWeek: function () { return rejected; }
			};
		}
	]);
