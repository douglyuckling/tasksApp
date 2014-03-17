define(['jquery',
        'backbone',
        'app/NewTaskView',
        'app/TasksView'],
function($,
         Backbone,
         NewTaskView,
         TasksView) {
    "use strict";

    var tasks = new Backbone.Collection;
    tasks.url = '/data/tasks/';
    tasks.fetch();

    var newTaskView = new NewTaskView({
        el: $('#new_task_form')
    });
    var tasksView = new TasksView({
        collection: tasks
    });

    newTaskView.on('newTask', function(taskData) {
        tasks.add([taskData]);
        newTaskView.clearForm();
    });

    newTaskView.render();
    $('#tasks_list').html(tasksView.render().el);

});
