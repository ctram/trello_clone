TrelloClone.Views.BoardItem = Backbone.CompositeView.extend({
  template: JST['boards/board_item'],

  tagName: 'a',

  initialize: function (options) {
    this.board = options.board;
    this.listenTo(this.board, 'sync', this.render);

  },

  render: function () {
    var content = this.template({board: this.board});
    this.$el.html(content);
    var $li = $('<li>');
    this.$el = $li.append(this.$el);
    return this;
  }

});
