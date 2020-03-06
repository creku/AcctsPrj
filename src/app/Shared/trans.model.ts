
interface parAccount {
    id?:string;
    actName?:string;
    totAmount?:number;
}

export class Trans{
    id?:string;
    dateTime?:number=Date.now();
    desc?:string;
    amount?:number;  
    account?:parAccount;
    prevBal?:number;
  }