TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST['boards/board_show'],

  initialize: function (options) {
    this.board = options.board;
    this.board.fetch();
    this.lists = this.board.lists();
    this.listenTo(this.board, 'sync', this.render);
    this.listenTo(this.lists, 'add', this.addListSubview);
  },

  events: {
    'click button.new-list': 'newList',
    'submit form': 'saveList'
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
  },

  newList: function (event) {
    event.preventDefault();
    var listForm = new TrelloClone.Views.ListForm({
      board: this.board
    });
    $('.new-list').remove();
    this.$el.append(listForm.render().$el);
  },

  saveList: function (event) {
    event.preventDefault();
    var $form = $(event.currentTarget);
    var formData = $form.serializeJSON();
    var boardId = this.board.escape('id');
    var listAttrs = formData.list;
    listAttrs.board_id = boardId;
    var list = new TrelloClone.Models.List(listAttrs);
    list.save({}, {
      success: function (model, response, options) {
        this.lists.add(list);
      }.bind(this)
    });
  }


});
