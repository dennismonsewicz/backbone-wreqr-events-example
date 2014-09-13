define(['marionette', 'underscore', 'text!dogs/item-view.html', 'eventer',
'behaviors/behavior.filter'],
function(Marionette, _, templateHTML, eventer, Filter){

  'use strict';

  var DogItemView = Marionette.ItemView.extend({
    tagName: 'div',

    template: _.template(templateHTML),

    behaviors: {
      Filter: {
        behaviorClass: Filter
      }
    }
  });

  return DogItemView;

});
