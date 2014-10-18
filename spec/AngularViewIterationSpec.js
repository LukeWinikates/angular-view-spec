describe("AngularView", function() {
  beforeEach(module('myApp'));
  beforeEach(inject(function(_$compile_, _$rootScope_){
    this.$compile = _$compile_;
    this.$rootScope = _$rootScope_;
  }));

  describe("when the user clicks 'click me'", function() {
    beforeEach(function() {
      var html = "<div ng-controller='MyController'>\
      <div ng-repeat='item in items'>\
       {{item.name}}\
      </div>\
      </div> "

      this.element = this.$compile(html)(this.$rootScope);
      this.$rootScope.$digest();
    });

    it("it shows each item", function() {
      this.$rootScope.$digest();
      expect(this.element.children()[0].innerText.trim()).toEqual('celery');
      expect(this.element.children()[1].innerText.trim()).toEqual('peanut butter');
      expect(this.element.children()[2].innerText.trim()).toEqual('raisins');
    });
  });
});
