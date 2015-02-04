angular
	.module("ngCordovaFallback.plugins.keyboard", [])
	.factory("$cordovaFallbackKeyboard", [
		function () {
			// consider this StackOverflow answer for implementation of some of these:
			// http://stackoverflow.com/questions/11600040/jquery-js-html5-change-page-content-when-keyboard-is-visible-on-mobile-devices
			return {
				hideAccessoryBar: function (bool) {
					return;
				},

				close: function () {
					return;
				},

				disableScroll: function (bool) {
					return;
				},

				isVisible: function () {
					return false;
				}
			};
		}
	]);
