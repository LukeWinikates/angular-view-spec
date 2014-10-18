describe("IteratingView", function() {
  beforeEach(module('myApp'));
  beforeEach(inject(function(_$compile_, _$rootScope_, _$templateCache_){
    this.$compile = _$compile_;
    this.$rootScope = _$rootScope_;
    this.$templateCache = _$templateCache_;
  }));

  beforeEach(function() {
    this.html = this.$templateCache.get("IteratingView.html");
    this.element = this.$compile(this.html)(this.$rootScope);
    this.$rootScope.$digest();
  });

  it("it shows each item", function() {
    this.$rootScope.$digest();
    expect(this.element.children()[0].innerText.trim()).toEqual('celery');
    expect(this.element.children()[1].innerText.trim()).toEqual('peanut butter');
    expect(this.element.children()[2].innerText.trim()).toEqual('raisins');
  });
});
