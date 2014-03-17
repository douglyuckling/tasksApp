define(['backbone',
        'text!app/newTaskView.html'],
function(Backbone,
         templateHtml) {
    "use strict";

    var NewTaskView = Backbone.View.extend({
        template: _.template(templateHtml),

        events: {
            'click .app-new-task button': 'onClickAddTask',
            'keypress .app-new-task input': 'onKeypressInTaskSummary'
        },

        render: function() {
            this.$el.html(this.template());
            return this;
        },

        onClickAddTask: function() {
            this.triggerNewTaskEvent();
        },

        onKeypressInTaskSummary: function() {
            if (event.which === 13) {
                this.triggerNewTaskEvent();
            }
        },

        triggerNewTaskEvent: function() {
            var taskData = this.getData();

            if (!_.isEmpty(taskData.summary)) {
                this.trigger('newTask', taskData);
            }
        },

        getData: function() {
            return {
                summary: this.$('.app-new-task input').val()
            }
        },

        clearForm: function() {
            this.$('.app-new-task input').val('');
        }

    });

    return NewTaskView;
});
