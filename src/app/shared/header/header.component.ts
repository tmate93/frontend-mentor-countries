import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  darkMode: boolean = false;

  constructor(@Inject(DOCUMENT) private document: any) {}
  
  darkModeSwitch(): void {
    this.darkMode = !this.darkMode
    this.document.body.classList.toggle("dark-mode");
  }

}
