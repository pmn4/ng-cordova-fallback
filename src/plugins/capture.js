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
