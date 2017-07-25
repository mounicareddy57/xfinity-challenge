import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data:Array<any> = [];
  column: string;
  desc: boolean = false;
  dir : number;

  constructor(private dataService: DataService){}

  sortBy(column){
    this.desc = !this.desc; //change the direction
    this.column = column;
    this.dir= this.desc ? 1 : -1;
  }

  ngOnInit() {
    this.dataService.getData().subscribe(
      data => this.data=data
    )}

}
