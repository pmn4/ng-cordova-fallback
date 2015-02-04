// might have to set event listeners on deviceorientation?

angular
	.module("ngCordovaFallback.plugins.deviceOrientation", [])
	.factory("$cordovaFallbackDeviceOrientation", [
		"$q",
		function ($q) {
			var rejected = $q.reject("Not implemented");

			return {
				getCurrentAcceleration: function () { return rejected; },
				watchHeading: function () { return rejected; },
				clearWatch: function () { return false; }
			};
		}
	]);
