import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  data=[
    {name:'hehab',age:24,job:'desiger'},
    {name:'hehab',age:24,job:'desiger'},
    {name:'hehab',age:24,job:'desiger'},
    {name:'hehab',age:24,job:'desiger'},
  ];

  headers=[
    {key:'name',label:'Name'},
    {key:'age',label:'Age'},
    {key:'job',label:'Job'}
  ];

  constructor() { }
  
  ngOnInit(): void {
  }

}
