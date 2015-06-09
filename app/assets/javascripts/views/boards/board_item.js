TrelloClone.Views.BoardItem = Backbone.CompositeView.extend({
  template: JST['boards/board_item'],

  tagName: 'a',

  initialize: function (options) {
    this.board = options.board;
    this.listenTo(this.board, 'sync', this.render);
    // this.listenTo(this.board, 'remove', this.board.destroy());
  },

  events: {
    'click button': 'destroyBoardItem'
  },

  destroyBoardItem: function (event) {
    event.preventDefault();
    this.board.destroy();
    this.remove();
  },


  render: function () {
    var content = this.template({board: this.board});
    this.$el.html(content);
    var $li = $('<li>');
    this.$el = $li.append(this.$el);
    return this;
  }

});
