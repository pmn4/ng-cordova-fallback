angular
	.module("ngCordovaFallback.plugins.localNotification", [])
	.factory("$cordovaFallbackLocalNotification", [
		"$q",
		function ($q) {
			var rejected = $q.reject("Not Implemented");

			return {
				add: function () { return rejected; },
				cancel: function () { return rejected; },
				cancelAll: function () { return rejected; },
				isScheduled: function () { return rejected; },
				getScheduledIds: function () { return rejected; },
				isTriggered: function () { return rejected; },
				getTriggeredIds: function () { return rejected; },
				getDefaults: function () { return {}; },
				setDefaults: angular.noop,
				onadd: angular.noop,
				ontrigger: angular.noop,
				onclick: angular.noop,
				oncancel: angular.noop
			};
		}
	]);
