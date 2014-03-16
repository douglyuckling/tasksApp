package io.github.douglyuckling.tasks.domain.repository

import io.github.douglyuckling.tasks.domain.Task
import org.springframework.data.repository.CrudRepository

interface TaskRepository extends CrudRepository<Task, String> {

}
