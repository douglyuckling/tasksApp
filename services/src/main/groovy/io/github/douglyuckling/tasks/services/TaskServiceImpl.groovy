package io.github.douglyuckling.tasks.services

import io.github.douglyuckling.tasks.domain.Task
import io.github.douglyuckling.tasks.domain.repository.TaskRepository
import org.springframework.beans.factory.annotation.Autowired

class TaskServiceImpl implements TaskService {

    @Autowired
    TaskRepository repository

    @Override
    Collection<Task> getTasks() {
        return repository.findAll() as List
    }

    @Override
    Collection<Task> saveTasks(Collection<Task> tasks) {
        tasks.each { it.ensureId() }
        return repository.save(tasks) as List
    }

    @Override
    void deleteTaskById(String taskId) {
        repository.delete(taskId)
    }

}
