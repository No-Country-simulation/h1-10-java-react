package io.justina.management;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

@Component
public class ApplicationStartup implements ApplicationListener<ApplicationReadyEvent> {

    @Value("${server.port:8080}")
    private String serverPort;

    @Value("${springdoc.swagger-ui.path}")
    private String apiDocsPath;

    @Override
    public void onApplicationEvent(final ApplicationReadyEvent event) {
        System.out.println("DOCUMENTACION SWAGGER: http://localhost:" + serverPort + apiDocsPath);
    }
}
