import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export  class ReuseFunctions {

    public IsPostive(value: number): boolean{
        if (value >= 0)
        {
            return true;
        }
            return false;
        }
    
}