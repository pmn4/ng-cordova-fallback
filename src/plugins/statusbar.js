angular
	.module("ngCordovaFallback.plugins.statusbar", [])
	.factory("$cordovaFallbackStatusbar", [
		function () {
			return {
				overlaysWebView: function () { return false; },
				style: function () { return false; },
				styleColor: function () { return false; },
				styleHex: function () { return false; },
				hide: function () { return false; },
				show: function () { return false; },
				isVisible: function () { return false; }
			};
		}
	]);
