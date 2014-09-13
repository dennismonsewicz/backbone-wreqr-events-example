define(['backbone', 'marionette'], function (Backbone) {
    'use strict';

    var Eventer = new Backbone.Wreqr.EventAggregator();
    return Eventer;
});
