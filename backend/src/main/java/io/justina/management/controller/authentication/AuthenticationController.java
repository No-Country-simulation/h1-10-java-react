package io.justina.management.controller.authentication;


import io.justina.management.dto.jwttoken.DataJWTTokenDTO;
import io.justina.management.dto.user.UserAuthenticateDataDTO;
import io.justina.management.service.authentication.IAuthenticationService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("v1/api/login")
public class AuthenticationController {

    private final IAuthenticationService authenticationService;

    @Autowired
    public AuthenticationController(IAuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }
    @Operation(summary = "Authenticate user")
    @PostMapping
    public ResponseEntity<DataJWTTokenDTO> authenticate(@RequestBody @Valid UserAuthenticateDataDTO userAuthenticateDataDTO){
        DataJWTTokenDTO dataJWTTokenDTO = authenticationService.authenticate(userAuthenticateDataDTO);
        return ResponseEntity.ok(dataJWTTokenDTO);
    }
}
