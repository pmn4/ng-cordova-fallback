// copy from ngCordova

angular
	.module("ngCordovaFallback.plugins.geolocation", [])
	.factory("$cordovaFallbackGeolocation", [
		// if this is a straight-copy from ngCordova, can I just return cordovaGelocation here?
		"$window",
		"$q",
		function ($window, $q) {
			var navigator = $window.navigator;

			return {
				getCurrentPosition: function (options) {
					var q = $q.defer();

					navigator.geolocation.getCurrentPosition(function (result) {
						q.resolve(result);
					}, function(err) {
						q.reject(err);
					}, options);

					return q.promise;
				},
				watchPosition: function (options) {
					var q = $q.defer();

					var watchID = navigator.geolocation.watchPosition(function (result) {
						q.notify(result);
					}, function (err) {
						q.reject(err);
					}, options);

					q.promise.cancel = function () {
						navigator.geolocation.clearWatch(watchID);
					};

					q.promise.clearWatch = function (id) {
						navigator.geolocation.clearWatch(id || watchID);
					};

					q.promise.watchID = watchID;

					return q.promise;
				},

				clearWatch: function (watchId) {
					return navigator.geolocation.clearWatch(watchId);
				}
			};
		}
	]);
