TrelloClone.Views.ListItem = Backbone.CompositeView.extend({
  template: JST['lists/list_item'],

  events: {
    'click button': 'addCardForm'

  },

  addCardForm: function (event) {
    debugger
    var cardFormView = new TrelloClone.Views.CardForm();
    this.addSubview('.cards-list', cardFormView);
  },


  initialize: function (options) {

    this.list = options.list;
  },

  render: function () {

    var content = this.template({list: this.list});
    this.$el.html(content);
    return this;
  }
});
