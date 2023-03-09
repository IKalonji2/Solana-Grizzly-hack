import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LoanRequest } from 'src/app/models/models';
import { NftService } from 'src/app/services/nft/nft.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  loans = ['','','','',''];
  display = false;

  loanRequest: LoanRequest;

  items!: MenuItem[];
  step: number = 0;
  steps: number = 2;

  constructor(private nftService: NftService) {
    this.loanRequest = {
      amount: 0,
      mint: '',
      verified: false,
      message: '',
      dueDate: (new Date())
    }
  }

  ngOnInit() {
    this.items = [
        {label: 'Details'},
        {label: 'Verify'},
        {label: 'Confirm'}
    ];
  }

  requestLoan = () => {

  }

  verifyNFT = async () => {
    this.loanRequest.verified = false;
    if(this.loanRequest.amount <= 0) {
      this.loanRequest.message = 'Loan amount must be greater than 0.';
    } else if(this.loanRequest.mint.length == 0) {
      this.loanRequest.message = 'Mint (NFT address cannot be empty.';
    } else {
      await this.nftService.verify(this.loanRequest.mint).then((data) => {
        if(data) {
          this.loanRequest.verified = true;
          this.loanRequest.message = '';
        } else {
          this.loanRequest.message = 'NFT verification failed.';
        }
      }).catch((e) => {
        this.loanRequest.message = 'An error occurred, could not verify nft.';
      });
    }
  }

  next = () => {
    if(this.step < this.steps) {
      this.step++;
    }
  }

  back = () => {
    if(this.step > 0) {
      this.loanRequest.message = '';
      this.loanRequest.verified = false;
      this.step--;
    }
  }
}
