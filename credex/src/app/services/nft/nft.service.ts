import { Injectable } from '@angular/core';
import { Connection, PublicKey } from '@solana/web3.js';
import { WalletService } from '../wallet/wallet.service';

@Injectable({
  providedIn: 'root'
})
export class NftService {

  connection: Connection;

  constructor(private walletService: WalletService) { 
    this.connection = new Connection("https://api.devnet.solana.com");
  }

  transfer = async (mint: string, from: string, to: string) => {

  }

  verify = async (mint: string) => {
    console.log(this.getMetadata(mint));
    return true;
  }

  getMetadata = async (mint: string) => {
    
  }
}
