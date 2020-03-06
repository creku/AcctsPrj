
import { TransService } from './../../Shared/trans.service';
import { Trans } from './../../Shared/trans.model';
import { NgForm } from '@angular/forms';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { Account } from './../../Shared/account.model';
import { AccountService } from './../../Shared/account.service'

@Component({
  selector: 'app-add-trans',
  templateUrl: './add-trans.component.html'
})
export class AddTransComponent implements OnInit {

  formData: Trans={};
  modalOptions: NgbModalOptions;
  title = 'New Transaction';
  
  acct:Account={};

  @ViewChild('addTrancontent') modal: ElementRef;

  constructor(
    private modalService: NgbModal ,private transervice:TransService,private acctService:AccountService,
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
      id: null,
      desc: '',
      amount: null,
    }
  }

  showModal(acct:Account) {
    this.acct=acct;
    this.resetForm();
    this.modalService.open(this.modal, this.modalOptions);
 }


  onSubmit(form: NgForm) {
     //Adding opening balance Transaction.
     this.formData.account=this.acct;
     this.transervice.addTrans(this.formData);
     this.acctService.updateActBalance(this.acct.actName,this.acct.totAmount+this.formData.amount)
     this.modalService.dismissAll();
   
  }

}


