import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggle: boolean = true;
  title: string;

  constructor(
    
  ) {
    this.title = "Priya's Utility Application";
  }

  titleClicked() {
    this.toggle = !this.toggle;
  }
}
