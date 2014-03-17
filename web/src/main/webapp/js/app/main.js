define(['d3',
        'backbone'],
function(d3,
         Backbone) {
    "use strict";

    var tasks = new Backbone.Collection;
    tasks.url = '/data/tasks/';

    tasks.fetch({
        success: function() {
            var tasksSelection = d3.select('#tasks_list').selectAll('ul').data(tasks.toArray(), function(d) {return d.id;});

            tasksSelection.enter()
                .append('ul')
                .attr('class', 'list-group-item');
            tasksSelection.exit()
                .remove();
            tasksSelection
                .text(function(d) { return d.get('summary'); });
        }
    });

});
