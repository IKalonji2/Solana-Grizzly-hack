import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-peerbids',
  templateUrl: './peerbids.component.html',
  styleUrls: ['./peerbids.component.css']
})
export class PeerbidsComponent {
  constructor(private location: Location) { }

  previousPage() {
    this.location.back();
  }
}
