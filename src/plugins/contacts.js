angular
	.module("ngCordovaFallback.plugins.contacts", [])
	.factory("$cordovaFallbackContacts", [
		"$window",
		"$q",
		function ($window, $q) {
			var rejected = $q.reject("This feature is not supported on the web. Visit the app store to download our app.");

			return {
				save: function () { return rejected; },
				remove: function () { return rejected; },
				clone: function () { return null; },
				find: function () { return rejected; },
				pickContact: function () { return rejected; }
			};
		}
	]);
