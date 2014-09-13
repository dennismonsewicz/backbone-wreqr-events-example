define(['backbone', 'eventer', 'dogs/view', 'home/view', 'cities/view'],
function(Backbone, eventer, DogsView, HomeView, CitiesView){
    'use strict';

    var Router = Backbone.Router.extend({
        routes: {
            '': 'home',
            'dogs': 'showDogs',
            'cities': 'showCities'
        },

        initialize: function () {
          eventer.on('navigate', this.navigate, this);
        },

        home: function () {
          $('#animals').html('');
          return new HomeView().render();
        },

        showDogs: function () {
          this.navigate('dogs');
          return new DogsView().render();
        },

        showCities: function() {
          this.navigate('cities');
          return new CitiesView().render();
        }
    });

    return new Router();
});
