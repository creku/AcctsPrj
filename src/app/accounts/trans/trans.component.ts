import { AccountsComponent } from './../accounts.component';
import { TransService } from './../../Shared/trans.service';
import { Component, OnInit } from '@angular/core';
import {Trans} from './../../Shared/trans.model';
import {Account} from './../../Shared/account.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { ReuseFunctions } from 'src/app/Shared/reusefuntions';


@Component({
  selector: 'app-trans',
  templateUrl: './trans.component.html'
})
export class TransComponent implements OnInit {
  itemTrans:Trans[];

  constructor(private firestore: AngularFirestore,private transService:TransService,public rfun:ReuseFunctions) { }

  ngOnInit(): void {
  }

  getTrans(acctObj:Account)
  {
      let i:number=0;
      i=acctObj.totAmount;
    this.transService.getTrans(acctObj.id)
    .subscribe(result => {
      this.itemTrans = result.map(item => {
        i=i-item.payload.doc.data().amount;
        return {
          id: item.payload.doc.id,
          account:acctObj,
          prevBal:i,
          ...(item.payload.doc.data()) as object
        } as Trans;
      }
      )
    })

   }

   
  

}
