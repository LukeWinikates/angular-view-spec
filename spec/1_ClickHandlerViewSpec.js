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
      $(this.element).find('.click-me').click();
    });

    it("shows the text 'clicked!'", function() {
      expect($(this.element).find('.clicked-feedback').text().trim()).toEqual('clicked!');
    });
  });
});
