describe("ClickHandlerView", function() {
  beforeEach(module('myApp'));
  viewSpec("ClickHandlerView.html");

  describe("when the user clicks 'click me'", function() {
    beforeEach(function() {
      this.$element.find('.click-me').click();
    });

    it("shows the text 'clicked!'", function() {
      expect(this.$element.find('.clicked-feedback').text().trim()).toEqual('clicked!');
    });
  });
});
