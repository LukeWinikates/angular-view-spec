describe("AngularView", function() {
  beforeEach(module('myApp'));
  beforeEach(inject(function(_$compile_, _$rootScope_){
    this.$compile = _$compile_;
    this.$rootScope = _$rootScope_;
  }));

  describe("when the user clicks 'click me'", function() {
    beforeEach(function() {
      var html = "<div ng-controller='MyController'>\
      <button class='click-me' ng-click='click()'>\
      Click Me\
      </button>\
      <div ng-if='clicked' class='clicked-feedback'>\
        clicked!\
      </div>\
      </div> "

      this.element = this.$compile(html)(this.$rootScope);
      this.$rootScope.$digest();
      this.element.children()[0].click()
    });

    it("shows the text 'clicked!'", function() {
      this.$rootScope.$digest();
      expect(this.element.children()[1].innerText.trim()).toEqual('clicked!');
    });
  });
});
