import { Component, OnInit } from '@angular/core';
import {RxState} from "@rx-angular/state";
import { ColumnName } from "@components/atom-components/mat-table/mat-table.component";
import { Subject } from "rxjs";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
  providers: [RxState]
})
export class CarsComponent implements OnInit {

  dataSource$ = new Subject<any[]>();
  displayedColumns: string[] = ['poz', 'marka', 'model', 'state', 'plannedEndDate'];
  columnsDef: ColumnName[] = [
    {name: 'Piorytet', dataKey: 'poz'},
    {name: 'Marka', dataKey: 'marka'},
    {name: 'Model', dataKey: 'model'},
    {name: 'Stan', dataKey: 'state'},
    {name: 'Planowana data zakończenia', dataKey: 'plannedEndDate'},
  ];

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.dataSource$.next([
        {poz: 1, marka: 'AUDI', model: 'A4 AVANT', state: 'GOOD', plannedEndDate: '21.02.2022'},
        {poz: 2, marka: 'AUDI', model: 'A3', state: 'BAD', plannedEndDate: '21.03.2022'},
        {poz: 3, marka: 'AUDI', model: 'A1 ', state: 'GOOD', plannedEndDate: '11.03.2022'},
        {poz: 4, marka: 'AUDI', model: 'A4 AVANT', state: 'BAD', plannedEndDate: '01.02.2022'}
      ]);
    }, 2000);
  }

}
