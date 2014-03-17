define(['jquery',
        'backbone',
        'app/TasksView'],
function($,
         Backbone,
         TasksView) {
    "use strict";

    var tasks = new Backbone.Collection;
    tasks.url = '/data/tasks/';
    tasks.fetch();

    var tasksView = new TasksView({
        collection: tasks
    });

    $('#tasks_list').append(tasksView.render().el);

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

});
