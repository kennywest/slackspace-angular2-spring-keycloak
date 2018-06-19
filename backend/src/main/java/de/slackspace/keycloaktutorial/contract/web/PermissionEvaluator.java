package de.slackspace.keycloaktutorial.contract.web;

import org.springframework.stereotype.Component;

import java.security.Principal;

@Component(value = "permissionEvaluator")
public class PermissionEvaluator {

    public boolean canDo(Principal principal) {
        System.out.println("canDo? :" + principal);
        return true;
    }
}
