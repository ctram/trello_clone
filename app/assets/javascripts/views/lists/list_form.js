TrelloClone.Views.ListForm = Backbone.CompositeView.extend({
  template: JST['lists/list_form'],

  tagName: 'form',

  initialize: function (options) {
    this.board = options.board;
  },

  render: function () {
    var content = this.template({
      board: this.board
    });
    this.$el.html(content);
    return this;
  }
});
