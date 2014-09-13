define(['marionette', 'underscore', 'text!home/template.html', 'eventer'],
function (Marionette, underscore, templateHTML, eventer) {
  'use strict';

  var HomeView = Marionette.ItemView.extend({
      el: '.header',
      template: _.template(templateHTML),

      ui: {
        nav: 'ul.nav',
        search: '#filter'
      },

      events: {
        'click @ui.nav li a': 'onNavClick',
        'keyup @ui.search': 'onFilter'
      },

      initialize: function () {
        this.listenTo(eventer, 'reset:filter', this.resetFilter, this);
        this.render();
      },

      onFilter: function () {
        eventer.trigger('filter', this.ui.search.val());
      },

      resetFilter: function () {
        this.ui.search.val('');
      },

      onNavClick: function (e) {
        this.ui.nav.find('li').removeClass('active');
        var link = $(e.currentTarget);
        link.parent().addClass('active');
        eventer.trigger('reset:filter');
      }
  });

  return HomeView;
});
