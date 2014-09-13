define(['backbone'], function (Backbone){

  var CityModel = Backbone.Model.extend({

    defaults: {
      name: null,
      abbreviation: null
    }

  });

  return CityModel;

});
