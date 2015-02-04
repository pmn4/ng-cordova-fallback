angular
	.module("ngCordovaFallback.plugins.dialogs", [])
	.factory("$cordovaFallbackDialogs", [
		"$ionicPopup",
		function ($ionicPopup) {
			function showDialog (title, template, buttonName, buttonType, callback) {
				var ionicPopupOptions = {
					title: title,
					template: template,
					buttons: [{
						text: buttonName,
						type: "button-block " + buttonType,
						onTap: function (e) {
							if (callback && callback.call) {
								callback.call();
							}
						}
					}]
				};

				$ionicPopup.show(ionicPopupOptions);
			}
			return {
				alert: function (message, callback, title, buttonName) {
					showDialog(title, message, buttonName, "button-assertive", callback);
				},

				confirm: function (message, callback, title, buttonName) {
					showDialog(title, message, buttonName, "button-positive", callback);
				},

				prompt: function (message, callback, title, buttonLabels, defaultText) {
					// what are the multiple buttons?  OK/Cancel?
				},

				beep: function (times) {
					return false;
				}
			};
		}
	]);
