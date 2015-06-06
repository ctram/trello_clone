TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({
  template: JST['boards/boards_index'],

  initialize: function (options) {
    this.boards = options.boards;

    this.listenTo(this.boards, 'add', this.addBoardSubview);

    this.boards.each(function (board) {
      this.addBoardSubview(board);
    }.bind(this));
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();

    return this;
  },

  addBoardSubview: function (board) {
    var boardItemView = new TrelloClone.Views.BoardItem({
      board: board,
      attributes: {href: ('#boards/' + board.escape('id'))}
    });
    this.addSubview('ul.boards', boardItemView);
  }
});
