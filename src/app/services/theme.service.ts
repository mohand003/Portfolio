import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkTheme = new BehaviorSubject<boolean>(false);
  darkTheme$ = this.darkTheme.asObservable();

  constructor() {
    // Check if user prefers dark theme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      this.darkTheme.next(savedTheme === 'dark');
    } else {
      this.darkTheme.next(prefersDark);
    }
  }

  isDarkTheme(): boolean {
    return this.darkTheme.value;
  }

  toggleTheme(): void {
    this.darkTheme.next(!this.darkTheme.value);
    localStorage.setItem('theme', this.darkTheme.value ? 'dark' : 'light');
  }
}