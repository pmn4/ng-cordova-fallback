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
