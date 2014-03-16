package io.github.douglyuckling.tasks.web.controller

import io.github.douglyuckling.tasks.domain.Task
import io.github.douglyuckling.tasks.services.TaskService
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseBody

import static org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR
import static org.springframework.web.bind.annotation.RequestMethod.DELETE
import static org.springframework.web.bind.annotation.RequestMethod.GET
import static org.springframework.web.bind.annotation.RequestMethod.POST
import static org.springframework.web.bind.annotation.RequestMethod.PUT

@Controller
@RequestMapping('/data/tasks')
class TasksController {
    private static Logger LOG = LoggerFactory.getLogger(TasksController)

    @Autowired
    private TaskService taskService

    @RequestMapping(value = ['', '/'], method = GET)
    @ResponseBody
    List<Task> getTasks() {
        return new ArrayList<>(taskService.getTasks())
    }

    @RequestMapping(value = ['', '/'], method = POST)
    @ResponseBody
    List<Task> createTasks(@RequestBody List<Task> newTasks) {
        return new ArrayList<>(taskService.saveTasks(newTasks))
    }

    @RequestMapping(value = '/{taskId}', method = PUT)
    @ResponseBody
    List<Task> updateTask(@PathVariable('taskId') String taskId, @RequestBody List<Task> modifiedTasks) {
        return new ArrayList<>(taskService.saveTasks(modifiedTasks))
    }

    @RequestMapping(value = '/{taskId}', method = DELETE)
    @ResponseBody
    void deleteTask(@PathVariable('taskId') String taskId) {
        taskService.deleteTaskById(taskId)
    }

    @ExceptionHandler(Exception)
    ResponseEntity<String> handleException(Exception e) {
        LOG.error("Failed while handling request", e)
        return new ResponseEntity<String>(INTERNAL_SERVER_ERROR)
    }

}
