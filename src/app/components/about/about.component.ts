import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <section id="about" class="section">
      <div class="container">
        <h2 class="section-title" @fadeIn>About Me</h2>
        
        <div class="about-content">
          <div class="about-image" @fadeInLeft>
            <div class="image-wrapper">
              <img src="https://cdn.mos.cms.futurecdn.net/GaAJCwmwsGF7QAKirfUyG5.jpg" alt="">
            </div>
          </div>
          
          <div class="about-text" @fadeInRight>
            <h3>Front-End Developer (Angular)</h3>
            <p>
              Front-end developer with strong experience in building responsive, user-friendly web apps using Angular, TypeScript, SCSS, and modern UI frameworks. Passionate about clean architecture and blending functionality with design. Worked on AI-driven UI tools and e-commerce platforms, showcasing both technical skills and creativity.
            </p>
            <p>
              I believe that great code is as much about function as it is about form. Clean architecture, 
              maintainable patterns, and meticulous attention to detail are the hallmarks of my work.
            </p>
            
            <div class="personal-info">
              <div class="info-group">
                <span class="info-label">Name:</span>
                <span class="info-value">Mohanad Mohammed</span>
              </div>
              <div class="info-group">
                <span class="info-label">Email:</span>
                <span class="info-value">mohammedmohanad485&#64;gmail.com</span>
              </div>
              <div class="info-group">
                <span class="info-label">Location:</span>
                <span class="info-value">Maadi, Cairo</span>
              </div>
              <div class="info-group">
                <span class="info-label">Availability:</span>
                <span class="info-value available">Freelance</span>
                <span class="info-value available">Full Time/Part Time</span>
              </div>
            </div>
            
            <div class="social-links">
              <a href="https://github.com/mohand003" target="_blank" class="social-link" aria-label="GitHub">
                <fa-icon [icon]="faGithub"></fa-icon>
              </a>
              <a href="https://www.linkedin.com/in/mohanad-mohammed-7622311b8/" target="_blank" class="social-link" aria-label="LinkedIn">
                <fa-icon [icon]="faLinkedin"></fa-icon>
              </a>
              <a href="https://wa.me/qr/SVSAXEPZ3UMKH1" target="_blank" class="social-link" aria-label="WhatsApp">
                <fa-icon [icon]="faWhatsapp"></fa-icon>
              </a>
            </div>
            
            <a href="assets/mohanad-mohammed CV.pdf" download="Mohanad_Mohammed_CV.pdf" class="btn btn-primary">
              <fa-icon [icon]="faDownload"></fa-icon>
              Download Resume
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
    }
    
    .about-image {
      position: relative;
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
    
    .about-text h3 {
      margin-bottom: var(--space-3);
      color: var(--color-primary-500);
    }
    
    .about-text p {
      margin-bottom: var(--space-3);
      font-size: 1.125rem;
      line-height: 1.7;
    }
    
    .personal-info {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-2);
      margin: var(--space-4) 0;
    }
    
    .info-group {
      display: flex;
      align-items: center;
    }
    
    .info-label {
      font-weight: 600;
      min-width: 100px;
    }
    
    .info-value {
      color: var(--text-secondary);
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
    }
    
    .social-links {
      display: flex;
      gap: var(--space-3);
      margin-bottom: var(--space-4);
    }
    
    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 42px;
      height: 42px;
      border-radius: 12px;
      background-color: var(--color-neutral-100);
      color: var(--text-primary);
      transition: all var(--transition-normal);
    }
    
    .social-link:hover {
      background-color: var(--color-primary-500);
      color: white;
      transform: translateY(-3px);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    }
    
    .btn svg {
      margin-right: var(--space-1);
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