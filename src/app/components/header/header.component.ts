import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { LanguageService } from '../../services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule, FontAwesomeModule],
  template: `
    <header [class.scrolled]="scrolled" class="dark-header">
      <div class="container">
        <nav>
          <div class="logo">
            <a href="#">
              <img src="assets/2025042401150776.png" alt="Logo">
              <span class="logo-text">Mohanad<span class="accent">Dev</span></span>
            </a>
          </div>
          
          <div class="nav-links" [class.active]="menuOpen">
            <a href="#about" (click)="closeMenu()">{{ 'nav.about' | translate }}</a>
            <a href="#skills" (click)="closeMenu()">{{ 'nav.skills' | translate }}</a>
            <a href="#projects" (click)="closeMenu()">{{ 'nav.projects' | translate }}</a>
            <a href="#experience" (click)="closeMenu()">{{ 'nav.experience' | translate }}</a>
            <a href="#education" (click)="closeMenu()">{{ 'nav.education' | translate }}</a>
            <a href="#contact" (click)="closeMenu()">{{ 'nav.contact' | translate }}</a>
            <div class="header-controls">
              <button class="theme-toggle" (click)="toggleTheme()" [attr.aria-label]="(isDarkTheme() ? 'Switch to light theme' : 'Switch to dark theme')">
                <fa-icon [icon]="isDarkTheme() ? faSun : faMoon"></fa-icon>
              </button>
              <button class="language-toggle" (click)="toggleLanguage()" [attr.aria-label]="('Toggle language')">
                {{ currentLanguage === 'en' ? 'AR' : 'EN' }}
              </button>
            </div>
          </div>
          
          <div class="header-controls-mobile">
            <button class="theme-toggle" (click)="toggleTheme()" [attr.aria-label]="(isDarkTheme() ? 'Switch to light theme' : 'Switch to dark theme')">
              <fa-icon [icon]="isDarkTheme() ? faSun : faMoon"></fa-icon>
            </button>
            <button class="language-toggle" (click)="toggleLanguage()" [attr.aria-label]="('Toggle language')">
              {{ currentLanguage === 'en' ? 'AR' : 'EN' }}
            </button>
            <button class="menu-toggle" (click)="toggleMenu()" [attr.aria-expanded]="menuOpen" aria-controls="primary-navigation">
            <span class="sr-only">Menu</span>
            <div class="hamburger" [class.active]="menuOpen">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          </div>
        </nav>
      </div>
    </header>
  `,
  styles: `
    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      padding: var(--space-3) 0;
      transition: all var(--transition-normal);
      background-color: transparent;
      color: var(--text-primary);
    }

    header.scrolled {
      background-color: var(--surface);
      box-shadow: 0 4px 20px var(--shadow-medium);
      padding: var(--space-2) 0;
    }
    
    .dark-theme header.scrolled {
      background-color: var(--color-neutral-800);
    }

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: var(--space-2);
    }

    [dir="rtl"] nav {
      justify-content: space-between;
    }

    .logo {
      flex-shrink: 0;
      min-width: 0;
    }

    .logo a {
      font-family: var(--font-heading);
      font-size: 1.75rem;
      font-weight: 700;
      color: var(--color-primary-300);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .dark-theme .logo a {
      color: var(--text-primary);
    }

    .logo img {
      width: 5rem;
      object-fit: contain;
      vertical-align: middle;
      flex-shrink: 0;
    }

    .logo-text {
      display: inline-block;
      margin: 0;
      line-height: 1;
    }

    .logo .accent {
      color: var(--color-accent-400);
    }

    .nav-links {
      display: flex;
      gap: var(--space-4);
      align-items: center;
      flex: 1;
      justify-content: flex-end;
      margin-left: var(--space-4);
    }

    .nav-links a {
      color: var(--color-primary-300);
      font-weight: 500;
      position: relative;
      text-decoration: none;
    }
    
    .dark-theme .nav-links a {
      color: var(--text-primary);
    }

    .nav-links a::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -4px;
      left: 0;
      background-color: var(--color-accent-400);
      transition: width var(--transition-normal);
    }

    .nav-links a:hover::after {
      width: 100%;
    }

    .header-controls {
      display: flex;
      align-items: center;
      gap: var(--space-2);
    }

    .header-controls-mobile {
      display: none;
      align-items: center;
      gap: var(--space-2);
      flex-shrink: 0;
    }

    .theme-toggle, .language-toggle {
      background: none;
      border: none;
      color: var(--color-primary-300);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--space-2);
      border-radius: 8px;
      transition: all var(--transition-normal);
      font-size: 0.875rem;
      font-weight: 500;
      min-width: 40px;
      height: 40px;
    }
    
    .dark-theme .theme-toggle, .dark-theme .language-toggle {
      color: var(--text-primary);
    }

    .theme-toggle:hover, .language-toggle:hover {
      background-color: var(--color-neutral-200);
      transform: translateY(-2px);
    }
    
    .dark-theme .theme-toggle:hover, .dark-theme .language-toggle:hover {
      background-color: var(--color-neutral-700);
    }

    .language-toggle {
      font-weight: 600;
    }

    .menu-toggle {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
    }

    .hamburger {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 24px;
      height: 18px;
    }

    .hamburger span {
      display: block;
      height: 2px;
      width: 100%;
      background-color: var(--color-primary-300);
      transition: all var(--transition-normal);
    }

    .dark-theme .hamburger span {
      background-color: var(--text-primary);
    }

    .hamburger.active span:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }

    .hamburger.active span:nth-child(2) {
      opacity: 0;
    }

    .hamburger.active span:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

    @media (max-width: 768px) {
      .header-controls {
        display: none;
      }

      .header-controls-mobile {
        display: flex;
        order: 2;
        margin-left: auto;
      }
      
      .logo {
        order: 1;
        flex: 0 0 auto;
      }
      
      nav {
        flex-wrap: nowrap;
        gap: var(--space-2);
      }
      
      .logo {
        max-width: calc(100% - 200px);
      }
      
      .logo a {
        font-size: 1.25rem;
      }
      
      .logo img {
        width: 3.5rem;
      }
      
      .logo-text {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .nav-links {
        flex: initial;
        position: fixed;
        top: 0;
        right: -100%;
        width: 250px;
        height: 100vh;
        background-color: var(--surface);
        flex-direction: column;
        padding: 80px var(--space-4) var(--space-4);
        gap: var(--space-4);
        transition: right var(--transition-normal);
        box-shadow: -5px 0 25px var(--shadow-heavy);
      }
      
      .dark-theme .nav-links {
        background-color: var(--color-neutral-800);
      }

      .nav-links.active {
        right: 0;
      }

      .nav-links .header-controls {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: var(--space-2);
      }

      .menu-toggle {
        display: block;
        z-index: 1001;
      }
    }

    [dir="rtl"] .nav-links {
      flex-direction: row-reverse;
      justify-content: flex-start;
      margin-left: 0;
      margin-right: var(--space-4);
    }

    @media (max-width: 768px) {
      [dir="rtl"] nav {
        flex-direction: row-reverse;
        justify-content: space-between;
      }

      [dir="rtl"] .logo {
        order: 3;
        margin-left: auto;
        margin-right: 0;
        flex-shrink: 0;
      }

      [dir="rtl"] .header-controls-mobile {
        order: 1;
        margin-right: 0;
        margin-left: 0;
        flex-direction: row-reverse;
        flex-shrink: 0;
      }

      [dir="rtl"] .nav-links {
        flex-direction: column;
        margin-right: 0;
        right: auto;
        left: -100%;
      }

      [dir="rtl"] .nav-links.active {
        left: 0;
        right: auto;
      }

      [dir="rtl"] .nav-links .header-controls {
        flex-direction: row-reverse;
      }
    }
  `
})
export class HeaderComponent {
  scrolled = false;
  menuOpen = false;
  currentLanguage = 'en';
  faSun = faSun;
  faMoon = faMoon;
  
  constructor(
    private themeService: ThemeService,
    private languageService: LanguageService
  ) {
    this.currentLanguage = this.languageService.getCurrentLanguage();
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  isDarkTheme(): boolean {
    return this.themeService.isDarkTheme();
  }
  
  @HostListener('window:scroll')
  onWindowScroll() {
    this.scrolled = window.scrollY > 20;
  }
  
  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleLanguage() {
    this.languageService.toggleLanguage();
  }
  
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    
    // Prevent scrolling when menu is open
    if (this.menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
  
  closeMenu() {
    this.menuOpen = false;
    document.body.style.overflow = '';
  }
}