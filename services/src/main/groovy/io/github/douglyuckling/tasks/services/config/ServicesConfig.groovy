package io.github.douglyuckling.tasks.services.config

import io.github.douglyuckling.tasks.domain.config.DomainConfig
import io.github.douglyuckling.tasks.services.TaskService
import io.github.douglyuckling.tasks.services.TaskServiceImpl
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.Import

@Configuration
@Import(DomainConfig.class)
class ServicesConfig {

    @Bean
    TaskService taskService() {
        return new TaskServiceImpl()
    }

}
