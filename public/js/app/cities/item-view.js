define(['marionette', 'underscore', 'text!cities/item-view.html', 'eventer',
'behaviors/behavior.filter'],
function(Marionette, _, templateHTML, eventer, Filter){

  'use strict';

  var CitiesItemView = Marionette.ItemView.extend({
    tagName: 'div',

    template: _.template(templateHTML),

    behaviors: {
      Filter: {
        behaviorClass: Filter
      }
    }
  });

  return CitiesItemView;

});
