// can probably do better than http://ionicframework.com/docs/api/service/$ionicPopup/

angular
	.module("ngCordovaFallback.plugins.toast", [])
	.factory("$cordovaFallbackToast", [
		"$q",
		function ($q) {
			var rejected = $q.reject("Not implemented");

			return {
				showShortTop: function () { return rejected; },
				showShortCenter: function () { return rejected; },
				showShortBottom: function () { return rejected; },
				showLongTop: function () { return rejected; },
				showLongCenter: function () { return rejected; },
				showLongBottom: function () { return rejected; },
				show: function () { return rejected; },
			};
		}
	]);
