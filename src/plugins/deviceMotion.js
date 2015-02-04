// might have to set event listeners on devicemotion?

angular
	.module("ngCordovaFallback.plugins.deviceMotion", [])
	.factory("$cordovaFallbackDeviceMotion", [
		"$q",
		function ($q) {
			var rejected = $q.reject("Not implemented");

			return {
				getCurrentAcceleration: function () { return rejected; },
				watchAcceleration: function () { return rejected; },
				clearWatch: function () { return false; }
			};
		}
	]);
