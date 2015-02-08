// ngNetwork works on mobile event in the absence of the plugin, but Connection may be missing.
// https://github.com/apache/cordova-plugin-network-information/blob/master/www/Connection.js
window.Connection = window.Connection || {
	UNKNOWN: "unknown",
	ETHERNET: "ethernet",
	WIFI: "wifi",
	CELL_2G: "2g",
	CELL_3G: "3g",
	CELL_4G: "4g",
	CELL: "cellular",
	NONE: "none"
};

angular
	.module("ngCordovaFallback.plugins.network", [])
	.factory("$cordovaFallbackNetwork", [
		"$window",
		"$rootScope",
		"$timeout",
		function ($window, $rootScope, $timeout) {
			var offlineEvent, onlineEvent;

			offlineEvent = function () {
				var networkState = Connection.NONE;

				$timeout(function () {
					$rootScope.$broadcast("$cordovaNetwork:offline", networkState);
				});
			};

			onlineEvent = function () {
				var networkState = Connection.UNKNOWN;

				$timeout(function () {
					$rootScope.$broadcast("$cordovaNetwork:online", networkState);
				});
			};

			document.addEventListener("deviceready", function () {
				if ($window.navigator.connection) {
					$window.document.addEventListener("offline", offlineEvent, false);
					$window.document.addEventListener("online", onlineEvent, false);
				}
			});

			return {
				getNetwork: function () {
					return {};
				},

				isOnline: function () {
					return $window.navigator.onLine;
				},

				isOffline: function () {
					return !$window.navigator.onLine;
				},

				clearOfflineWatch: function () {
					document.removeEventListener("offline", offlineEvent);
					$rootScope.$$listeners["$cordovaNetwork:offline"] = [];
				},

				clearOnlineWatch: function () {
					document.removeEventListener("online", offlineEvent);
					$rootScope.$$listeners["$cordovaNetwork:online"] = [];
				}
			};
		}
	])
	.run(["$cordovaFallbackNetwork", function ($cordovaFallbackNetwork) {
		// sets up the event listeners
	}]);
