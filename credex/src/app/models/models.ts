import { v4 } from 'uuid';

interface LoanRequest {
    amount: number;
    mint: string;
    verified: boolean;
    message: string;
    dueDate: Date;
  }

class Bid {
    uuid: string = v4();
    address: string = '';
    amount: number = 0;
    rate: number = 0;

    accepted: boolean = false;
    rejected: boolean = false;
    cancelled: boolean = false;

    constructor(fields: { uuid: string, address: string, amount: number, rate: number, accepted:boolean, rejected: boolean, cancelled: boolean } | undefined = undefined) {
        if(fields) {
            this.uuid = fields.uuid ? fields.uuid : v4();
            this.address = fields.address;
            this.amount = fields.amount;
            this.rate = fields.rate;

            this.accepted = fields.accepted;
            this.rejected = fields.rejected;
            this.cancelled = fields.cancelled;
        }
    }
}

class Loan {
    uuid: string = v4();
    address: string = '';
    amount: number = 0;
    mint: string = '';
    imageUrl: string = '';
    explorerUrl: string = '';
    value: number = 0;
    bids: Bid[] = [];

    accepted: boolean = false;
    repaid: boolean = false;
    cancelled: boolean = false;

    constructor(fields: { uuid: string, address: string, amount: number, mint: string, imageUrl: string, explorerUrl: string, value: number, bids: Bid[], accepted:boolean, repaid: boolean, cancelled: boolean } | undefined = undefined) {
        if(fields) {
            this.uuid = fields.uuid ? fields.uuid : v4();
            this.address = fields.address;
            this.amount = fields.amount;
            this.mint = fields.mint;
            this.imageUrl = fields.imageUrl;
            this.explorerUrl = fields.explorerUrl;
            this.value = fields.value;
            this.bids = fields.bids;
    
            this.accepted = fields.accepted;
            this.repaid = fields.repaid;
            this.cancelled = fields.cancelled;
        }
    }
}

export { Loan, Bid, LoanRequest }