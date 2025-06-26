import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="section">
      <div class="container">
        <h2 class="section-title" @fadeIn>Work Experience</h2>
        
        <div class="timeline" @fadeIn>
          @for (experience of experiences; track experience.company; let i = $index) {
            <div class="timeline-item" [class.active]="selectedExperience === i" (click)="selectExperience(i)">
              <div class="timeline-marker" [class.active]="selectedExperience === i"></div>
              <div class="timeline-content" @fadeInUp>
                <div class="timeline-header">
                  <h3 class="timeline-title">{{ experience.role }}</h3>
                  <span class="timeline-company">{{ experience.company }}</span>
                  <span class="timeline-period">{{ experience.period }}</span>
                </div>
                <div class="timeline-body" [class.expanded]="selectedExperience === i">
                  <p>{{ experience.description }}</p>
                  <ul class="achievements">
                    @for (achievement of experience.achievements; track achievement) {
                      <li>{{ achievement }}</li>
                    }
                  </ul>
                </div>
              </div>
            </div>
          }
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
      background-color: white;
      border-radius: 12px;
      padding: var(--space-4);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
      transition: all var(--transition-normal);
    }
    
    .timeline-item.active .timeline-content {
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
      transform: translateY(-5px);
    }
    
    .dark-theme .timeline-item.active .timeline-content {
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
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
    
    .timeline-body p {
      margin-bottom: var(--space-3);
      color: var(--text-secondary);
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
      
      .timeline-item:nth-child(odd) {
        padding-right: 50%;
        padding-left: var(--space-4);
        text-align: right;
      }
      
      .timeline-item:nth-child(even) {
        padding-left: 50%;
        padding-right: var(--space-4);
      }
      
      .timeline-marker {
        left: 50%;
        margin-left: -10px;
      }
      
      .timeline-item:nth-child(odd) .timeline-content {
        margin-right: var(--space-4);
      }
      
      .timeline-item:nth-child(even) .timeline-content {
        margin-left: var(--space-4);
      }
      
      .timeline-item:nth-child(odd) .achievements {
        padding-right: var(--space-4);
        padding-left: 0;
      }
      
      .timeline-item:nth-child(even) .achievements li::before {
        right: -20px;
        left: auto;
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
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('800ms ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class ExperienceComponent {
  selectedExperience = 0;
  
  experiences: Experience[] = [
    {
      company: 'Route Academy',
      role: 'Front-End Learner',
      period: 'sep 2024 - feb 2025',
      description: 'Learning Front-End Development as basics (HTML/CSS/JS) and then focusing on Angular framework.',
      achievements: [
        'Completing front-end basic courses.',
        'Learning design libraries like Tailwind CSS and bootstrap.',
        'Completing learn how to use figma and get the design details from it.',
        'Completing courses in Angular framework.',
        'Completing my first angular project(Nile Mart{E-Commerce}).',
      ]
    },
    {
      company: 'Saiket Systems',
      role: 'Front-End internship',
      period: 'jun 2025 - jul 2025',
      description: 'Learning to focus on mastering core web technologies (HTML, CSS, JavaScript).',
      achievements: [
        'Completed a one-month front-end internship focused on real-world UI challenges.',
        'Developed and delivered 6 diverse front-end tasks within set deadlines.',
        'Applied HTML, CSS, and JavaScript skills to practical projects.',
        'All tasks were completed and submitted online successfully.',
      ]
    },
  ];
  
  selectExperience(index: number): void {
    this.selectedExperience = index;
  }
}