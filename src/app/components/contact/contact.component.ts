import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhone, faPaperPlane, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
  template: `
    <section id="contact" class="section">
      <div class="container">
        <h2 class="section-title" @fadeIn>Contact Me</h2>
        
        <div class="contact-content">
          <div class="contact-info" @fadeInLeft>
            <h3>Let's Talk</h3>
            <p>
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              Feel free to contact me using the form here or get in touch through my social channels.
            </p>
            
            <div class="info-items">
              <div class="info-item">
                <div class="info-icon">
                  <fa-icon [icon]="faEnvelope"></fa-icon>
                </div>
                <div class="info-content">
                  <h4>Email</h4>
                  <p><a href="mailto:alex&#64;example.com">mohammedmohanad485&#64;gmail.com</a></p>
                </div>
              </div>
              
              <div class="info-item">
                <div class="info-icon">
                  <fa-icon [icon]="faMapMarkerAlt"></fa-icon>
                </div>
                <div class="info-content">
                  <h4>Location</h4>
                  <p>Maadi, Cairo</p>
                </div>
              </div>
              
              <div class="info-item">
                <div class="info-icon">
                  <fa-icon [icon]="faPhone"></fa-icon>
                </div>
                <div class="info-content">
                  <h4>Phone</h4>
                  <p><a href="tel:+11234567890">+20 1273908886</a></p>
                </div>
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
          </div>
          
          <div class="contact-form" @fadeInRight>
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  id="name"
                  formControlName="name"
                  [class.error]="isFieldInvalid('name')"
                >
                @if (isFieldInvalid('name')) {
                  <div class="error-message">Please enter your name</div>
                }
              </div>
              
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  formControlName="email"
                  [class.error]="isFieldInvalid('email')"
                >
                @if (isFieldInvalid('email')) {
                  <div class="error-message">Please enter a valid email address</div>
                }
              </div>
              
              <div class="form-group">
                <label for="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  formControlName="subject"
                  [class.error]="isFieldInvalid('subject')"
                >
                @if (isFieldInvalid('subject')) {
                  <div class="error-message">Please enter a subject</div>
                }
              </div>
              
              <div class="form-group">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  formControlName="message"
                  rows="6"
                  [class.error]="isFieldInvalid('message')"
                ></textarea>
                @if (isFieldInvalid('message')) {
                  <div class="error-message">Please enter your message</div>
                }
              </div>
              
              <button type="submit" class="btn btn-primary submit-btn" [disabled]="isSubmitting">
                @if (isSubmitting) {
                  <div class="spinner-small"></div>
                  Sending...
                } @else {
                  <fa-icon [icon]="faPaperPlane"></fa-icon>
                  Send Message
                }
              </button>
            </form>
            
            @if (formSubmitted) {
              <div class="success-message" @fadeIn>
                <fa-icon [icon]="faCheckCircle"></fa-icon>
                <p>Thank you! Your message has been sent successfully.</p>
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
    }
    
    .contact-info p {
      margin-bottom: var(--space-4);
      font-size: 1.125rem;
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
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--color-primary-100);
      color: var(--color-primary-500);
      border-radius: 12px;
      margin-right: var(--space-3);
      transition: all var(--transition-normal);
    }
    
    .dark-theme .info-icon {
      background-color: var(--color-primary-900);
      color: var(--color-primary-300);
    }
    
    .info-item:hover .info-icon {
      background-color: var(--color-primary-500);
      color: white;
      transform: translateY(-3px);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
    }
    
    .dark-theme .info-item:hover .info-icon {
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
    }
    
    .info-content h4 {
      font-size: 1.125rem;
      margin-bottom: var(--space-1);
      color: var(--text-primary);
    }
    
    .info-content p {
      margin-bottom: 0;
      font-size: 1rem;
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
    
    .dark-theme .social-link {
      background-color: var(--color-neutral-700);
    }
    
    .social-link:hover {
      background-color: var(--color-primary-500);
      color: white;
      transform: translateY(-3px);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    }
    
    .dark-theme .social-link:hover {
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
    }
    
    .contact-form {
      background-color: white;
      border-radius: 12px;
      padding: var(--space-4);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
    }
    
    .dark-theme .contact-form {
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
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
    
    input, textarea {
      width: 100%;
      padding: var(--space-3);
      border: 1px solid var(--border);
      border-radius: 8px;
      background-color: transparent;
      color: var(--text-primary);
      font-family: var(--font-body);
      font-size: 1rem;
      transition: all var(--transition-normal);
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
    
    .submit-btn:disabled {
      background-color: var(--color-neutral-400);
      transform: none;
      cursor: not-allowed;
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
      font-size: 1.25rem;
      font-weight: 500;
    }
    
    .spinner-small {
      width: 20px;
      height: 20px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      border-top-color: white;
      animation: spin 1s ease-in-out infinite;
    }
    
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    
    @media (min-width: 768px) {
      .contact-content {
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
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  formSubmitted = false;
  
  // Font Awesome icons
  faEnvelope = faEnvelope;
  faMapMarkerAlt = faMapMarkerAlt;
  faPhone = faPhone;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faWhatsapp = faWhatsapp;
  faPaperPlane = faPaperPlane;
  faCheckCircle = faCheckCircle;
  
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  
  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }
  
  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      // Simulate API call
      setTimeout(() => {
        this.isSubmitting = false;
        this.formSubmitted = true;
        this.contactForm.reset();
      }, 1500);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}