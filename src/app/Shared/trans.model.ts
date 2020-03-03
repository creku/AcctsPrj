
interface parAccount {
    id?:string;
    actName?:string;
    totAmount?:number;
}

export class Trans{
    id?:string;
    dateTime?:number=Date.now();
    amount?:number;
    desc?:string;
    account?:parAccount;
  }