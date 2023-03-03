import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent {
  constructor(private location: Location) { }

  previousPage() {
    this.location.back();
  }
}
