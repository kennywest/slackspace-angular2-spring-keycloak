package de.slackspace.keycloaktutorial.security.web.config;

import de.slackspace.keycloaktutorial.security.web.resolver.UserDetailsArgumentResolver;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import java.util.List;

@Configuration
public class WebConfig extends WebMvcConfigurerAdapter {

    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> argumentResolvers) {
        argumentResolvers.add(createUserDetailsResolver());
    }

    @Bean
    public UserDetailsArgumentResolver createUserDetailsResolver() {
        return new UserDetailsArgumentResolver();
    }
}
