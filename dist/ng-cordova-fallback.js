/*!
 * ngCordovaFallback
 * v0.0.0-alpha
 * Project started by @gcpmn
 */
;(function(){
	"use strict";

angular.module('ngCordova', [
  'ngCordova.plugins'
]);

// http://ionicframework.com/docs/api/service/$ionicActionSheet/

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

angular
	.module("ngCordovaFallback.plugins.appAvailability", [])
	.factory("$cordovaFallbackAppAvailability", [
		"$q",
		function ($q) {
			var unsupported = $q.reject("This feature is not supported on the web. Visit the app store to download our app.");

			return {
				check: function (urlScheme) { return unsupported; }
			};
		}
	]);

// e.g., http://www.webqr.com/index.html

angular
	.module("ngCordovaFallback.plugins.barcodeScanner", [])
	.factory("$cordovaFallbackBarcodeScanner", [
		"$q",
		function ($q) {
			var rejected = $q.reject("Not implemented");

			return {
				scan: function () { return rejected; },
				encode: function () { return rejected; }
			};
		}
	]);

// HTML5: getUserMedia()

angular
	.module("ngCordovaFallback.plugins.camera", [])
	.factory("$cordovaFallbackCamera", [
		"$q",
		function ($q) {
			var rejected = $q.reject("Not implemented");

			return {
				getPicture: function () { return rejected; },
				cleanup: function () { return rejected; }
			};
		}
	]);

// HTML5: getUserMedia()

angular
	.module("ngCordovaFallback.plugins.capture", [])
	.factory("$cordovaFallbackCapture", [
		"$q",
		function ($q) {
			var rejected = $q.reject("Not implemented");

			return {
				captureAudio: function () { return rejected; },
				captureImage: function () { return rejected; },
				captureVideo: function () { return rejected; }
			};
		}
	]);

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

// might have to set event listeners on devicemotion?

angular
	.module("ngCordovaFallback.plugins.deviceMotion", [])
	.factory("$cordovaFallbackDeviceMotion", [
		"$q",
		function ($q) {
			var rejected = $q.reject("Not implemented");

			return {
				getCurrentAcceleration: function () { return rejected; },
				watchAcceleration: function () { return rejected; },
				clearWatch: function () { return false; }
			};
		}
	]);

// might have to set event listeners on deviceorientation?

angular
	.module("ngCordovaFallback.plugins.deviceOrientation", [])
	.factory("$cordovaFallbackDeviceOrientation", [
		"$q",
		function ($q) {
			var rejected = $q.reject("Not implemented");

			return {
				getCurrentAcceleration: function () { return rejected; },
				watchHeading: function () { return rejected; },
				clearWatch: function () { return false; }
			};
		}
	]);

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

angular
	.module("ngCordovaFallback.plugins.file", [])
	.factory("$cordovaFallbackFile", [
		"$q",
		function ($q) {
			var unsupported, rejected;

			unsupported = $q.reject("This feature is not supported on the web. Visit the app store to download our app.");
			rejected = $q.reject("Not Implemented");

			return {
				checkDir: function () { return unsupported; },
				createDir: function () { return unsupported; },
				checkFile: function () { return unsupported; },
				createFile: function () { return unsupported; },
				removeFile: function () { return unsupported; },
				writeFile: function () { return unsupported; },
				readFile: function () { return unsupported; },
				readFileMetadata: function () { return unsupported; },
				downloadFile: function () { return rejected; },
				uploadFile: function () { return rejected; }
			};
		}
	]);

angular
	.module("ngCordovaFallback.plugins.flashlight", [])
	.factory("$cordovaFallbackFlashlight", [
		"$q",
		function ($q) {
			var unsupported = $q.reject("This feature is not supported on the web. Visit the app store to download our app.");

			return {
				available: function () { return unsupported; },
				switchOn: function () { return unsupported; },
				switchOff: function () { return unsupported; }
			};
		}
	]);

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

// copy from ngCordova

angular
	.module("ngCordovaFallback.plugins.geolocation", [])
	.factory("$cordovaFallbackGeolocation", [
		// if this is a straight-copy from ngCordova, can I just return cordovaGelocation here?
		"$window",
		"$q",
		function ($window, $q) {
			var navigator = $window.navigator;

			return {
				getCurrentPosition: function (options) {
					var q = $q.defer();

					navigator.geolocation.getCurrentPosition(function (result) {
						q.resolve(result);
					}, function(err) {
						q.reject(err);
					}, options);

					return q.promise;
				},
				watchPosition: function (options) {
					var q = $q.defer();

					var watchID = navigator.geolocation.watchPosition(function (result) {
						q.notify(result);
					}, function (err) {
						q.reject(err);
					}, options);

					q.promise.cancel = function () {
						navigator.geolocation.clearWatch(watchID);
					};

					q.promise.clearWatch = function (id) {
						navigator.geolocation.clearWatch(id || watchID);
					};

					q.promise.watchID = watchID;

					return q.promise;
				},

				clearWatch: function (watchId) {
					return navigator.geolocation.clearWatch(watchId);
				}
			};
		}
	]);

angular
	.module("ngCordovaFallback.plugins.globalization", [])
	.factory("$cordovaFallbackGlobalization", [
		"$q",
		function ($q) {
			var rejected = $q.reject("Not implemented");

			return {
				getPreferredLanguage: function () { return rejected; },
				getLocaleName: function () { return rejected; },
				getFirstDayOfWeek: function () { return rejected; }
			};
		}
	]);

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

angular.module('ngCordovaFallback.plugins', [
  'ngCordovaFallback.plugins.actionSheet',
  'ngCordovaFallback.plugins.adMob',
  'ngCordovaFallback.plugins.appAvailability',
  'ngCordovaFallback.plugins.appRate',
  'ngCordovaFallback.plugins.appVersion',
  'ngCordovaFallback.plugins.backgroundGeolocation',
  'ngCordovaFallback.plugins.badge',
  'ngCordovaFallback.plugins.barcodeScanner',
  'ngCordovaFallback.plugins.batteryStatus',
  'ngCordovaFallback.plugins.ble',
  'ngCordovaFallback.plugins.bluetoothSerial',
  'ngCordovaFallback.plugins.brightness',
  'ngCordovaFallback.plugins.calendar',
  'ngCordovaFallback.plugins.camera',
  'ngCordovaFallback.plugins.capture',
  'ngCordovaFallback.plugins.clipboard',
  'ngCordovaFallback.plugins.contacts',
  'ngCordovaFallback.plugins.datePicker',
  'ngCordovaFallback.plugins.device',
  'ngCordovaFallback.plugins.deviceMotion',
  'ngCordovaFallback.plugins.deviceOrientation',
  'ngCordovaFallback.plugins.dialogs',
  'ngCordovaFallback.plugins.emailComposer',
  'ngCordovaFallback.plugins.facebook',
  'ngCordovaFallback.plugins.facebookAds',
  'ngCordovaFallback.plugins.file',
  'ngCordovaFallback.plugins.fileTransfer',
  'ngCordovaFallback.plugins.fileOpener2',
  'ngCordovaFallback.plugins.flashlight',
  'ngCordovaFallback.plugins.flurryAds',
  'ngCordovaFallback.plugins.ga',
  'ngCordovaFallback.plugins.geolocation',
  'ngCordovaFallback.plugins.globalization',
  'ngCordovaFallback.plugins.googleAds',
  'ngCordovaFallback.plugins.googleAnalytics',
  'ngCordovaFallback.plugins.googleMap',
  'ngCordovaFallback.plugins.healthKit',
  'ngCordovaFallback.plugins.httpd',
  'ngCordovaFallback.plugins.iAd',
  'ngCordovaFallback.plugins.imagePicker',
  'ngCordovaFallback.plugins.inAppBrowser',
  'ngCordovaFallback.plugins.keyboard',
  'ngCordovaFallback.plugins.keychain',
  'ngCordovaFallback.plugins.localNotification',
  'ngCordovaFallback.plugins.media',
  'ngCordovaFallback.plugins.mMediaAds',
  'ngCordovaFallback.plugins.mobfoxAds',
  'ngCordovaFallback.plugins.mopubAds',
  'ngCordovaFallback.plugins.nativeAudio',
  'ngCordovaFallback.plugins.network',
  'ngCordovaFallback.plugins.oauth',
  'ngCordovaFallback.plugins.oauthUtility',
  'ngCordovaFallback.plugins.pinDialog',
  'ngCordovaFallback.plugins.prefs',
  'ngCordovaFallback.plugins.printer',
  'ngCordovaFallback.plugins.progressIndicator',
  'ngCordovaFallback.plugins.push',
  'ngCordovaFallback.plugins.sms',
  'ngCordovaFallback.plugins.socialSharing',
  'ngCordovaFallback.plugins.spinnerDialog',
  'ngCordovaFallback.plugins.splashscreen',
  'ngCordovaFallback.plugins.sqlite',
  'ngCordovaFallback.plugins.statusbar',
  'ngCordovaFallback.plugins.toast',
  'ngCordovaFallback.plugins.touchid',
  'ngCordovaFallback.plugins.vibration',
  'ngCordovaFallback.plugins.videoCapturePlus',
  'ngCordovaFallback.plugins.zip'
]);

// ngNetwork works on mobile event in the absence of the plugin, but Connection may be missing.
// https://github.com/apache/cordova-plugin-network-information/blob/master/www/Connection.js
window.Connection = window.Connection || {
	UNKNOWN: "unknown",
	ETHERNET: "ethernet",
	WIFI: "wifi",
	CELL_2G: "2g",
	CELL_3G: "3g",
	CELL_4G: "4g",
	CELL: "cellular",
	NONE: "none"
};

angular
	.module("ngCordovaFallback.plugins.network", [])
	.factory("$cordovaFallbackNetwork", [
		"$window",
		"$rootScope",
		"$timeout",
		function ($window, $rootScope, $timeout) {
			var offlineEvent, onlineEvent;

			offlineEvent = function () {
				var networkState = Connection.NONE;

				$timeout(function () {
					$rootScope.$broadcast("$cordovaNetwork:offline", networkState);
				});
			};

			onlineEvent = function () {
				var networkState = Connection.UNKNOWN;

				$timeout(function () {
					$rootScope.$broadcast("$cordovaNetwork:online", networkState);
				});
			};

			document.addEventListener("deviceready", function () {
				if ($window.navigator.connection) {
					$window.document.addEventListener("offline", offlineEvent, false);
					$window.document.addEventListener("online", onlineEvent, false);
				}
			});

			return {
				getNetwork: function () {
					return {};
				},

				isOnline: function () {
					return $window.navigator.onLine;
				},

				isOffline: function () {
					return !$window.navigator.onLine;
				},

				clearOfflineWatch: function () {
					document.removeEventListener("offline", offlineEvent);
					$rootScope.$$listeners["$cordovaNetwork:offline"] = [];
				},

				clearOnlineWatch: function () {
					document.removeEventListener("online", offlineEvent);
					$rootScope.$$listeners["$cordovaNetwork:online"] = [];
				}
			};
		}
	])
	.run(["$cordovaFallbackNetwork", function ($cordovaFallbackNetwork) {
		// sets up the event listeners
	}]);

angular
	.module("ngCordovaFallback.plugins.pinDialog", [])
	.factory("$cordovaFallbackPinDialog", [
		"$window",
		function ($window) {
			return {
				prompt: function(message, promptCallback, title, buttonLabels, defaultText) {
					return $window.plugins.pinDialog.prompt.apply(navigator.notification, arguments);
				}
			};
		}
	]);

// http://ionicframework.com/docs/api/provider/$ionicConfigProvider/

angular
	.module("ngCordovaFallback.plugins.prefs", [])
	.factory("$cordovaFallbackPreferences", [
		"$q",
		function ($q) {
			var rejected = $q.reject("Not implemented");

			return {
				set: function () { return rejected; },
				get: function () { return rejected; }
			};
		}
	]);

angular
	.module("ngCordovaFallback.plugins.push", [])
	.factory("$cordovaFallbackPush", [
		"$q",
		function ($q) {
			var rejected = $q.reject("Not implemented");

			return {
				register: function () { return rejected; },
				unregister: function () { return rejected; },
				setBadgeNumber: function () { return rejected; }
			};
		}
	]);

angular
	.module("ngCordovaFallback.plugins.socialSharing", [])
	.factory("$cordovaFallbackSocialSharing", [
		"$q",
		function ($q) {
			var rejected = $q.reject("Not implemented");

			return {
				shareViaTwitter: function () { return rejected; },
				shareViaWhatsApp: function () { return rejected; },
				shareViaFacebook: function () { return rejected; },
				shareViaSMS: function () { return rejected; },
				shareViaEmail: function () { return rejected; },
				canShareVia: function () { return rejected; }
			};
		}
	]);

// http://ionicframework.com/docs/api/service/$ionicLoading/

angular
	.module("ngCordovaFallback.plugins.spinnerDialog", [])
	.factory("$cordovaFallbackSpinnerDialog", [
		"$window",
		function ($window) {
			return {
				show: angular.noop,
				hide: angular.noop
			};
		}
	]);

angular
	.module("ngCordovaFallback.plugins.splashscreen", [])
	.factory("$cordovaFallbackSplashscreen", [
		function () {
			return {
				hide: angular.noop,
				show: angular.noop
			};
		}
	]);

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

angular
	.module("ngCordovaFallback.plugins.vibration", [])
	.factory("$cordovaFallbackVibration", [
		function () {
			return {
				vibrate: angular.noop,
				vibrateWithPattern: angular.noop,
				cancelVibration: angular.noop
			};
		}
	]);

})();