TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST['boards/board_show'],

  initialize: function (options) {
    this.board = options.board;
    this.listenTo(this.board, 'sync', this.render);
  },

  render: function () {
    var lists = [];
    var extractedLists = this.board.attributes.lists;
    // TODO: implement parse() and lists association.
    // TODO: lists are not showing on the board show page.
    debugger
    _(extractedLists).each(function (listObj) {
      var title = listObj.title;
      var board_id = this.board.id;
      var list = new TrelloClone.Models.List({board_id: board_id, title: title});
      lists.push(list);
      var listItemView = new TrelloClone.Views.List(list);
      this.addListSubview(listItemView);
    }.bind(this));
    var content = this.template({board: this.board});
    this.$el.html(content);
    return this;
  },

  addListSubview: function (listObj) {
    // TODO: fetch list from collection by id??
    var list = new TrelloClone.Models.List(listObj);
    var listItemView = new TrelloClone.Views.ListItem({
      list: list,
      // attributes: {href: ('#lists/' + list.escape('id'))}
      });
    this.addSubview('ul.lists', listItemView);
  }
});
