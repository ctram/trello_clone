TrelloClone.Collections.Lists = Backbone.Collection.extend({
  url: 'api/lists',

  model: TrelloClone.Models.List,

  comparator: function (list) {
    return list.get('order');
  },

  getOrFetch: function (id) {
    var collection = this;
    var list = collection.find(id);
    if (list) {
      list.fetch();
    } else {
      list = new TrelloClone.Models.List({id: id});
      list.fetch();
      collection.add(list);
    }

    return list;
  }
});
