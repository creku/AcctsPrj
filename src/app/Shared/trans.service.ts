import { Trans } from './trans.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransService {
  formData: Trans;

  constructor(private db: AngularFirestore) {

  }

  getTrans(acctName:string) {
    return this.db.collection('accounts').doc(acctName).collection('trans',ref => ref.orderBy('dateTime','desc').limit(15)).snapshotChanges();
  }

  addTrans(trans:Trans)
  {
    let formatedTran=this.formatTran(trans);

    this.db.collection('accounts').doc(trans.account.actName).collection('trans').add(formatedTran)
    .then(function() {
        console.log("Transaction Added successfully");
    })
    .catch(function(error) {
        console.error("Error adding Transaction: ", error);
    });
  }


  editTrans(trans:Trans)
  {
    
   let formatedTran=this.formatTran(trans);
    this.db.collection('accounts').doc(trans.account.actName).collection('trans').doc(trans.id).update(formatedTran)
    .then(function() {
        console.log("Transaction Edited successfully");
    })
    .catch(function(error) {
        console.error("Error  Editing Transaction", error);
    });
  }

  formatTran(trans:Trans)
  {
    let formatTran= Object.assign({},trans);
    formatTran.dateTime=Date.now();
    formatTran.amount=Math.round(trans.amount);
    formatTran.desc= formatTran.desc.trim();
    delete formatTran.account;
    delete formatTran.id;
    return formatTran;
  }

  //git test
}
