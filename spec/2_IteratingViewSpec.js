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
    var $items = $(this.element).find('.item');
    expect($items.eq(0).text().trim()).toEqual('celery');
    expect($items.eq(1).text().trim()).toEqual('peanut butter');
    expect($items.eq(2).text().trim()).toEqual('raisins');
    expect($items.length).toBe(3);
  });
});
