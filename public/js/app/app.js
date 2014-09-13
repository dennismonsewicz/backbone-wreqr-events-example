define(['marionette', 'backbone', 'router', 'home/view', 'dogs/view'],
function(Marionette, Backbone, Router, HomeView) {
    'use strict';

    var App = new Marionette.Application();

    App.addInitializer(function () {
        Backbone.history.start();
        new HomeView();
    });

    return App;
});
