import { Component, OnInit } from '@angular/core';
import {RxState} from "@rx-angular/state";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
  providers: [RxState]
})
export class CarsComponent implements OnInit {

  dataSource = [];
  displayedColumns: string[] = ['poz', 'marka', 'model', 'state', 'plannedEndDate'];

  constructor() { }

  ngOnInit(): void {
  }

}
