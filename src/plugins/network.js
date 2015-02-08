// ngNetwork works on mobile event in the absence of the plugin, but Connection may be missing.
// https://github.com/apache/cordova-plugin-network-information/blob/master/www/Connection.js
window.Connection = window.Connection || {
	UNKNOWN: "unknown",
	ETHERNET: "ethernet",
	WIFI: "wifi",
	CELL_2G: "2g",
	CELL_3G: "3g",
	CELL_4G: "4g",
	CELL:"cellular",
	NONE: "none"
};

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
