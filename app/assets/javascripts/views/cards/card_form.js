TrelloClone.Views.CardForm = Backbone.View.extend({
  template: JST['cards/card_form'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});
