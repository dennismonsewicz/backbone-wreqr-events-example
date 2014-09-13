define(['underscore', 'backbone', 'dogs/model'], function(_, Backbone, DogModel){

  var DogsCollection = Backbone.Collection.extend({
    model: DogModel,

    url: '/js/app/dogs/dogs.json',

    initialize: function () {
      this.fetch();
    }

  });

  return DogsCollection;

});
