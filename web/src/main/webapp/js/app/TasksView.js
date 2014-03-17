define(['backbone',
        'd3'],
function(Backbone,
         d3) {
    "use strict";

    var TasksView = Backbone.View.extend({
        tagName: 'ul',
        className: 'list-group',

        initialize: function() {
            this.listenTo(this.collection, 'change add remove reset', this.render);
        },

        render: function() {
            var tasksSelection = d3.select(this.el)
                .selectAll('li')
                .data(this.collection.toArray(), function(d) {return d.id || d.cid;});

            tasksSelection.enter()
                .append('li')
                .attr('class', 'list-group-item');
            tasksSelection.exit()
                .remove();
            tasksSelection
                .text(function(d) { return d.get('summary'); });

            return this;
        }

    });

    return TasksView;
});
