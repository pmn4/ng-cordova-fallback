# ngCordovaFallback
### Graceful Degradation for ngCordova Features

[ngCordova](https://github.com/driftyco/ng-cordova) is an excellent library.  And you can use it to churn out great-looking Cordova apps.  But wouldn't it be nice if you could run the very same code in a browser using components provided by the [Ionic Framework](http://ionicframework.com/) where native features (plugins) are unavailable?

ngCordovaFallback provides an Ionic-looking alternative to each plugin which ngCordova supports (well, it will... eventually).  The alternative will be used in the event that the required plugin is unavailable (i.e., you are running the code outside of Cordova, or you forgot to install the plugin).

## Example

Here is an example using the Action Sheet:

index.html
``` html
<script src="path/to/ng-cordova.js"></script>
<script src="path/to/ng-cordova-fallback.js"></script>
<script src="path/to/ng-cordova-fallback-injections.js"></script>

<script>
var myApp = angular.module("myApp", [
	"ionic",
	"ngApp"
]);
myApp.controller("HomeController", ["$appActionSheet", function ($appActionSheet) {
	$appActionSheet.show({
		title: "Take action",
		buttonLabels: ["Edit"],
		addCancelButtonWithLabel: "Cancel",
		addDestructiveButtonWithLabel: "Delete"
	});
}]);
</script>
```

**If this code is running in a Cordova App, the [$cordovaActionSheet](https://github.com/driftyco/ng-cordova/blob/master/src/plugins/actionSheet.js) will perform the action.**

**If the same code is running in a browser, [$cordovaFallbackActionSheet](https://github.com/pmn4/ng-cordova-fallback/blob/master/src/plugins/actionSheet.js) kicks in.**

_(The logic to determine which module to inject takes place in dist/ng-cordova-fallback-injects.js)_

---

## Help!

This is a project that I am dogfooding, so I will add support as I need it.

See something you would like added?  [Request it!](https://github.com/pmn4/ng-cordova-fallback/issues/new), or submit a pull request.
