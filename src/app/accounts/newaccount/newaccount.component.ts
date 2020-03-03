import { TransService } from './../../Shared/trans.service';
import { Trans } from './../../Shared/trans.model';
import { NgForm } from '@angular/forms';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { Account } from './../../Shared/account.model';
import { AccountService } from './../../Shared/account.service'

@Component({
  selector: 'app-newaccount',
  templateUrl: './newaccount.component.html'
})
export class NewaccountComponent implements OnInit {

  
  formData: Account;
  modalOptions: NgbModalOptions;
  title = 'New Account';
  trans:Trans={};

  @ViewChild('content') modal: ElementRef;

  constructor(
    private modalService: NgbModal , private acctService:AccountService,private transervice:TransService
  ) {
    this.modalOptions = {
      backdrop:'static',
      backdropClass: 'customBackdrop'
    }
  }

  ngOnInit() {
    this.resetForm();
  }


  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.formData = {
      id:'',
      actName: '',
      totAmount: null,
    }
  }

  showModal() {

    this.resetForm();
    this.modalService.open(this.modal, this.modalOptions);

  }

  onSubmit(form: NgForm) {
   
    this.acctService.addAccount(this.formData);
    //add openbalance Trans 


 //Adding opening balance Transaction.
    this.trans.amount= this.formData.totAmount;
    this.trans.desc='Opening Balance';
    this.trans.account= this.formData ;
    this.transervice.addTrans(this.trans);
    this.modalService.dismissAll();
  
  }


}

