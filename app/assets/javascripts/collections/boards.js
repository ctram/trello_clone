TrelloClone.Collections.Boards = Backbone.Collection.extend({
  url: '/api/boards',

  model: TrelloClone.Models.Board,

  getOrFetch: function (id) {
    var collection = this;
    var model = collection.find(id);
    if (model) {
      model.fetch();
    } else {
      model = new TrelloClone.Models.Board({id: id});
      model.fetch();
      collection.add(model);
    }
    return model;
  },

});

TrelloClone.Collections.boards = new TrelloClone.Collections.Boards();
