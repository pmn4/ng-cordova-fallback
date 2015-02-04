angular
	.module("ngCordovaFallback.plugins.network", [])
	.factory("$cordovaFallbackNetwork", [
		"$window",
		function ($window) {
			return {
				getNetwork: function () {
					return {};
				},

				isOnline: function () {
					return $window.navigator.onLine;
				},

				isOffline: function () {
					return !this.isOnline();
				}
			};
		}
	]);
