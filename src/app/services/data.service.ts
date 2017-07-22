import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

  private url = 'app/data/data.json';

  constructor(private http: Http) { }

  getData(){
    return this.http.get(this.url)
               .map(res=>res.json());
  }
}
