TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({
  events: {
    'click button.destroy-board-button': 'destroyBoard'
  },

  template: JST['boards/boards_index'],

  initialize: function (options) {
    this.boards = options.boards;

    this.listenTo(this.boards, 'add', this.addBoardSubview);
    this.listenTo(this.boards, 'sync add remove', this.render);

    this.boards.each(function (board) {
      this.addBoardSubview(board);
    }.bind(this));
  },

  render: function () {
    var content = this.template({});
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
