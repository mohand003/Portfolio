import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <section class="hero dark-hero" id="home">
      <div class="hero-background"></div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-text" @fadeInUp>
            <p class="intro-text">{{ 'hero.intro' | translate }}</p>
            <h1 class="name">{{ 'hero.name' | translate }}</h1>
            <h2 class="title">{{ 'hero.title' | translate }}</h2>
            <p class="description">
              {{ 'hero.description' | translate }}
            </p>
            <div class="cta-buttons">
              <a href="#projects" class="btn btn-primary">{{ 'hero.viewWork' | translate }}</a>
              <a href="#contact" class="btn btn-outline">{{ 'hero.contactMe' | translate }}</a>
            </div>
          </div>
          
          <div class="hero-image" @fadeInRight>
            <div class="image-container">
              <div class="background-shape"></div>
              <div class="profile-image"></div>
              <div class="tech-icon html" title="HTML5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/>
                </svg>
              </div>
              <div class="tech-icon css" title="CSS3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/>
                </svg>
              </div>
              <div class="tech-icon js" title="JavaScript">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/>
                </svg>
              </div>
              <div class="tech-icon angular" title="Angular">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div class="scroll-indicator" @fadeIn>
          <div class="mouse">
            <div class="wheel"></div>
          </div>
          <div class="arrow">
            <span></span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .hero {
      height: 100vh;
      display: flex;
      align-items: center;
      padding-top: 80px;
      position: relative;
      overflow: hidden;
      color: var(--color-neutral-100);
    }
    
    .hero-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url('https://res.cloudinary.com/df9rcxvpg/image/upload/v1763509881/profile-bg_mxy3sj.png');
      background-size: cover;
      background-position: center;
      filter: blur(8px) brightness(0.4);
      z-index: -2;
      transform: scale(1.1);
    }
    
    .hero-background::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4));
      z-index: -1;
    }
    
    .hero-content {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: var(--space-5);
    }
    
    .hero-text {
      max-width: 600px;
    }
    
    .intro-text {
      font-size: 1.25rem;
      color: var(--color-accent-400);
      font-weight: 500;
      margin-bottom: var(--space-1);
    }
    
    .name {
      font-size: clamp(2rem, 6vw, 4rem);
      line-height: 1.1;
      margin-bottom: var(--space-1);
      background: linear-gradient(90deg, var(--color-primary-500), var(--color-accent-400));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      display: inline-block;
    }
    
    .title {
      font-size: clamp(1.25rem, 3vw, 2rem);
      margin-bottom: var(--space-3);
      color: var(--color-neutral-300);
    }
    
    .description {
      font-size: clamp(1rem, 2vw, 1.25rem);
      line-height: 1.6;
      margin-bottom: var(--space-4);
      color: var(--color-neutral-300);
    }
    
    .cta-buttons {
      display: flex;
      gap: var(--space-3);
      flex-wrap: wrap;
    }
    
    .hero-image {
      position: relative;
    }
    
    .image-container {
      position: relative;
      width: 300px;
      height: 300px;
    }
    
    .background-shape {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: var(--color-primary-700);
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
      animation: morphing 10s infinite;
      z-index: -1;
    }
    
    .profile-image {
      width: 100%;
      height: 100%;
      background-image: url('https://res.cloudinary.com/df9rcxvpg/image/upload/v1763509773/Portfolio/Background.png');
      background-size: cover;
      background-position: center;
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
      animation: morphing 15s infinite alternate;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }

    .tech-icon {
      position: absolute;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      animation: float 3s ease-in-out infinite;
    }
    
    .tech-icon svg {
      width: 24px;
      height: 24px;
    }
    
    .tech-icon.html {
      background-color: #E34F26;
      top: 20%;
      left: -10%;
      animation-delay: 0s;
    }
    
    .tech-icon.html svg {
      fill: white;
    }
    
    .tech-icon.css {
      background-color: #1572B6;
      top: 70%;
      left: 0%;
      animation-delay: 0.2s;
    }
    
    .tech-icon.css svg {
      fill: white;
    }
    
    .tech-icon.js {
      background-color: #F7DF1E;
      top: 10%;
      right: 0%;
      animation-delay: 0.4s;
    }
    
    .tech-icon.angular {
      background-color: #DD0031;
      bottom: 20%;
      right: -10%;
      animation-delay: 0.6s;
    }
    
    .tech-icon.angular svg {
      fill: white;
    }
    
    .scroll-indicator {
      position: absolute;
      bottom: var(--space-4);
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-2);
    }
    
    .mouse {
      width: 24px;
      height: 40px;
      border: 2px solid var(--color-neutral-300);
      border-radius: 12px;
      position: relative;
    }
    
    .wheel {
      width: 4px;
      height: 8px;
      background-color: var(--color-neutral-300);
      border-radius: 2px;
      position: absolute;
      top: 8px;
      left: 50%;
      transform: translateX(-50%);
      animation: scroll 2s infinite;
    }
    
    .arrow {
      margin-top: var(--space-1);
    }
    
    .arrow span {
      display: block;
      width: 10px;
      height: 10px;
      border-right: 2px solid var(--color-neutral-300);
      border-bottom: 2px solid var(--color-neutral-300);
      transform: rotate(45deg);
      animation: arrow 2s infinite;
    }
    
    @keyframes scroll {
      0% {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
      }
      100% {
        opacity: 0;
        transform: translateX(-50%) translateY(16px);
      }
    }
    
    @keyframes arrow {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
    
    @keyframes float {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
      100% {
        transform: translateY(0);
      }
    }
    
    @keyframes morphing {
      0% {
        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
      }
      25% {
        border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
      }
      50% {
        border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
      }
      75% {
        border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
      }
      100% {
        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
      }
    }
    
    @media (min-width: 768px) {
      .hero-content {
        flex-direction: row;
      }
      
      .hero-text {
        flex: 1;
      }
      
      .hero-image {
        flex: 1;
        display: flex;
        justify-content: center;
      }
    }
    
    @media (max-width: 767px) {
      .hero-image {
        margin-top: var(--space-5);
      }
      
      .image-container {
        width: 250px;
        height: 250px;
      }

      .cta-buttons {
        flex-direction: column;
        width: 100%;
      }

      .cta-buttons .btn {
        width: 100%;
      }
    }

    @media (max-width: 480px) {
      .image-container {
        width: 200px;
        height: 200px;
      }

      .intro-text {
        font-size: 1rem;
      }
    }
  `,
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms ease', style({ opacity: 1 })),
      ]),
    ]),
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('800ms ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('fadeInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(30px)' }),
        animate('800ms 300ms ease', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ]),
  ],
})
export class HeroComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.initScrollReveal();
  }

  private initScrollReveal(): void {
    // Simple scroll reveal effect
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));
  }
}