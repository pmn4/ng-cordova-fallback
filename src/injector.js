;(function (window, navigator, angular) {
	"use strict";

	var app = angular.module("ngApp", [
		"ngCordova", // https://github.com/driftyco/ng-cordova.git
		"ngCordovaFallback"
	]);

	angular.forEach({
		actionSheet: function () {
			return window.plugins && window.plugins.actionsheet;
		},
		// adMob: undefined,
		appAvailability: function () {
			return window.appAvailability;
		},
		// appRate: undefined,
		// appVersion: undefined,
		// backgroundGeolocation: undefined,
		// badge: undefined,
		barcodeScanner: function () {
			return window.cordova && window.cordova.plugins && window.cordova.plugins.barcodeScanner;
		},
		// batteryStatus: undefined,
		// ble: undefined,
		// bluetoothSerial: undefined,
		// brightness: undefined,
		// calendar: undefined,
		camera: function () { return navigator.camera; },
		// capture: undefined,
		// clipboard: undefined,
		contacts: function () { return navigator.contacts; },
		// datePicker: undefined,
		device: function () { return window.device; },
		deviceMotion: function () { return navigator.accelerometer; },
		deviceOrientation: function () { return navigator.compass; },
		dialogs: function () { return navigator.notification; },
		// emailComposer: undefined,
		// facebook: undefined,
		// facebookAds: undefined,
		file: function () { return window.requestFileSystem && window.resolveLocalFileSystemURL; },
		// fileOpener2: undefined,
		// fileTransfer: undefined,
		flashlight: function () { return window.plugins && window.plugins.flashlight; },
		// flurryAds: undefined,
		ga: function () { return window.plugins && window.plugins.gaPlugin; },
		geolocation: function () { return navigator.geolocation; },
		globalization: function () { return navigator.globalization; },
		// googleAds: undefined,
		// googleAnalytics: undefined,
		// googleMap: undefined,
		// healthKit: undefined,
		// httpd: undefined,
		// iAd: undefined,
		// imagePicker: undefined,
		// inAppBrowser: undefined,
		keyboard: function () { return window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard; },
		// keychain: undefined,
		localNotification: function () { return window.plugin && window.plugin.notification && window.plugin.notification.local; },
		// mMediaAds: undefined,
		// media: undefined,
		// mobfoxAds: undefined,
		// mopubAds: undefined,
		// nativeAudio: undefined,
		network: function () { return navigator.connection; },
		// oauth: undefined,
		// oauthUtility: undefined,
		pinDialog: function () { return window.plugins && window.plugins.pinDialog; },
		// prefs: undefined,
		// printer: undefined,
		progressIndicator: function () { return window.ProgressIndicator; },
		push: function () { return window.plugins && window.plugins.pushNotification; },
		// sms: undefined,
		socialSharing: function () { return window.plugins && window.plugins.socialsharing; },
		spinnerDialog: function () { return window.plugins && window.plugins.spinnerDialog; },
		splashscreen: function () { return navigator.splashscreen; },
		sqlite: function () { return window.sqlitePlugin; },
		statusbar: function () { return window.StatusBar; },
		toast: function () { return window.plugins && window.plugins.toast; },
		// touchid: undefined,
		vibration: function () { return navigator.notification; },
		// videoCapturePlus: undefined,
		// zip: undefined,
	}, function (isAvailable, factoryName) {
		var factoryClassname = factoryName.charAt(0).toUpperCase() + factoryName.slice(1);

		app.factory("$app" + factoryClassname, [
			"$window",
			"$injector",
			function ($window, $injector) {
				var namespace = isAvailable() ? "cordova" : "webapp";

				var factory = $injector.get("$" + namespace + factoryClassname);
				factory.__ngAppSource__ = namespace;
				return factory;
			}
		]);
	});
})(window, navigator, window.angular);
