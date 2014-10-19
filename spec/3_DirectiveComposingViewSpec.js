
// it's possible to write your angularized markup and your controllers
// in a way that puts most intersting behavior in the controller-- where
// it's highly testable.
//
// But when it comes to validations and disabling forms, angular puts a
// lot of intersting behavior into directives that are composed together
// at the view level. View specs are a good option for testing that
// behavior-- and for supporting future team members who may need to
// adjust that markup. They'll benefit from being able to see right away
// when their html changes break important behavior.

describe("DirectiveComposingView", function () {
  beforeEach(module('myApp'));
  viewSpec("DirectiveComposingView.html");

  describe("when the text in the input box is > 8 characters", function() {
    it("disables the submit button", function () {
      var self = this;
      self.$element.find(".short-text").val("reareaextreaextext").trigger('change');
      self.$element.find(".short-text").val("rreaextreaexteaext").trigger('input');
      this.$rootScope.$digest();
      var $submit = this.$element.find(".submit");
      expect($submit.attr('disabled')).toEqual('disabled');
    });
  });
});
