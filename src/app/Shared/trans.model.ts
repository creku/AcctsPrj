
class parAccount {
    id?:string;
    actName?:string;
    totAmount?:number;
    comsRate?:number=0;
}

export class Trans{
    id?:string;
    dateTime?:number=Date.now();
    amount?:number;
    desc?:string;
    account?:parAccount;
<<<<<<< Updated upstream
=======
    prevBal?:number;
    chkComEnable?:boolean;
>>>>>>> Stashed changes
  }