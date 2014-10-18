describe("ClickHandlerView", function() {
  beforeEach(module('myApp'));

  beforeEach(inject(function(_$compile_, _$rootScope_, _$templateCache_){
    this.$compile = _$compile_;
    this.$rootScope = _$rootScope_;
    this.$templateCache = _$templateCache_;
  }));

  describe("when the user clicks 'click me'", function() {
    beforeEach(function() {
      this.html = this.$templateCache.get("ClickHandlerView.html");
      this.element = this.$compile(this.html)(this.$rootScope);
      this.$rootScope.$digest();
      this.element.children()[0].click()
    });

    it("shows the text 'clicked!'", function() {
      this.$rootScope.$digest();
      expect(this.element.children()[1].innerText.trim()).toEqual('clicked!');
    });
  });
});
