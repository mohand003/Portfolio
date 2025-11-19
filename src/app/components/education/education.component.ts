import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { TranslateModule } from '@ngx-translate/core';

interface Education {
  institution: string;
  degree: string;
  period: string;
  highlights: string[];
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <section id="education" class="section">
      <div class="container">
        <h2 class="section-title" @fadeIn>{{ 'education.title' | translate }}</h2>
        
        <div class="timeline" @fadeIn>
          <div class="timeline-item" [class.active]="selectedEducation === 0" (click)="selectEducation(0)">
            <div class="timeline-marker" [class.active]="selectedEducation === 0"></div>
            <div class="timeline-content" @fadeInUp>
              <div class="timeline-header">
                <h3 class="timeline-title">{{ education.degree | translate }}</h3>
                <span class="timeline-company">{{ education.institution | translate }}</span>
                <span class="timeline-period">{{ education.period | translate }}</span>
              </div>
              <div class="timeline-body" [class.expanded]="selectedEducation === 0">
                <ul class="achievements">
                  @for (highlight of education.highlights; track highlight) {
                    <li>{{ highlight | translate }}</li>
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .timeline {
      position: relative;
      max-width: 900px;
      margin: 0 auto;
    }
    
    .timeline::before {
      content: '';
      position: absolute;
      top: 0;
      left: 24px;
      height: 100%;
      width: 2px;
      background-color: var(--color-neutral-200);
    }
    
    .dark-theme .timeline::before {
      background-color: var(--color-neutral-700);
    }
    
    .timeline-item {
      position: relative;
      padding-left: 50px;
      padding-bottom: var(--space-5);
      cursor: pointer;
    }
    
    .timeline-item:last-child {
      padding-bottom: 0;
    }
    
    .timeline-marker {
      position: absolute;
      top: 0;
      left: 15px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: var(--color-neutral-300);
      border: 4px solid var(--background);
      transition: all var(--transition-normal);
      z-index: 10;
    }
    
    .timeline-marker.active {
      background-color: var(--color-primary-500);
      transform: scale(1.2);
    }
    
    .timeline-content {
      background-color: var(--surface);
      border-radius: 12px;
      padding: var(--space-4);
      box-shadow: 0 4px 16px var(--shadow-light);
      transition: all var(--transition-normal);
    }
    
    .timeline-item.active .timeline-content {
      box-shadow: 0 8px 24px var(--shadow-medium);
      transform: translateY(-5px);
    }
    
    .timeline-header {
      margin-bottom: var(--space-3);
    }
    
    .timeline-title {
      font-size: 1.25rem;
      margin-bottom: var(--space-1);
      color: var(--text-primary);
    }
    
    .timeline-company {
      display: block;
      font-weight: 500;
      color: var(--color-primary-500);
      margin-bottom: var(--space-1);
    }
    
    .timeline-period {
      display: block;
      font-size: 0.875rem;
      color: var(--text-tertiary);
    }
    
    .timeline-body {
      max-height: 100px;
      overflow: hidden;
      transition: max-height var(--transition-normal);
    }
    
    .timeline-body.expanded {
      max-height: 500px;
    }
    
    .achievements {
      padding-left: var(--space-4);
    }
    
    .achievements li {
      margin-bottom: var(--space-2);
      position: relative;
      color: var(--text-secondary);
    }
    
    .achievements li::before {
      content: '';
      position: absolute;
      left: -20px;
      top: 10px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: var(--color-accent-400);
    }
    
    @media (min-width: 768px) {
      .timeline::before {
        left: 50%;
        margin-left: -1px;
      }
      
      .timeline-item {
        padding-left: 0;
        padding-right: 0;
        padding-bottom: var(--space-6);
      }
      
      .timeline-item {
        padding-left: 50%;
        padding-right: var(--space-4);
      }
      
      .timeline-marker {
        left: 50%;
        margin-left: -10px;
      }
      
      .timeline-item .timeline-content {
        margin-left: var(--space-4);
      }
    }
    
    /* RTL Support */
    [dir="rtl"] .timeline::before {
      right: 24px;
      left: auto;
    }
    
    [dir="rtl"] .timeline-item {
      padding-right: 50px;
      padding-left: 0;
    }
    
    [dir="rtl"] .timeline-marker {
      right: 15px;
      left: auto;
    }
    
    [dir="rtl"] .achievements {
      padding-right: var(--space-4);
      padding-left: 0;
    }
    
    [dir="rtl"] .achievements li::before {
      right: -20px;
      left: auto;
    }
    
    @media (min-width: 768px) {
      [dir="rtl"] .timeline::before {
        right: 50%;
        left: auto;
        margin-right: -1px;
        margin-left: 0;
      }
      
      [dir="rtl"] .timeline-item {
        padding-right: 50%;
        padding-left: var(--space-4);
      }
      
      [dir="rtl"] .timeline-marker {
        right: 50%;
        left: auto;
        margin-right: -10px;
        margin-left: 0;
      }
      
      [dir="rtl"] .timeline-item .timeline-content {
        margin-right: var(--space-4);
        margin-left: 0;
      }
      
      [dir="rtl"] .achievements {
        padding-left: var(--space-4);
        padding-right: 0;
      }
      
      [dir="rtl"] .achievements li::before {
        left: -20px;
        right: auto;
      }
    }
  `,
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease', style({ opacity: 1 })),
      ]),
    ]),
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('400ms ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class EducationComponent {
  selectedEducation = 0;
  
  education: Education = {
    institution: 'education.items.zagazig.institution',
    degree: 'education.items.zagazig.degree',
    period: 'education.items.zagazig.period',
    highlights: [
      'education.items.zagazig.highlights.0',
      'education.items.zagazig.highlights.1',
      'education.items.zagazig.highlights.2',
    ]
  };
  
  selectEducation(index: number): void {
    this.selectedEducation = index;
  }
}

