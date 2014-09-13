define(['marionette', 'underscore', 'text!dogs/template.html',
'eventer', 'dogs/item-view', 'dogs/collection'],
function(Marionette, _, templateHTML, eventer, ItemView, DogsCollection) {
  'use strict';

  var DogsView = Marionette.CompositeView.extend({
    el: '#animals',
    template: _.template(templateHTML),

    childView: ItemView,
    //
    // childViewContainer: '.dogs',

    initialize: function () {
      this.collection = new DogsCollection();
    }

  });

  return DogsView;
});
