TrelloClone.Views.BoardItem = Backbone.CompositeView.extend({
  template: JST['boards/board_item'],

  tagName: 'a',

  events: {
    'click button': 'destroyBoardItem'
  },

  destroyBoardItem: function () {
    
  }

  initialize: function (options) {
    this.board = options.board;
    this.listenTo(this.board, 'sync', this.render);
    this.listenTo(this.board, 'remove', this.destroy());
  },

  render: function () {
    var content = this.template({board: this.board});
    this.$el.html(content);
    var $li = $('<li>');
    this.$el = $li.append(this.$el);
    return this;
  }

});
