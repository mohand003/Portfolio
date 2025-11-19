import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            <a href="#">
              <img src="assets/2025042401150776.png" alt="Logo">
            </a>
            <p>{{ 'footer.description' | translate }}</p>
          </div>
          
          <div class="footer-links">
            <div class="footer-nav">
              <h3>{{ 'footer.navigation' | translate }}</h3>
              <ul>
                <li><a href="#home">{{ 'footer.home' | translate }}</a></li>
                <li><a href="#about">{{ 'footer.about' | translate }}</a></li>
                <li><a href="#skills">{{ 'footer.skills' | translate }}</a></li>
                <li><a href="#projects">{{ 'footer.projects' | translate }}</a></li>
                <li><a href="#experience">{{ 'footer.experience' | translate }}</a></li>
                <li><a href="#education">{{ 'footer.education' | translate }}</a></li>
                <li><a href="#contact">{{ 'footer.contact' | translate }}</a></li>
              </ul>
            </div>
            
            <div class="footer-social">
              <h3>{{ 'footer.social' | translate }}</h3>
              <ul>
                <li><a href="https://github.com/mohand003" target="_blank">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/mohanad-mohammed-7622311b8/" target="_blank">LinkedIn</a></li>
                <li><a href="https://wa.me/qr/SVSAXEPZ3UMKH1" target="_blank">WhatsApp</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; {{ currentYear }} Mohanad Mohammed Mostafa. {{ 'footer.rights' | translate }}</p>
          <p>
            <button class="back-to-top" (click)="scrollToTop()" aria-label="Back to top">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </button>
          </p>
        </div>
      </div>
    </footer>
  `,
  styles: `
    .footer {
      background-color: var(--color-primary-500);
      color: white;
      padding: var(--space-6) 0 var(--space-3);
      margin-top: var(--space-6);
    }
    
    .footer-content {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-4);
      margin-bottom: var(--space-5);
    }
    
    .footer-logo a {
      font-family: var(--font-heading);
      font-size: 1.75rem;
      font-weight: 700;
      color: white;
      text-decoration: none;
    }
    
    .footer-logo span {
      color: var(--color-accent-400);
    }
    
    .footer-logo p {
      margin-top: var(--space-2);
      opacity: 0.8;
    }

    .footer-logo img {
      width: 8rem;
      object-fit: contain;
      vertical-align: middle;
    }
    
    .footer-links {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-4);
    }
    
    .footer-nav h3, .footer-social h3 {
      margin-bottom: var(--space-3);
      color: white;
      font-size: 1.25rem;
    }
    
    .footer-nav ul, .footer-social ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .footer-nav li, .footer-social li {
      margin-bottom: var(--space-2);
    }
    
    .footer-nav a, .footer-social a {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      transition: all var(--transition-normal);
      display: inline-block;
    }
    
    .footer-nav a:hover, .footer-social a:hover {
      color: white;
      transform: translateX(5px);
    }
    
    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: var(--space-3);
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.875rem;
      color: rgba(255, 255, 255, 0.8);
    }
    
    .back-to-top {
      background-color: rgba(255, 255, 255, 0.1);
      border: none;
      color: white;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all var(--transition-normal);
    }
    
    .back-to-top:hover {
      background-color: rgba(255, 255, 255, 0.2);
      transform: translateY(-3px);
    }
    
    @media (min-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr 1fr;
      }
    }

    @media (max-width: 576px) {
      .footer-links {
        grid-template-columns: 1fr;
        gap: var(--space-3);
      }

      .footer-bottom {
        flex-direction: column;
        gap: var(--space-2);
        text-align: center;
      }
    }
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}