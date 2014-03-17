package io.github.douglyuckling.tasks.domain

import groovy.transform.EqualsAndHashCode
import org.springframework.data.mongodb.core.mapping.Document

@Document(collection='tasks')
@EqualsAndHashCode(includes = 'id')
class Task {
    String id
    String summary
    int priority
    String context
    boolean complete = false

    // Jackson gets confused when there are two auto-generated getters.
    boolean getComplete() {
        return complete
    }

}
