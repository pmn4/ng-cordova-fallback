angular
	.module("ngCordovaFallback.plugins.push", [])
	.factory("$cordovaFallbackPush", [
		"$q",
		function ($q) {
			var rejected = $q.reject("Not implemented");

			return {
				register: function () { return rejected; },
				unregister: function () { return rejected; },
				setBadgeNumber: function () { return rejected; }
			};
		}
	]);
