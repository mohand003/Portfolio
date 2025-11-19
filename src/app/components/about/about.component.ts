import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslateModule, FontAwesomeModule],
  template: `
    <section id="about" class="section">
      <div class="container">
        <h2 class="section-title" @fadeIn>{{ 'about.title' | translate }}</h2>
        
        <div class="about-content">
          <div class="about-image" @fadeInLeft>
            <div class="image-wrapper">
              <img src="https://cdn.mos.cms.futurecdn.net/GaAJCwmwsGF7QAKirfUyG5.jpg" alt="">
            </div>
          </div>
          
          <div class="about-text" @fadeInRight>
            <h3>{{ 'about.subtitle' | translate }}</h3>
            <p>
              {{ 'about.description' | translate }}
            </p>
            
            <div class="personal-info">
              <div class="info-group">
                <span class="info-label">{{ 'about.name' | translate }}</span>
                <span class="info-value">Mohanad Mohammed Mostafa</span>
              </div>
              <div class="info-group">
                <span class="info-label">{{ 'about.email' | translate }}</span>
                <span class="info-value">eng.mohanadmohammedmm&#64;gmail.com</span>
              </div>
              <div class="info-group">
                <span class="info-label">{{ 'about.location' | translate }}</span>
                <span class="info-value">Maadi, Cairo</span>
              </div>
              <div class="info-group">
                <span class="info-label">{{ 'about.availability' | translate }}</span>
                <span class="info-value available">{{ 'about.freelance' | translate }}</span>
                <span class="info-value available">{{ 'about.fullTime' | translate }}</span>
              </div>
            </div>
            
            <div class="social-links">
              <a href="https://github.com/mohand003" target="_blank" class="social-link" aria-label="GitHub">
                <fa-icon [icon]="faGithub" [size]="'lg'"></fa-icon>
              </a>
              <a href="https://www.linkedin.com/in/mohanad-mohammed-7622311b8/" target="_blank" class="social-link" aria-label="LinkedIn">
                <fa-icon [icon]="faLinkedin" [size]="'lg'"></fa-icon>
              </a>
              <a href="https://wa.me/qr/SVSAXEPZ3UMKH1" target="_blank" class="social-link" aria-label="WhatsApp">
                <fa-icon [icon]="faWhatsapp" [size]="'lg'"></fa-icon>
              </a>
            </div>
            
              <a [href]="'assets/Mohanad_CV.pdf'" class="btn btn-primary">
                <fa-icon [icon]="faDownload"></fa-icon>
                  {{ 'about.downloadResume' | translate }}
              </a>


          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .about-content {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-5);
      width: 100%;
      overflow-x: hidden;
    }
    
    .about-image {
      position: relative;
      max-width: 100%;
    }
    
    .image-wrapper {
      width: 100%;
      height: 0;
      padding-top: 100%;
      position: relative;
      overflow: hidden;
      border-radius: 12px;
      box-shadow: 0 6px 24px rgba(0, 0, 0, 0.1);
    }
    
    .dark-theme .image-wrapper {
      box-shadow: 0 6px 24px rgba(0, 0, 0, 0.25);
    }
    
    .image-wrapper::before {
      content: '';
      position: absolute;
      top: -10px;
      left: -10px;
      right: -10px;
      bottom: -10px;
      background: linear-gradient(45deg, var(--color-primary-500), var(--color-accent-400));
      z-index: -1;
      border-radius: 16px;
      filter: blur(15px);
      opacity: 0.3;
    }
    
    .image-wrapper img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform var(--transition-normal);
    }
    
    .image-wrapper:hover img {
      transform: scale(1.05);
    }
    
    .about-text {
      width: 100%;
      overflow-wrap: break-word;
      word-wrap: break-word;
      hyphens: auto;
    }
    
    .about-text h3 {
      margin-bottom: var(--space-3);
      color: var(--color-primary-500);
      font-size: clamp(1.25rem, 5vw, 1.5rem);
    }
    
    .dark-theme .about-text h3 {
      color: var(--color-primary-400);
    }
    
    .about-text p {
      margin-bottom: var(--space-3);
      font-size: 1.125rem;
      line-height: 1.7;
      color: var(--text-secondary);
    }
    
    .personal-info {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-2);
      margin: var(--space-4) 0;
      width: 100%;
    }
    
    .info-group {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      width: 100%;
    }
    
    .info-label {
      font-weight: 600;
      min-width: 100px;
      color: var(--text-primary);
    }
    
    .info-value {
      color: var(--text-secondary);
      word-break: break-word;
    }
    
    .info-value.available {
      color: var(--color-success-500);
      display: flex;
      margin-right: 5px;
      align-items: center;
    }
    
    .info-value.available::before {
      content: '';
      display: inline-block;
      width: 10px;
      height: 10px;
      background-color: var(--color-success-500);
      border-radius: 50%;
      margin-right: 8px;
      flex-shrink: 0;
    }
    
    .social-links {
      display: flex;
      gap: var(--space-3);
      margin-bottom: var(--space-4);
      flex-wrap: wrap;
    }
    
    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      border-radius: 12px;
      background-color: var(--color-primary-500);
      color: var(--text-primary);
      transition: all var(--transition-normal);
    }
    
    .dark-theme .social-link {
      background: linear-gradient(135deg, var(--color-primary-600), var(--color-primary-800));
      color: white;
      border: 1px solid var(--color-primary-500);
      box-shadow: 0 2px 8px rgba(10, 36, 99, 0.3);
    }
    
    .social-link fa-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      color: white !important;
      font-size: 1.5rem;
    }
    
    .social-link fa-icon svg {
      fill: white !important;
      width: 1.5rem !important;
      height: 1.5rem !important;
    }
    
    .social-link:hover {
      background-color: var(--color-primary-500);
      color: white;
      transform: translateY(-3px);
      box-shadow: 0 6px 16px var(--shadow-medium);
    }
    
    .dark-theme .social-link:hover {
      background: linear-gradient(135deg, var(--color-primary-500), var(--color-primary-700));
      box-shadow: 0 6px 20px rgba(10, 36, 99, 0.5);
    }
    
    .btn {
      display: inline-flex;
      align-items: center;
      max-width: 100%;
      word-break: break-word;
      white-space: normal;
    }
    
    .btn svg, .btn fa-icon {
      margin-right: var(--space-1);
      flex-shrink: 0;
      color: inherit;
    }
    
    .btn-primary fa-icon {
      color: white !important;
    }
    
    @media (max-width: 480px) {
      .info-group {
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: var(--space-2);
      }
      
      .info-label {
        margin-bottom: 4px;
      }
      
      .btn {
        width: 100%;
        justify-content: center;
      }
    }
    
    @media (min-width: 768px) {
      .about-content {
        grid-template-columns: 1fr 1.5fr;
      }
      
      .personal-info {
        grid-template-columns: 1fr 1fr;
      }
    }
  `,
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('800ms ease', style({ opacity: 1 })),
      ]),
    ]),
    trigger('fadeInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-30px)' }),
        animate('800ms ease', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ]),
    trigger('fadeInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(30px)' }),
        animate('800ms ease', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ]),
  ],
})
export class AboutComponent {
  // Font Awesome icons
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faWhatsapp = faWhatsapp;
  faDownload = faDownload;
}