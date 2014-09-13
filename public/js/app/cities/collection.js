define(['underscore', 'backbone', 'cities/model'], function(_, Backbone, CityModel){

  var CitiesCollection = Backbone.Collection.extend({
    model: CityModel,

    url: '/js/app/cities/cities.json',

    initialize: function () {
      this.fetch();
    }

  });

  return CitiesCollection;

});
