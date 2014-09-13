define(['eventer', 'marionette'], function(eventer, Marionette){
  'use strict';

  var Filter = Marionette.Behavior.extend({

    defaults: {
      field: "name"
    },

    initialize: function () {
      this.listenTo(eventer, 'filter', this.onFilter, this);
    },

    onFilter: function (term) {
      // if term is blank, render item
      if(term === "") {
          this.$el.show();
      }

      var pattern = new RegExp(term, "gi"),
          model = this.view.model,
          shouldShow = pattern.test(model.get(this.options.field));

      this.$el.toggle(shouldShow);
    }

  });

  return Filter;
});
