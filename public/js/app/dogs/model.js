define(['backbone'], function (Backbone){

  var DogModel = Backbone.Model.extend({

    defaults: {
      latitude: null,
      name: null,
      date: null,
      longitude: null,
      description: null
    }

  });

  return DogModel;

});
