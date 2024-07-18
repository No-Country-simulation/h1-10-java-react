package io.justina.management.dto.error;

import java.time.LocalDateTime;

public record ErrorDTO(LocalDateTime timeStamp,
                       String message,
                       String details) {
}
