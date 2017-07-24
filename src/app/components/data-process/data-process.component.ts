import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-data-process',
  templateUrl: './data-process.component.html',
  styleUrls: ['./data-process.component.css']
})
export class DataProcessComponent implements OnInit {

  names: any = '';
  a_names: Array<any> = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getData().subscribe(
      data => {
        var len = data.length,
          resp = {};
        for (let i = 0; i < len; i++) {
          var check=false;
          if (!resp[data[i].name]) {
            resp[data[i].name] = {'n': data[i].name, 'd': {'C1':'-', 'C2':'-', 'C3':'-'}};
            check = true;
          }
          resp[data[i].name]['d'][data[i].category] = data[i].amount;
          if(check) {
            this.a_names.push(resp[data[i].name]);
          }
        }
        this.names = this.a_names;
      });
  }
}


