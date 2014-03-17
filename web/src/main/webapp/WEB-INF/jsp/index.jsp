<!DOCTYPE html>
<html>
<head>
    <title>Tasks App</title>

    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
    <script data-main="js/app" src="js/lib/require.js"></script>
</head>
<body>
<div class="container">
    <div class="row" style="margin-bottom: 1em;">
        <div class="col-lg-12">
            <h3>Tasks</h3>
            <div class="input-group">
                <input id="add_task_summary_text" type="text" class="form-control" placeholder="Add a task...">
                <span class="input-group-btn">
                    <button id="add_task_btn" type="button" class="btn btn-primary">Add Task</button>
                </span>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12">
            <ul id="tasks_list" class="list-group"></ul>
        </div>
    </div>
</div>
</body>
</html>
