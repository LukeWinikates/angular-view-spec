function viewSpec(templateName) {
  beforeEach(inject(function(_$compile_, _$rootScope_, _$templateCache_){
    this.$compile = _$compile_;
    this.$rootScope = _$rootScope_;
    this.$templateCache = _$templateCache_;
  }));
  beforeEach(function() {
    this.html = this.$templateCache.get(templateName);
    this.element = this.$compile(this.html)(this.$rootScope);
    this.$element = $(this.element);
    this.$rootScope.$digest();
  });
}
