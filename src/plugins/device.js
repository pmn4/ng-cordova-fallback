angular
	.module("ngCordovaFallback.plugins.device", [])
	.factory("$cordovaFallbackDevice", [
		"localStorageService", // $injector?
		function (localStorageService) {
			return {
				getDevice: function () {
					return null;
				},

				// @todo: infer from browser string?
				getCordova: function () {
					return null;
				},

				// @todo: infer from browser string?
				getModel: function () {
					return null;
				},

				// Waraning: device.name is deprecated as of version 2.3.0. Use device.model instead.
				getName: function () {
					return null;
				},

				// @todo: infer from browser string?
				getPlatform: function () {
					return null;
				},

				getUUID: function () {
					var uuid = localStorageService.get("deviceUUID");

					if (!uuid) {
						// needs to be WAY smarter
						uuid = Math.floor(Math.random() * Number.MAX_VALUE);
						localStorageService.set("deviceUUID", uuid);
					}

					return uuid;
				},

				// @todo: infer from browser string?
				getVersion: function () {
					return null;
				}
			};
		}
	]);
