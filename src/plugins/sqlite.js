angular
	.module("ngCordovaFallback.plugins.sqlite", [])
	.factory("$cordovaFallbackSQLite", [
		"$q",
		function ($q) {
			var rejected = $q.reject("Not implemented");

			return {
				openDB: function () { return false; },
				execute: function () { return rejected; },
				insertCollection: function () { return rejected; },
				nestedExecute: function () { return rejected; },
				deleteDB: function () { return rejected; }
			};
		}
	]);
