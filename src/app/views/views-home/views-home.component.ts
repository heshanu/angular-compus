import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  stats=[
    {value:22,label:'# of users'},
    {value:900,label:'revenue'},
    {value:60,label:'Reviews'}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
