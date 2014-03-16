package io.github.douglyuckling.tasks.config

import io.github.douglyuckling.tasks.services.config.ServicesConfig
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.Import
import org.springframework.context.annotation.PropertySource
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer

@Configuration
@Import(ServicesConfig.class)
@PropertySource('classpath:io/github/douglyuckling/tasks/internal.application.properties')
class ApplicationConfig {

    @Bean
    static PropertySourcesPlaceholderConfigurer propertySourcesPlaceholderConfigurer() {
        return new PropertySourcesPlaceholderConfigurer()
    }

    // Application-scoped beans go here...

}
