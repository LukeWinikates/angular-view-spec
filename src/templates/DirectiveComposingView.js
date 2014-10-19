
angular.module('myApp').run(["$templateCache", function($templateCache) {
  $templateCache.put("DirectiveComposingView.html",
                     "<div ng-controller='MyController'>\
                     <form name='inputForm'>\
                     <input name='shortText' class='short-text' ng-maxlength='8' ng-model='shortText'>\
                     <button name='submit' class='submit' ng-disabled='!inputForm.$valid'>Submit</button>\
                     </form>\
                     </div>"
  );
}]);
