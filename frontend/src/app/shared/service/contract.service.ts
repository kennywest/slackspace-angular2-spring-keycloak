import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';
import "rxjs/add/operator/map";
import { Http } from "@angular/http";
import { Contract } from "../model/contract.model";

@Injectable()
export class ContractService {

  constructor(private http: Http) {
  }

  public getContracts(): Observable<Contract[]> {
    const url = `${environment.BACKEND_URL}/contracts`;
    return this.http.get(url).map(response => response.json());
  }
}
