import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { RxState } from "@rx-angular/state";
import { Observable } from "rxjs";

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.scss'],
  providers: [RxState],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatTableComponent extends RxState<TableState> {
  state$ = this.select();

  @Input()
  set dataProvider(dataProvider: Observable<any[]>) {
    this.connect('dataProvider', dataProvider);
  }

  @Input()
  columnsDef: ColumnName[];
  @Input()
  displayedColumns: string[];

  constructor() {
    super();
  }

}

export class ColumnName {
  name: string;
  dataKey: string;
}

export interface TableState {
  dataProvider: any[];
}
