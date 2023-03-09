import { Component, Input } from '@angular/core';
import { Loan } from 'src/app/models/models';
import { ContractService } from 'src/app/services/contract/contract.service';
import { WalletService } from 'src/app/services/wallet/wallet.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent {
  @Input() loan?: Loan;

  hasBids: boolean = false;

  constructor(private contractService: ContractService, private walletService: WalletService) { 
    this.hasBid();
  }

  createBid = async (rate: number) => {
    this.contractService.createBid();
  }

  cancelBid = async () => {
    this.contractService.cancelBid()
  }

  hasBid = async () => {
    await this.walletService.getPublicKey().then((publicKey) => {
      if(this.loan?.bids) {
        this.hasBids = this.loan.bids.findIndex(bid => bid.address == publicKey) != -1;
      }
    });
  }

  viewOnExplorer() {
    if(this.loan && this.loan.explorerUrl) {
      window.open(this.loan.explorerUrl, '_blank')?.focus();
    }
  }
}
