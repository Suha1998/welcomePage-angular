import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  name: string;
  position: number;
  date: string;
  Event: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'John', date:'Jul 24 2020', Event:'Birthday Party'},
  {position: 2, name: 'David', date:'Aug 2 2020', Event:'Batch Party'},
  {position: 3, name: 'Mark', date:'Jul 31 2020', Event:'Wedding'},
  {position: 4, name: 'Mary', date:'Sep 4 2020', Event:'Concert'},
 
];


@Component({
  selector: 'app-checkcvs',
  templateUrl: './checkcvs.component.html',
  styleUrls: ['./checkcvs.component.css']
})
export class CheckcvsComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'Event', 'date'];
  dataSource = ELEMENT_DATA;
  
  constructor() { }

  ngOnInit(): void {
  }

}
