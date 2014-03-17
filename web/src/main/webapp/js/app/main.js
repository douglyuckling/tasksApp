define(['d3',
        'jquery',
        'backbone'],
function(d3,
         $,
         Backbone) {
    "use strict";

    var tasks = new Backbone.Collection;
    tasks.url = '/data/tasks/';
    tasks.fetch({
        success: function() {
            renderTasks();
        }
    });

    $('#add_task_btn').click(function() {
        addTask();
    });
    $('#add_task_summary_text').keypress(function(event) {
        if (event.which == 13) {
            addTask();
        }
    });

    function addTask() {
        var taskData = collectNewTaskFormData();
        tasks.add([taskData]);
        renderTasks();
        clearNewTaskForm();
    }

    function collectNewTaskFormData() {
        return {
            summary: $('#add_task_summary_text').val()
        }
    }

    function clearNewTaskForm() {
        $('#add_task_summary_text').val('');
    }

    function renderTasks() {
        var tasksSelection = d3.select('#tasks_list').selectAll('ul').data(tasks.toArray(), function(d) {return d.id || d.cid;});

        tasksSelection.enter()
            .append('ul')
            .attr('class', 'list-group-item');
        tasksSelection.exit()
            .remove();
        tasksSelection
            .text(function(d) { return d.get('summary'); });
    }

});
