import { Injectable } from '@angular/core';
import { Loan, Bid } from 'src/app/models/models';

const BidSchema = new Map([
  [ 
    Bid, {
      kind: 'struct', 
      fields: [
        ['uuid', 'string'],
        ['address', 'string'],
        ['owner', 'string'],
        ['amount', 'u32'],
        ['rate', 'u8'],
        ['accepted', 'bool'],
        ['rejected', 'bool'],
        ['cancelled', 'bool'],
      ]
    }
  ]
]);

const LoanSchema = new Map([
  [ 
    Loan, {
      kind: 'struct', 
      fields: [
        ['uuid', 'string'],
        ['address', 'string'],
        ['amount', 'u32'],
        ['mint', 'string'],
        ['bids', 'any'],
        ['accepted', 'bool'],
        ['repaid', 'bool'],
        ['cancelled', 'bool'],
      ]
    }
  ]
]);

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor() { }

  getLoans = async (): Promise<Loan[]> => {
    return [];
  }

  requestLoan = async (): Promise<boolean> => {
    let reponse = this.transferToken();
    return true;
  }

  cancelLoan = async (): Promise<boolean> => {
    let reponse = this.transferToken();
    return true;
  }

  repayLoan = async (): Promise<boolean> => {
    let reponse1 = this.transferToken();
    let reponse2 = this.transferLamports();
    return true;
  }

  createBid = async (): Promise<boolean> => {
    let reponse = this.transferLamports();
    return true;
  }

  acceptBid = async (): Promise<boolean> => {
    let reponse = this.transferLamports();
    return true;
  }

  rejectBid = async (): Promise<boolean> => {
    let reponse = this.transferLamports();
    return true;
  }

  cancelBid = async (): Promise<boolean> => {
    let reponse = this.transferLamports();
    return true;
  }

  private transferToken = async (): Promise<boolean> => {
    return true;
  }

  private transferLamports = async (): Promise<boolean> => {
    return true;
  }
  
}

