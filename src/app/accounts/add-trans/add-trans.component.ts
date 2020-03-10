
import { TransService } from './../../Shared/trans.service';
import { Trans } from './../../Shared/trans.model';
import { NgForm } from '@angular/forms';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { Account } from './../../Shared/account.model';
import { AccountService } from './../../Shared/account.service'
import { isNumber, isUndefined } from 'util';
import { RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: 'app-add-trans',
  templateUrl: './add-trans.component.html'
})
export class AddTransComponent implements OnInit {
  
 //formData: any={};
  formData: Trans={};
  testvar:number=0;
  
  
  modalOptions: NgbModalOptions;
   
  isComChkEnable:boolean;

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
      amount: null      
    }
   
      let ac:Account={};
      this.formData.account =ac;
      if(isUndefined(this.acct.comsRate) )
         this.formData.account.comsRate =0;
      else
      this.formData.account.comsRate =this.acct.comsRate;

  }

  showModal(acct:Account) {
    this.acct=acct;
    this.resetForm();
    this.modalService.open(this.modal, this.modalOptions);
 }


  onSubmit(form: NgForm) {
     //Adding opening balance Transaction.
<<<<<<< Updated upstream
     this.formData.account=this.acct;

    this.transervice.addTrans(this.formData);
    this.acctService.updateActBalance(this.acct.actName,this.acct.totAmount+this.formData.amount)
=======
     
     let comTran:Trans={};
     let commTot = -1*Math.round(this.formData.amount*this.formData.account.comsRate*0.01)

    if(this.formData.chkComEnable && this.formData.amount!=0 )
    {
        this.acct.totAmount=this.acct.totAmount+this.formData.amount+commTot;
       /*if commission rate changed update the same */
        if(this.formData.account.comsRate!=this.acct.comsRate)
        {
            this.acct.comsRate=this.formData.account.comsRate;
            this.formData.account=this.acct;
            this.acctService.updateActCommission(this.acct);
        }

        this.formData.account=this.acct;
        this.transervice.addTrans(this.formData); /* add cuurent transaction */

        /*add commission Entry */
        if (commTot>0){
          comTran.account=this.acct;
          comTran.amount=commTot;
          comTran.desc='Commission @'+this.formData.account.comsRate.toString()+'%';
          this.transervice.addTrans(comTran);
        }

    }
    else
    {
      this.acct.totAmount=this.acct.totAmount+this.formData.amount;
      this.formData.account=this.acct;
      this.transervice.addTrans(this.formData); /* add cuurent transaction */
      this.acctService.updateActBalance(this.acct);
    }

>>>>>>> Stashed changes
    this.modalService.dismissAll();
   
  }

  calCommission(amount?:number,comRate?:number)
  {
    if(isNumber(amount) && isNumber(comRate) && amount<0 && comRate>0)
    return Math.round(amount*comRate*0.01)
    else return 0;
  }

}


