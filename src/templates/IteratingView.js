angular.module('myApp').run(["$templateCache", function($templateCache) {
  $templateCache.put("IteratingView.html",
                     "<div ng-controller='MyController'>\
                     <div ng-repeat='item in items' class='item'>\
                     {{item.name}}\
                     </div>\
                     </div>"
  );
}]);
