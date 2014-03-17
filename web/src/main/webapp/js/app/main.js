define(['d3'],
function(d3) {
    "use strict";

    var tasks = [
        {
            id: "53263ac5d1b897fdc7c3281b",
            summary: "Clean out back basement"
        },
        {
            id: "53263ae4d1b897fdc7c3281c",
            summary: "Paint hall trim"
        },
        {
            id: "53263af1d1b897fdc7c3281d",
            summary: "Get rid of wall unit"
        },
        {
            id: "53263b0ad1b897fdc7c3281e",
            summary: "Pick up new TV stand from IKEA"
        },
        {
            id: "53263c00d1b897fdc7c3281f",
            summary: "Move couch and set up TV stand"
        }
    ];

    var tasksSelection = d3.select('#tasks_list').selectAll('ul').data(tasks, function(d) {return d.id;});

    tasksSelection.enter()
        .append('ul')
        .attr('class', 'list-group-item');
    tasksSelection.exit()
        .remove();
    tasksSelection
        .text(function(d) { return d.summary; });

});
