// HTML5: getUserMedia()

angular
	.module("ngCordovaFallback.plugins.camera", [])
	.factory("$cordovaFallbackCamera", [
		"$q",
		function ($q) {
			var rejected = $q.reject("Not implemented");

			return {
				getPicture: function () { return rejected; },
				cleanup: function () { return rejected; }
			};
		}
	]);
