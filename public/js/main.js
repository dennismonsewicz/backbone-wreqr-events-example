require.config({
  baseUrl: '/js/app/',
  paths: {
    backbone: '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min',
    underscore: '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min',
    jquery: '//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min',
    marionette: [
      '//cdnjs.cloudflare.com/ajax/libs/backbone.marionette/2.1.0/backbone.marionette.min',
      '../lib/marionette'
    ],
    bootstrap: '//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.2.0/js/bootstrap.min',
    text: '//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.10/text'
  },
  shim: {
    jquery: {
        exports: 'jQuery'
    },
    marionette: {
        deps: ['backbone'],
        exports: 'Marionette'
    },
    bootstrap: {
      deps: ['jquery']
    }
  }
});

require(['app'], function(App) {
  'use strict';

  App.start();
});
