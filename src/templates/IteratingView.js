angular.module('myApp').run(["$templateCache", function($templateCache) {
  $templateCache.put("IteratingView.html",
                     "<div ng-controller='MyController'>\
                     <div ng-repeat='item in items'>\
                     {{item.name}}\
                     </div>\
                     </div>"
  );
}]);
