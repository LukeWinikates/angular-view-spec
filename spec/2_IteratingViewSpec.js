describe("IteratingView", function() {
  beforeEach(module('myApp'));
  viewSpec("IteratingView.html");

  it("it shows each item", function() {
    this.$rootScope.$digest();
    var $items = $(this.element).find('.item');
    expect($items.eq(0).text().trim()).toEqual('celery');
    expect($items.eq(1).text().trim()).toEqual('peanut butter');
    expect($items.eq(2).text().trim()).toEqual('raisins');
    expect($items.length).toBe(3);
  });
});
