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
