TrelloClone.Views.BoardNew = Backbone.CompositeView.extend({
  template: JST['boards/board_new'],

  initialize: function () {
  },

  events: {
    'submit form' : 'submitForm'
  },

  submitForm: function (event) {
    var $form = $(event.currentTarget);
    var formData = $form.serializeJSON();
    var boardAttrs = formData.board;
    var newBoard = new TrelloClone.Models.Board(boardAttrs);
    newBoard.save({}, {
      success: function (model, response, options) {
        var id = newBoard.get('id')
        Backbone.history.navigate((newBoard.url() + '/' + id), {trigger: true});
      }
    });

  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }


});
