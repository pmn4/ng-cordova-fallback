;(function (window, navigator, angular) {
	"use strict";

	var app = angular.module("ngApp", [
		"ngCordova", // https://github.com/driftyco/ng-cordova.git
		"ngCordovaFallback"
	]);

	angular.forEach({
		actionSheet:
			window.plugins &&
			window.plugins.actionsheet,
		// adMob: undefined,
		appAvailability: window.appAvailability,
		// appRate: undefined,
		// appVersion: undefined,
		// backgroundGeolocation: undefined,
		// badge: undefined,
		barcodeScanner:
			window.cordova &&
			window.cordova.plugins &&
			window.cordova.plugins.barcodeScanner,
		// batteryStatus: undefined,
		// ble: undefined,
		// bluetoothSerial: undefined,
		// brightness: undefined,
		// calendar: undefined,
		camera: navigator.camera,
		// capture: undefined,
		// clipboard: undefined,
		contacts: navigator.contacts,
		// datePicker: undefined,
		device: window.device,
		deviceMotion: navigator.accelerometer,
		deviceOrientation: navigator.compass,
		dialogs: navigator.notification,
		// emailComposer: undefined,
		// facebook: undefined,
		// facebookAds: undefined,
		file:
			window.requestFileSystem &&
			window.resolveLocalFileSystemURL,
		// fileOpener2: undefined,
		// fileTransfer: undefined,
		flashlight:
			window.plugins &&
			window.plugins.flashlight,
		// flurryAds: undefined,
		ga:
			window.plugins &&
			window.plugins.gaPlugin,
		geolocation: navigator.geolocation,
		globalization: navigator.globalization,
		// googleAds: undefined,
		// googleAnalytics: undefined,
		// googleMap: undefined,
		// healthKit: undefined,
		// httpd: undefined,
		// iAd: undefined,
		// imagePicker: undefined,
		// inAppBrowser: undefined,
		keyboard:
			window.cordova &&
			window.cordova.plugins &&
			window.cordova.plugins.Keyboard,
		// keychain: undefined,
		localNotification:
			window.plugin &&
			window.plugin.notification &&
			window.plugin.notification.local,
		// mMediaAds: undefined,
		// media: undefined,
		// mobfoxAds: undefined,
		// mopubAds: undefined,
		// nativeAudio: undefined,
		network: navigator.connection,
		// oauth: undefined,
		// oauthUtility: undefined,
		pinDialog:
			window.plugins &&
			window.plugins.pinDialog,
		// prefs: undefined,
		// printer: undefined,
		// progressIndicator: undefined,
		push:
			window.plugins &&
			window.plugins.pushNotification,
		// sms: undefined,
		socialSharing:
			window.plugins &&
			window.plugins.socialsharing,
		spinnerDialog:
			window.plugins &&
			window.plugins.spinnerDialog,
		splashscreen: navigator.splashscreen,
		sqlite: window.sqlitePlugin,
		statusbar: window.StatusBar,
		toast:
			window.plugins &&
			window.plugins.toast,
		// touchid: undefined,
		vibration: navigator.notification,
		// videoCapturePlus: undefined,
		// zip: undefined,
	}, function (isAvailable, factoryName) {
		var factoryClassname = factoryName.charAt(0).toUpperCase() + factoryName.slice(1);

		app.factory("$app" + factoryClassname, [
			"$window",
			"$injector",
			function ($window, $injector) {
				var namespace = isAvailable ? "cordova" : "cordovaFallback";

				return $injector.get("$" + namespace + factoryClassname);
			}
		]);
	});
})(window, navigator, window.angular);
