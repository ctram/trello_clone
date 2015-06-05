TrelloClone.Views.BoardItem = Backbone.View.extend({
  template: JST['boards/board_item'],

  tagName: 'li',

  initialize: function (options) {
    this.board = options.board;
    this.listenTo(this.board, 'sync', this.render);
  },

  render: function () {
    var content = this.template({board: this.board});
    this.$el.html(content);
    return this;
  }

});
