TrelloClone.Routers.Router = Backbone.Router.extend({
  routes: {
    '' : 'root',
    'boards' : 'boardsIndex'
  },

  initialize: function (boards, $rootEl) {
    this.$rootEl = $rootEl;
    this.boards = boards;
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
