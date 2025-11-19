import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage = new BehaviorSubject<string>('en');
  currentLanguage$ = this.currentLanguage.asObservable();

  constructor() {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ar')) {
      this.setLanguage(savedLanguage);
    } else {
      // Default to browser language or English
      const browserLang = navigator.language.split('-')[0];
      this.setLanguage(browserLang === 'ar' ? 'ar' : 'en');
    }
  }

  getCurrentLanguage(): string {
    return this.currentLanguage.value;
  }

  setLanguage(lang: 'en' | 'ar'): void {
    this.currentLanguage.next(lang);
    localStorage.setItem('language', lang);
    
    // Update document direction and language
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
  }

  toggleLanguage(): void {
    const newLang = this.currentLanguage.value === 'en' ? 'ar' : 'en';
    this.setLanguage(newLang);
  }

  isRTL(): boolean {
    return this.currentLanguage.value === 'ar';
  }
}

