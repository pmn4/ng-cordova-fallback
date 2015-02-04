angular
	.module("ngCordovaFallback.plugins.actionSheet", [])
	.factory("$cordovaFallbackActionSheet", [
		"$q",
		"$ionicPopup",
		function ($q, $ionicPopup) {
			function setUnlessNull(dest, src, key) {
				if (!src[key]) { return; }

				dest[key] = src[key];
			}
			return {
				show: function (options) {
					var ionicPopupOptions = {}, q = $q.defer();

					// title
					// [buttonLabels]                // standard buttons
					// addCancelButtonWithLabel      // cancel button
					// addDestructiveButtonWithLabel // e.g., delete button
					// > androidEnableCancelButton
					// > winphoneEnableCancelButton

					setUnlessNull(ionicPopupOptions, options, "title");
					setUnlessNull(ionicPopupOptions, options, "subTitle");
					setUnlessNull(ionicPopupOptions, options, "template");

					ionicPopupOptions.buttons = [];

					angular.forEach(options.buttonLabels, function (label) {
						if (!label) { return; }

						ionicPopupOptions.buttons.push({
							text: label,
							type: "button-positive",
							onTap: function (e) {
								q.resolve(label);
							}
						});
					});

					if (options.addDestructiveButtonWithLabel) {
						ionicPopupOptions.buttons.push({
							text: options.addDestructiveButtonWithLabel,
							type: "button-assertive",
							onTap: function (e) {
								q.resolve(options.addDestructiveButtonWithLabel);
							}
						});
					}

					if (options.addCancelButtonWithLabel) {
						ionicPopupOptions.buttons.push({
							text: options.addCancelButtonWithLabel,
							type: "button-stable",
							onTap: function (e) {
								q.reject(options.addCancelButtonWithLabel);
							}
						});
					}

					$ionicPopup.show(ionicPopupOptions);

					return q.promise;
				},
				hide: function () {
					// return $window.plugins.actionsheet.hide();
				}
			};
		}
	]);
