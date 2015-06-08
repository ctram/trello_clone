TrelloClone.Views.BoardNew = Backbone.CompositeView.extend({
  template: JST['boards/board_new'],

  initialize: function (options) {
    this.boards = options.boards;
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
        var id = newBoard.get('id');
        this.boards.add(newBoard);
        var boardUrl = extractUrl(newBoard.url());

        Backbone.history.navigate( boardUrl, {trigger: true});
      }.bind(this)
    });
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }


});

extractUrl = function (url) {
  url = url.split('');
  url = url.slice(5);

  url = url.join('');
  return url;
};
