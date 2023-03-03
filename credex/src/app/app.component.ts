import { Component } from '@angular/core';
import { WalletService } from './services/wallet/wallet.service';
import { Clipboard } from '@angular/cdk/clipboard';

interface Chain {
  name: string;
  url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Credex';
  year = (new Date()).getFullYear();

  address: string = '';

  connected: boolean = false;
  provider: any;
  

  constructor(private walletService: WalletService, protected clipboard: Clipboard) { }

  connectWallet = async () => {
    this.provider = this.walletService.getProvider();
    try {
      const response = await this.provider.connect();
      this.address = response.publicKey.toString();
      this.connected = true;
      
      this.provider.on('connect', (publicKey: any) => {
        this.address = publicKey.toString();
        this.connected = true;
      });
  
      this.provider.on('disconnect', () => {
        this.address = '';
        this.connected = false;
      });
  
      this.provider.on('accountChanged', (publicKey: any) => {
        if(publicKey) {
          this.address = publicKey.toString();
          this.connected = true;
        } else {
          this.address = '';
          this.connected = false;
          this.connectWallet();
        }
      });
    } catch(error) {
      console.log(error);
    }
  }

  disconnect = () => {
    this.provider.disconnect();
  }
}
