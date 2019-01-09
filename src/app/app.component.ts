import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'duweather';
  currentTheme = '';

  constructor(@Inject(DOCUMENT) private document: Document) { }

  changeTheme(theme?: string): void {
    if (this.currentTheme) {
      this.document.body.classList.remove(this.currentTheme);
    }
    if (theme !== 'dark-theme') {
      this.document.body.classList.add(theme);
    }
    this.currentTheme = theme;
  }
}
