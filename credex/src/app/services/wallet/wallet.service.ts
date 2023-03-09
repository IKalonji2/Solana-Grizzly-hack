import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor() { }

  getProvider = () => {
    if ('phantom' in window) {
      const provider = window.phantom?.solana;
      if (provider?.isPhantom) {
        return provider;
      }
    }
    //window.open('https://phantom.app/', '_blank');
  };

  getPublicKey = async () => {
    let provider = this.getProvider();
    if(provider) {
      const reponse = await provider.connect();
      return reponse.publicKey.toString();
    }
  }
}
