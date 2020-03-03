import { TransService } from './../../Shared/trans.service';
import { Component, OnInit } from '@angular/core';
import {Trans} from './../../Shared/trans.model';
import {Account} from './../../Shared/account.model';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-trans',
  templateUrl: './trans.component.html'
})
export class TransComponent implements OnInit {
  itemTrans:Trans[];

  constructor(private firestore: AngularFirestore,private transService:TransService) { }

  ngOnInit(): void {
  }

  getTrans(acctObj:Account)
  {
    this.transService.getTrans(acctObj.id)
    .subscribe(result => {
      this.itemTrans = result.map(item => {
        return {
          id: item.payload.doc.id,
          account:acctObj,
          ...(item.payload.doc.data()) as object
        } as Trans;
      }
      )
    })
    

   }
  

}
