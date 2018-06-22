import { APP_INITIALIZER, NgModule } from '@angular/core';
import { KeycloakAngularModule, KeycloakService } from "keycloak-angular";
import { initializer } from './utils/app-init';
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { ContractService } from "./shared/service/contract.service";
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule, KeycloakAngularModule, HttpModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    },
    ContractService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
