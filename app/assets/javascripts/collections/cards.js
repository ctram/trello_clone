TrelloClone.Collections.Cards = Backbone.Collection.extend({
  url: '/api/cards',

  model: TrelloClone.Models.Card,

  comparator: function (card) {
    return card.get('ord');
  },

  getOrFetch: function (id) {
    var cards = this;
    var card = cards.get(id);
    if (!card) {
      card = new TrelloClone.Models.Card({id: id});
      card.fetch({
        success: function (model, response, options) {
          cards.add(card);
        }
      });
    } else {
      card.fetch();
    }

    return card;
  }


});

TrelloClone.Collections.cards = new TrelloClone.Collections.Cards();
