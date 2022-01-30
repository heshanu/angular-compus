import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data=[
    {name:'hehab',age:24,job:'desiger',employed:true},
    {name:'hehab',age:25,job:'desiger',employed:false},
    {name:'hehab',age:26,job:'desiger',employed:true},
    {name:'hehab',age:27,job:'desiger',employed:true}
  ];
  headers=[
    {key:'employed',label:'Has a Job:?'},
    {key:'name',label:'Name'},
    {key:'age',label:'Age'},
    {key:'job',label:'Job'}
  ];

  constructor() { }
  
  ngOnInit(): void {
  }

}
