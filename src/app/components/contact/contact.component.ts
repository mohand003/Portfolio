import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhone, faPaperPlane, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule, FontAwesomeModule, HttpClientModule],
  template: `
    <section id="contact" class="section">
      <div class="container">
        <h2 class="section-title" @fadeIn>{{ 'contact.title' | translate }}</h2>
        
        <div class="contact-content">
          <div class="contact-info" @fadeInLeft>
            <h3>{{ 'contact.subtitle' | translate }}</h3>
            <p>
              {{ 'contact.description' | translate }}
            </p>
            
            <div class="info-items">
              <div class="info-item">
                <div class="info-icon">
                  <fa-icon [icon]="faEnvelope"></fa-icon>
                </div>
                <div class="info-content">
                  <h4>{{ 'contact.email' | translate }}</h4>
                  <p><a href="mailto:eng.mohanadmohammedmm&#64;gmail.com">eng.mohanadmohammedmm&#64;gmail.com</a></p>
                </div>
              </div>
              
              <div class="info-item">
                <div class="info-icon">
                  <fa-icon [icon]="faMapMarkerAlt"></fa-icon>
                </div>
                <div class="info-content">
                  <h4>{{ 'contact.location' | translate }}</h4>
                  <p>Maadi, Cairo</p>
                </div>
              </div>
              
              <div class="info-item">
                <div class="info-icon">
                  <fa-icon [icon]="faPhone"></fa-icon>
                </div>
                <div class="info-content">
                  <h4>{{ 'contact.phone' | translate }}</h4>
                  <p><a href="tel:01273908886">01273908886</a></p>
                </div>
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
          </div>
          
          <div class="contact-form" @fadeInRight>
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
              <div class="form-group">
                <label for="name">{{ 'contact.name' | translate }}</label>
                <input
                  type="text"
                  id="name"
                  formControlName="Name"
                  [class.error]="isFieldInvalid('name')"
                >
                @if (isFieldInvalid('name')) {
                  <div class="error-message">{{ 'contact.nameRequired' | translate }}</div>
                }
              </div>
              
              <div class="form-group">
                <label for="email">{{ 'contact.email' | translate }}</label>
                <input
                  type="email"
                  id="email"
                  formControlName="Email"
                  [class.error]="isFieldInvalid('email')"
                >
                @if (isFieldInvalid('email')) {
                  <div class="error-message">{{ 'contact.emailRequired' | translate }}</div>
                }
              </div>
              
              <div class="form-group">
                <label for="subject">{{ 'contact.subject' | translate }}</label>
                <input
                  type="text"
                  id="subject"
                  formControlName="Subject"
                  [class.error]="isFieldInvalid('subject')"
                >
                @if (isFieldInvalid('subject')) {
                  <div class="error-message">{{ 'contact.subjectRequired' | translate }}</div>
                }
              </div>
              
              <div class="form-group">
                <label for="message">{{ 'contact.message' | translate }}</label>
                <textarea
                  id="message"
                  formControlName="Message"
                  rows="6"
                  [class.error]="isFieldInvalid('message')"
                ></textarea>
                @if (isFieldInvalid('message')) {
                  <div class="error-message">{{ 'contact.messageRequired' | translate }}</div>
                }
              </div>
              
              <button type="submit" class="btn btn-primary submit-btn" [disabled]="isSubmitting">
                @if (isSubmitting) {
                  <div class="spinner-small"></div>
                  {{ 'contact.sending' | translate }}
                } @else {
                  <fa-icon [icon]="faPaperPlane"></fa-icon>
                  {{ 'contact.sendMessage' | translate }}
                }
              </button>
            </form>
            
            @if (formSubmitted) {
              <div class="success-message" @fadeIn>
                <fa-icon [icon]="faCheckCircle"></fa-icon>
                <p>{{ 'contact.success' | translate }}</p>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .contact-content {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-5);
    }
    
    .contact-info h3 {
      margin-bottom: var(--space-3);
      color: var(--color-primary-500);
      font-size: clamp(1.25rem, 4vw, 1.75rem);
    }
    
    .dark-theme .contact-info h3 {
      color: var(--color-primary-400);
    }
    
    .contact-info p {
      margin-bottom: var(--space-4);
      font-size: clamp(1rem, 2vw, 1.125rem);
      line-height: 1.7;
      color: var(--text-secondary);
    }
    
    .info-items {
      margin-bottom: var(--space-4);
    }
    
    .info-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: var(--space-3);
    }
    
    .info-icon {
      width: clamp(40px, 8vw, 50px);
      height: clamp(40px, 8vw, 50px);
      min-width: 40px;
      min-height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--color-primary-100);
      color: var(--color-primary-500);
      border-radius: 12px;
      margin-right: var(--space-3);
      flex-shrink: 0;
      transition: all var(--transition-normal);
    }
    
    .dark-theme .info-icon {
      background-color: var(--color-primary-900);
      color: var(--color-primary-300);
    }
    
    .info-icon fa-icon {
      color: inherit;
    }
    
    .info-item:hover .info-icon {
      background-color: var(--color-primary-500);
      color: var(--color-neutral-50);
      transform: translateY(-3px);
      box-shadow: 0 6px 16px var(--shadow-medium);
    }
    
    .info-content h4 {
      font-size: clamp(1rem, 2vw, 1.125rem);
      margin-bottom: var(--space-1);
      color: var(--text-primary);
    }
    
    .info-content p {
      margin-bottom: 0;
      font-size: clamp(0.875rem, 1.5vw, 1rem);
      word-break: break-word;
    }
    
    .info-content a {
      color: var(--text-secondary);
      transition: color var(--transition-normal);
    }
    
    .info-content a:hover {
      color: var(--color-primary-500);
    }
    
    .social-links {
      display: flex;
      gap: var(--space-3);
    }
    
    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: clamp(45px, 8vw, 50px);
      height: clamp(45px, 8vw, 50px);
      min-width: 45px;
      min-height: 45px;
      border-radius: 12px;
      background-color: var(--color-primary-500);
      color: var(--text-primary);
      transition: all var(--transition-normal);
      flex-shrink: 0;
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
    
    .contact-form {
      background-color: var(--surface);
      border-radius: 12px;
      padding: clamp(var(--space-3), 4vw, var(--space-4));
      box-shadow: 0 8px 30px var(--shadow-light);
      position: relative;
    }
    
    .form-group {
      margin-bottom: var(--space-3);
    }
    
    label {
      display: block;
      margin-bottom: var(--space-1);
      font-weight: 500;
      color: var(--text-primary);
    }
    
    .dark-theme label {
      color: var(--text-primary);
    }
    
    input, textarea {
      width: 100%;
      padding: clamp(var(--space-2), 3vw, var(--space-3));
      border: 1px solid var(--border);
      border-radius: 8px;
      background-color: var(--surface);
      color: var(--text-primary);
      font-family: var(--font-body);
      font-size: clamp(0.875rem, 2vw, 1rem);
      transition: all var(--transition-normal);
      box-sizing: border-box;
    }
    
    input:focus, textarea:focus {
      outline: none;
      border-color: var(--color-primary-500);
      box-shadow: 0 0 0 3px var(--color-primary-100);
    }
    
    .dark-theme input:focus, .dark-theme textarea:focus {
      box-shadow: 0 0 0 3px var(--color-primary-900);
    }
    
    input.error, textarea.error {
      border-color: var(--color-error-500);
    }
    
    .error-message {
      color: var(--color-error-500);
      font-size: 0.875rem;
      margin-top: var(--space-1);
    }
    
    .submit-btn {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      padding: var(--space-3) var(--space-4);
      width: 100%;
      justify-content: center;
    }
    
    .submit-btn fa-icon {
      color: white !important;
    }
    
    .submit-btn:disabled {
      background-color: var(--color-neutral-400);
      color: var(--text-secondary);
      transform: none;
      cursor: not-allowed;
      opacity: 0.6;
    }
    
    .success-message {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: var(--surface);
      border-radius: 12px;
      padding: var(--space-4);
      text-align: center;
    }
    
    .success-message svg {
      width: 60px;
      height: 60px;
      color: var(--color-success-500);
      margin-bottom: var(--space-3);
    }
    
    .success-message p {
      font-size: clamp(1rem, 3vw, 1.25rem);
      font-weight: 500;
    }
    
    .success-message fa-icon {
      font-size: clamp(2.5rem, 8vw, 3.75rem);
    }
    
    .spinner-small {
      width: 20px;
      height: 20px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      border-top-color: var(--text-primary);
      animation: spin 1s ease-in-out infinite;
    }
    
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    
    @media (max-width: 576px) {
      .contact-content {
        gap: var(--space-3);
      }
      
      .contact-info h3 {
        font-size: clamp(1.25rem, 4vw, 1.5rem);
      }
      
      .info-item {
        flex-direction: column;
        align-items: flex-start;
        gap: var(--space-2);
      }
      
      .info-icon {
        margin-right: 0;
        margin-bottom: var(--space-1);
      }
      
      .social-links {
        flex-wrap: wrap;
        gap: var(--space-2);
      }
      
      .contact-form {
        padding: var(--space-3);
      }
      
      .form-group {
        margin-bottom: var(--space-2);
      }
      
      label {
        font-size: clamp(0.875rem, 2vw, 1rem);
      }
    }
    
    @media (min-width: 577px) and (max-width: 767px) {
      .contact-content {
        gap: var(--space-4);
      }
      
      .info-item {
        gap: var(--space-2);
      }
    }
    
    @media (min-width: 768px) {
      .contact-content {
        grid-template-columns: 1fr 1fr;
        gap: var(--space-5);
      }
    }
    
    @media (min-width: 992px) {
      .contact-content {
        gap: var(--space-6);
      }
    }
    
    [dir="rtl"] .info-icon {
      margin-right: 0;
      margin-left: var(--space-3);
    }
    
    @media (max-width: 576px) {
      [dir="rtl"] .info-icon {
        margin-left: 0;
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
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  formSubmitted = false;

  faEnvelope = faEnvelope;
  faMapMarkerAlt = faMapMarkerAlt;
  faPhone = faPhone;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faWhatsapp = faWhatsapp;
  faPaperPlane = faPaperPlane;
  faCheckCircle = faCheckCircle;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      Name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Subject: ['', Validators.required],
      Message: ['', Validators.required]
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;

      const formData = this.contactForm.value;

      this.http.post('https://mohanad-production-039b.up.railway.app/api/send', formData).subscribe({
        next: (response) => {
          this.isSubmitting = false;
          this.formSubmitted = true;
          this.contactForm.reset();
        },
        error: (error) => {
          this.isSubmitting = false;
          console.error('Error sending message:', error);
        }
      });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

}