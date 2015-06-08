TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST['boards/board_show'],

  initialize: function (options) {
    this.board = options.board;
    this.board.fetch();
    this.lists = this.board.lists();
    this.listenTo(this.board, 'sync', this.render);
    this.listenTo(this.lists, 'add', this.addListSubview);

  },

  render: function () {
    var content = this.template({board: this.board});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addListSubview: function (listObj) {
    listObj = listObj.attributes;

    var list = new TrelloClone.Models.List(listObj);
    var listItemView = new TrelloClone.Views.ListItem({
      list: list,
      // attributes: {href: ('#lists/' + list.escape('id'))}
      });

    this.addSubview('ul.lists', listItemView);
  }
});
