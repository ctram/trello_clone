TrelloClone.Routers.Router = Backbone.Router.extend({
  routes: {
    '' : 'boardsIndex',
    'boards' : 'boardsIndex',
    'boards/new' : 'boardNew',
    'boards/:id' : 'boardShow',
    'lists/new': 'listNew'
  },

  initialize: function (boards, $rootEl) {
    this.$rootEl = $rootEl;
    this.boards = boards;
  },

  boardShow: function (id) {
    var board = this.boards.getOrFetch(id);
    var boardShowView = new TrelloClone.Views.BoardShow({board: board});
    this._swapView(boardShowView);
  },

  boardNew: function () {
    var board = new TrelloClone.Models.Board();
    var boardNewView = new TrelloClone.Views.BoardNew({
      board: board,
      boards: this.boards
    });
    this._swapView(boardNewView);
  },

  boardsIndex: function () {

    var boardsIndexView = new TrelloClone.Views.BoardsIndex({boards: this.boards});
    this._swapView(boardsIndexView);
  },

  listNew: function () {
    var list = new TrelloClone.Models.List();
    // var
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;

    this.$rootEl.html(view.render().$el);
  }
});
