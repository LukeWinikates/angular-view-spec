angular.module('myApp').run(["$templateCache", function($templateCache) {
  $templateCache.put("ClickHandlerView.html",
                     "<div ng-controller='MyController'>\
      <button class='click-me' ng-click='click()'>\
      Click Me\
      </button>\
      <div ng-if='clicked' class='clicked-feedback'>\
        clicked!\
      </div>\
      </div> "
  );
}]);
