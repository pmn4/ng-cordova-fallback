angular.module("ngCordovaFallback.plugins.ga", [])
	.factory("$cordovaFallbackGA", [
		"$q",
		function ($q) {
			var rejected = $q.reject("Not implemented");

			return {
				init: function (id, mingap) { return rejected; },

				// this method signature looks very wrong (success?, fail?)
				trackEvent: function (success, fail, category, eventAction, eventLabel, eventValue) { return rejected; },

				// this method signature looks very wrong (success?, fail?)
				trackPage: function (success, fail, pageURL) { return rejected; },

				// this method signature looks very wrong (success?, fail?)
				setVariable: function (success, fail, index, value) { return rejected; },

				// this method signature looks very wrong (success?, fail?)
				exit: function (success, fail) { return rejected; },
			};
		}
	]);
