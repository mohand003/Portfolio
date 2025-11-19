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
    
    let isDark = false;
    if (savedTheme) {
      isDark = savedTheme === 'dark';
    } else {
      isDark = prefersDark;
    }
    
    this.darkTheme.next(isDark);
    this.applyTheme(isDark);
  }

  isDarkTheme(): boolean {
    return this.darkTheme.value;
  }

  toggleTheme(): void {
    const newTheme = !this.darkTheme.value;
    this.darkTheme.next(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    this.applyTheme(newTheme);
  }

  private applyTheme(isDark: boolean): void {
    const htmlElement = document.documentElement;
    if (isDark) {
      htmlElement.classList.remove('light-theme');
      htmlElement.classList.add('dark-theme');
    } else {
      htmlElement.classList.remove('dark-theme');
      htmlElement.classList.add('light-theme');
    }
  }
}