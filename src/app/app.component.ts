import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { LocationService } from './core/providers/location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'duweather';
  location = 'Almería';
  currentTheme = '';

  place: FormControl;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    private locationService: LocationService,
    private fb: FormBuilder
  ) {
    this.place = this.fb.control(null, Validators.required);
  }

  getCurrentPosition() {
    this.locationService.getCurrentPosition().subscribe(res => {
      this.location = res.city;
      this.changePlace(this.location);
    });
  }

  changeTheme(theme?: string): void {
    if (this.currentTheme) {
      this.document.body.classList.remove(this.currentTheme);
    }
    if (theme !== 'dark-theme') {
      this.document.body.classList.add(theme);
    }
    this.currentTheme = theme;
  }

  changePlace(newPlace?: string): void {
    this.router.navigate(['.'], {
      queryParams: { place: newPlace ? newPlace : this.place.value },
      queryParamsHandling: 'merge'
    });
  }
}
