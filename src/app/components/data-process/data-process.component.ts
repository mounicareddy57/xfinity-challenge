import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-data-process',
  templateUrl: './data-process.component.html',
  styleUrls: ['./data-process.component.css']
})
export class DataProcessComponent implements OnInit {

  data: Array<any> = [];
  processedData :
      {
      name: String,
      category: String,
      amount: Number
    };

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(
      data=>{this.data=data;
      })

  }

}
