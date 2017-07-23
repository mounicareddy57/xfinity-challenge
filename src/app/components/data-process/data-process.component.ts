import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-data-process',
  templateUrl: './data-process.component.html',
  styleUrls: ['./data-process.component.css']
})
export class DataProcessComponent implements OnInit {

  data: Array<any> = [];

  tempArr:Array<any> = [];
  processedData: Array<any> = [];
  
  constructor(private dataService:DataService){}
  ngOnInit(){
    this.dataService.getData().subscribe(
      data=>{
        this.data = data;

        var arr = [];
        var maxI = 0;
        var maxJ = 0;

        for(let i = 0; i < this.data.length; i++){
          if(maxI <= parseInt(this.data[i].name.slice(1, this.data[i].name.length))) {
            maxI = parseInt(this.data[i].name.slice(1, this.data[i].name.length));
          }
          if(maxJ <= parseInt(this.data[i].category.slice(1, this.data[i].category.length))) {
            maxJ = parseInt(this.data[i].category.slice(1, this.data[i].category.length));
          }
        }

        for(var x = 0; x <= maxI; x++){
          arr[x] = [];
        }
        for(let i = 0; i < this.data.length; i++){
          arr[this.data[i].name.slice(1, this.data[i].name.length)][this.data[i].category.slice(1, this.data[i].category.length)] =
            this.data[i].amount;
        }
        for(let i = 1; i < arr.length; i++) {
          for(let j = 1; j < maxJ+1; j++){
            console.log("Value of " +i +" " +j  +" is " +arr[i][j]);
          }
        }
      }
    )
  }

}


