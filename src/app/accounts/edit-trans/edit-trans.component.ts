import { Account } from './../../Shared/account.model';
import { TransService } from './../../Shared/trans.service';
import { AccountService } from './../../Shared/account.service'
import { Trans } from './../../Shared/trans.model';
import { NgForm } from '@angular/forms';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";


@Component({
  selector: 'app-edit-trans',
  templateUrl: './edit-trans.component.html'
})
export class EditTransComponent implements OnInit {

 
  formData:Trans;

  prevAmt:number;
  prevDesc:string;

  modalOptions: NgbModalOptions;
  title = 'Edit Transaction';



  @ViewChild('editTrancontent') modal: ElementRef;

  constructor(
    private modalService: NgbModal ,private transervice:TransService,private acctService:AccountService
  ) {
    this.modalOptions = {
      backdrop:'static',
      backdropClass: 'customBackdrop'
    }
  }

  ngOnInit() {
    
  }


  showEditModal(trans) {
    this.prevAmt=trans.amount;
    this.prevDesc=trans.desc;
    this.formData=trans;
    this.modalService.open(this.modal, this.modalOptions);

  }

  onSubmit(form: NgForm) {
     //Adding opening balance Transaction.
     
     if(this.prevAmt!=this.formData.amount || this.prevDesc!=this.formData.desc)
     {
      
      this.transervice.editTrans(this.formData);
      this.acctService.updateActBalance(this.formData.account.id,(this.formData.account.totAmount+this.formData.amount-this.prevAmt));
      console.log('Transaction Updated');
     }
     else
     {
       console.log('No Update Required');
     }

     this.modalService.dismissAll();
   
  }

  closeDialog()
  {
    this.modalService.dismissAll();
  }

}


