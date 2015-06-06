TrelloClone.Views.ListItem = Backbone.View.extend({
  template: JST['lists/list_item'],

  initialize: function (options) {
    this.list = options.list;
  },

  render: function () {
    var content = this.template({list: this.list});
    this.$el.html(content);
    return this;
  }
});
