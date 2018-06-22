import { Contract } from './shared/model/contract.model';
import { ContractService } from './shared/service/contract.service';
import { User } from './shared/model/user.model';
import { Component, OnInit } from '@angular/core';
import { KeycloakService } from "keycloak-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  profile: User;
  contracts: Contract[];

  constructor(private keycloakService: KeycloakService,
              private contractService: ContractService) {
  }

  public ngOnInit(): void {
    this.profile = new User();
    this.profile.username = this.keycloakService.getUsername();
  }

  public isManager(): boolean {
    return true;
  }

  public isAdmin(): boolean {
    return true;
  }

  public getContracts() {
    this.contractService.getContracts().subscribe(
      data => {
        this.contracts = data;
      }
    );
  }

  public logout() {
    this.keycloakService.logout();
  }
}
