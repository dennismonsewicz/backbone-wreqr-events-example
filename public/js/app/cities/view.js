define(['marionette', 'underscore', 'text!cities/template.html', 'eventer',
'cities/item-view', 'cities/collection'],
function(Marionette, _, templateHTML, eventer, ItemView, CitiesCollection) {
  'use strict';

  var CitiesView = Marionette.CompositeView.extend({
    el: '#animals',
    template: _.template(templateHTML),

    childView: ItemView,

    initialize: function () {
      this.collection = new CitiesCollection();
    }

  });

  return CitiesView;
});
