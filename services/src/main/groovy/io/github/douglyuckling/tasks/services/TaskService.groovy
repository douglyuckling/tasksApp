package io.github.douglyuckling.tasks.services

import io.github.douglyuckling.tasks.domain.Task

public interface TaskService {

    Collection<Task> getTasks()

    Collection<Task> saveTasks(Collection<Task> tasks)

    void deleteTaskById(String taskId)

}
