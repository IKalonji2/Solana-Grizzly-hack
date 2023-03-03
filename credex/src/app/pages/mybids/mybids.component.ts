import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mybids',
  templateUrl: './mybids.component.html',
  styleUrls: ['./mybids.component.css']
})
export class MybidsComponent {
  constructor(private location: Location) { }

  previousPage() {
    this.location.back();
  }
}
