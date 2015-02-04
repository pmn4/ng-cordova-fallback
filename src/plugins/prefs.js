// http://ionicframework.com/docs/api/provider/$ionicConfigProvider/

angular
	.module("ngCordovaFallback.plugins.prefs", [])
	.factory("$cordovaFallbackPreferences", [
		"$q",
		function ($q) {
			var rejected = $q.reject("Not implemented");

			return {
				set: function () { return rejected; },
				get: function () { return rejected; }
			};
		}
	]);
