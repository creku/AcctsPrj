import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { AccountService } from './../Shared/account.service';
import { TransService } from './../Shared/trans.service';
import { AngularFirestore } from '@angular/fire/firestore';
import {Account} from './../Shared/account.model';
import {Trans} from './../Shared/trans.model';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TestComponent implements OnInit {
  
  displayedColumns: string[] = ['actName','totAmount'];
  dataSource = ELEMENT_DATA;
  expandedElement: Account;
  items:Account[];
  itemTrans:Array<any>;
  columnsToDisplay = ['actName', 'totAmount'];
  constructor( private acctService:AccountService,private firestore: AngularFirestore,private transService:TransService) {
   }

  ngOnInit() {
          this.acctService.getAccounts().subscribe(actionArray => {
            this.items = actionArray.map(item => {
              return {
                id: item.payload.doc.id,
                ...(item.payload.doc.data()) as object
              } as Account;
            }
            
            )
          });

    }

}
