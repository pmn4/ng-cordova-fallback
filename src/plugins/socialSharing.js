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
