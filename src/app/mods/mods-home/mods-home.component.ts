import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

  modalOpen=false;

  items:any=[
    {title:'Hressss',content:'sssssssssssssssssss'},
    {title:'Hressss',content:'sssssssssssssssssss'},
    {title:'Hressss',content:'sssssssssssssssssss'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    //this.modalOpen=!this.modalOpen;
    this.modalOpen=!this.modalOpen
  }
}
