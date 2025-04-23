import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
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
            <a href="#about" (click)="closeMenu()">About</a>
            <a href="#skills" (click)="closeMenu()">Skills</a>
            <a href="#projects" (click)="closeMenu()">Projects</a>
            <a href="#experience" (click)="closeMenu()">Experience</a>
            <a href="#contact" (click)="closeMenu()">Contact</a>
          </div>
          
          <button class="menu-toggle" (click)="toggleMenu()" [attr.aria-expanded]="menuOpen" aria-controls="primary-navigation">
            <span class="sr-only">Menu</span>
            <div class="hamburger" [class.active]="menuOpen">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
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
      color: var(--color-neutral-100);
    }

    header.scrolled {
      background-color: var(--color-neutral-900);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      padding: var(--space-2) 0;
    }

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo a {
      font-family: var(--font-heading);
      font-size: 1.75rem;
      font-weight: 700;
      color: var(--color-neutral-100);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .logo img {
      width: 5rem;
      object-fit: contain;
      vertical-align: middle;
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
    }

    .nav-links a {
      color: var(--color-neutral-100);
      font-weight: 500;
      position: relative;
      text-decoration: none;
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

    .theme-toggle {
      background: none;
      border: none;
      color: var(--color-neutral-100);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--space-1);
      border-radius: 50%;
      transition: background-color var(--transition-normal);
    }

    .theme-toggle:hover {
      background-color: var(--color-neutral-700);
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
      background-color: var(--color-neutral-100);
      transition: all var(--transition-normal);
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
      .nav-links {
        position: fixed;
        top: 0;
        right: -100%;
        width: 250px;
        height: 100vh;
        background-color: var(--color-neutral-900);
        flex-direction: column;
        padding: 80px var(--space-4) var(--space-4);
        gap: var(--space-4);
        transition: right var(--transition-normal);
        box-shadow: -5px 0 25px rgba(0, 0, 0, 0.3);
      }

      .nav-links.active {
        right: 0;
      }

      .menu-toggle {
        display: block;
        z-index: 1001;
      }
    }
  `
})
export class HeaderComponent {
  scrolled = false;
  menuOpen = false;
  
  constructor(private themeService: ThemeService) {}

  get isDarkTheme(): boolean {
    return true; // دائمًا يعود بقيمة صحيحة لإظهار أيقونة الوضع الداكن
  }
  
  @HostListener('window:scroll')
  onWindowScroll() {
    this.scrolled = window.scrollY > 20;
  }
  
  toggleTheme() {
    this.themeService.toggleTheme(); // الاحتفاظ بهذه الوظيفة للتبديل في بقية الصفحة
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