import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../models/project.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faBook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <div class="project-card">
      <div class="card-image">
        <img [src]="project.image" [alt]="project.title">
        <div class="card-overlay">
          <div class="card-actions">
            @if (project.github) {
              <a [href]="project.github" target="_blank" class="card-action github" aria-label="View GitHub repository">
                <fa-icon [icon]="faGithub"></fa-icon>
              </a>
            }
            @if (project.link) {
              <a [href]="project.link" target="_blank" class="card-action live" aria-label="View live demo">
                <fa-icon [icon]="faExternalLinkAlt"></fa-icon>
              </a>
            }
            @if (project.caseStudy) {
              <a href="#" class="card-action case-study" aria-label="View case study">
                <fa-icon [icon]="faBook"></fa-icon>
              </a>
            }
          </div>
        </div>
      </div>
      <div class="card-content">
        <h3 class="card-title">{{ project.title }}</h3>
        <p class="card-description">{{ project.description }}</p>
        <div class="card-tech">
          @for (tech of project.tech.slice(0, 3); track tech) {
            <span class="tech-tag">{{ tech }}</span>
          }
          @if (project.tech.length > 3) {
            <span class="tech-more">+{{ project.tech.length - 3 }}</span>
          }
        </div>
      </div>
    </div>
  `,
  styles: `
    .project-card {
      background-color: var(--surface);
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
      transition: all var(--transition-normal);
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    
    .dark-theme .project-card {
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    }
    
    .project-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 16px 32px rgba(0, 0, 0, 0.12);
    }
    
    .dark-theme .project-card:hover {
      box-shadow: 0 16px 32px rgba(0, 0, 0, 0.3);
    }
    
    .card-image {
      position: relative;
      width: 100%;
      height: 0;
      padding-bottom: 60%;
      overflow: hidden;
    }
    
    .card-image img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform var(--transition-normal);
    }
    
    .project-card:hover .card-image img {
      transform: scale(1.05);
    }
    
    .card-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
      opacity: 0;
      transition: opacity var(--transition-normal);
      display: flex;
      align-items: flex-end;
      padding: var(--space-3);
    }
    
    .project-card:hover .card-overlay {
      opacity: 1;
    }
    
    .card-actions {
      display: flex;
      gap: var(--space-2);
    }
    
    .card-action {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background-color: white;
      color: var(--color-neutral-900);
      border-radius: 50%;
      transition: all var(--transition-normal);
    }
    
    .card-action:hover {
      transform: translateY(-3px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    
    .card-action.github:hover {
      background-color: #333;
      color: white;
    }
    
    .card-action.live:hover {
      background-color: var(--color-primary-500);
      color: white;
    }
    
    .card-action.case-study:hover {
      background-color: var(--color-highlight-500);
      color: white;
    }
    
    .card-content {
      padding: var(--space-3);
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    
    .card-title {
      font-size: 1.25rem;
      margin-bottom: var(--space-2);
      line-height: 1.3;
    }
    
    .card-description {
      color: var(--text-secondary);
      font-size: 0.9375rem;
      margin-bottom: var(--space-3);
      flex: 1;
    }
    
    .card-tech {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-1);
    }
    
    .tech-tag {
      display: inline-block;
      padding: var(--space-1) var(--space-2);
      background-color: var(--color-neutral-100);
      color: var(--text-secondary);
      border-radius: 4px;
      font-size: 0.75rem;
    }
    
    .dark-theme .tech-tag {
      background-color: var(--color-neutral-700);
    }
    
    .tech-more {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      background-color: var(--color-primary-100);
      color: var(--color-primary-500);
      border-radius: 50%;
      font-size: 0.75rem;
      font-weight: 500;
    }
    
    .dark-theme .tech-more {
      background-color: var(--color-primary-900);
      color: var(--color-primary-300);
    }
  `
})
export class ProjectCardComponent {
  @Input() project!: Project;
  
  // Font Awesome icons
  faGithub = faGithub;
  faExternalLinkAlt = faExternalLinkAlt;
  faBook = faBook;
}