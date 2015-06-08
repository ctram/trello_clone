TrelloClone.Routers.Router = Backbone.Router.extend({
  routes: {
    '' : 'boardsIndex',
    'boards' : 'boardsIndex',
    'boards/new' : 'boardNew',
    'boards/:id' : 'boardShow'
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
    var boardNewView = new TrelloClone.Views.BoardNew();
    this._swapView(boardNewView);
  },

  boardsIndex: function () {

    var boardsIndexView = new TrelloClone.Views.BoardsIndex({boards: this.boards});
    this._swapView(boardsIndexView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;

    this.$rootEl.html(view.render().$el);
  }
});
