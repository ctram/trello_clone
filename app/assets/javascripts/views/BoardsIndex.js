TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({
  template: JST['boards/board_index'],

  initialize: function (options) {
    this.boards = options.boards;

    this.listenTo(this.boards, 'add', this.addBoardSubview);

    this.boards.each(function (board) {
      this.addBoardSubview(board);
    }.bind(this));
  },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();

    return this;
  },

  addBoardSubview: function (board) {
    var boardItem = new TrelloClone.Views.BoardItem({board: board});
    this.addSubview('ul.boards', boardItem);
  }



});
