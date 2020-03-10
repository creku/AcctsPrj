import { Component, OnInit } from '@angular/core';
import { AccountService } from './../Shared/account.service';
import { AngularFirestore } from '@angular/fire/firestore';
import {Account} from './../Shared/account.model';
import * as $ from 'jquery';
@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  items:Account[];
  
 
  constructor( private acctService:AccountService,private firestore: AngularFirestore) {
   }

  ngOnInit() {
    this.acctService.getAccounts().subscribe(actionArray => {
      this.items = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...(item.payload.doc.data()) as object
        } as Account;
      }
       
      );
    });
   
    var $myGroup = $('#smb');
       $myGroup.on('show.bs.collapse', '.collapse', function() {
         $myGroup.find('.collapse.in').collapse('hide');
       });

<<<<<<< Updated upstream
=======
      
  }

  createAccount(acct:Account)
  {
    if(this.isAccountExists(acct.actName.toUpperCase().trim()))
    {    
      alert('Error -> Account already exists');
     }
     else
     {
     
      this.acctService.addAccount(acct);
      //add openbalance Trans 
      //Adding opening balance Transaction.
      this.trans.amount= acct.totAmount;
      this.trans.desc='Opening Balance';
      this.trans.account= acct ;
      this.transervice.addTrans(this.trans);
     }
}

  isAccountExists(acctId)
  {
     if(this.items.find(x => x.id == acctId))  return true;
     else return false;
  }


  SignOut()
  {
    this.authservice.SignOut();

>>>>>>> Stashed changes
  }

  
}
