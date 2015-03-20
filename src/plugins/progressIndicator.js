/* still a bunch of work to do in this one.
   so far, only showSimple is implemented */

angular
	.module("ngWebapp.plugins.progressIndicator", [])
	.factory("$webappProgressIndicator", [
		"$ionicLoading",
		function ($ionicLoading) {
			return {
				show: function(_message) {
					var message = _message || "Please wait...";

					return false;
				},

				showSimple: function (_dim) {
					var dim = _dim || false;

					return $ionicLoading.show({
						content: '<i class="icon ion-load-c"></i>',
						showBackdrop: dim,
						showDelay: 0
					});
				},

				showSimpleWithLabel: function (_dim, _label) {
					var dim = _dim || false;
					var label = _label || "Loading...";

					return false;
				},

				showSimpleWithLabelDetail: function (_dim, _label, _detail) {
					var dim = _dim || false;
					var label = _label || "Loading...";
					var detail = _detail || "Please wait";

					return false;
				},

				showDeterminate: function (_dim, _timeout) {
					var dim = _dim || false;
					var timeout = _timeout || 50000;

					return false;
				},

				showDeterminateWithLabel: function (_dim, _timeout, _label) {
					var dim = _dim || false;
					var timeout = _timeout || 50000;
					var label = _label || "Loading...";

					return false;
				},

				showAnnular: function (_dim, _timeout) {
					var dim = _dim || false;
					var timeout = _timeout || 50000;

					return false;
				},

				showAnnularWithLabel: function (_dim, _timeout, _label) {
					var dim = _dim || false;
					var timeout = _timeout || 50000;
					var label = _label || "Loading...";

					return false;
				},

				showBar: function (_dim, _timeout) {
					var dim = _dim || false;
					var timeout = _timeout || 50000;

					return false;
				},

				showBarWithLabel: function (_dim, _timeout, _label) {
					var dim = _dim || false;
					var timeout = _timeout || 50000;
					var label = _label || "Loading...";

					return false;
				},

				showSuccess: function (_dim, _label) {
					var dim = _dim || false;
					var label = _label || "Success";

					return false;
				},

				showText: function (_dim, _text, _position) {
					var dim = _dim || false;
					var text = _text || "Warning";
					var position = _position || "center";

					return false;
				},

				hide: function () {
					return $ionicLoading.hide();
				}
			};
		}
	]);
