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
        <img 
          [src]="getImageSrc()" 
          [alt]="project.title"
          loading="lazy"
          decoding="async"
          fetchpriority="low"
          referrerpolicy="no-referrer-when-downgrade"
          (error)="onImageError($event)"
        >
        <div class="card-overlay">
          <div class="card-actions">
            @if (project.github) {
              <a [href]="project.github" target="_blank" rel="noopener noreferrer" class="card-action github" aria-label="View GitHub repository">
                <fa-icon [icon]="faGithub" [size]="'lg'"></fa-icon>
              </a>
            }
            @if (project.link) {
              <a [href]="project.link" target="_blank" rel="noopener noreferrer" class="card-action live" aria-label="View live demo">
                <fa-icon [icon]="faExternalLinkAlt" [size]="'lg'"></fa-icon>
              </a>
            }
            @if (project.caseStudy) {
              <a href="#" class="card-action case-study" aria-label="View case study">
                <fa-icon [icon]="faBook" [size]="'lg'"></fa-icon>
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
      box-shadow: 0 8px 24px var(--shadow-light);
    }
    
    .project-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 16px 32px var(--shadow-medium);
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
      width: 45px;
      height: 45px;
      background-color: var(--surface);
      color: var(--text-primary);
      border-radius: 50%;
      transition: all var(--transition-normal);
    }
    
    .dark-theme .card-action {
      background: linear-gradient(135deg, var(--color-primary-700), var(--color-primary-900));
      border: 1px solid var(--color-primary-600);
      color: white;
    }
    
    .dark-theme .card-action fa-icon {
      color: white !important;
    }
    
    .dark-theme .card-action fa-icon svg {
      fill: white !important;
    }
    
    .card-action fa-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
    }
    
    .card-action fa-icon svg {
      width: 1.25rem !important;
      height: 1.25rem !important;
    }
    
    .card-action:hover {
      transform: translateY(-3px);
      box-shadow: 0 4px 8px var(--shadow-medium);
    }
    
    .card-action fa-icon {
      color: inherit !important;
    }
    
    .card-action fa-icon svg {
      fill: currentColor !important;
    }
    
    .card-action.github:hover {
      background-color: #333;
      color: white !important;
    }
    
    .card-action.live:hover {
      background-color: var(--color-primary-500);
      color: white !important;
    }
    
    .card-action.case-study:hover {
      background-color: var(--color-highlight-500);
      color: white !important;
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
      font-weight: 500;
    }
    
    :host-context(.dark-theme) .tech-tag,
    .dark-theme .tech-tag {
      background-color: var(--color-primary-500) !important;
      color: white !important;
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
  imageError = false;
  
  // Font Awesome icons
  faGithub = faGithub;
  faExternalLinkAlt = faExternalLinkAlt;
  faBook = faBook;
  
  onImageError(event: Event): void {
    this.imageError = true;
    const img = event.target as HTMLImageElement;
    // Set a placeholder image
    img.src = this.getPlaceholderImage();
  }
  
  getPlaceholderImage(): string {
    // SVG placeholder with gradient background
    return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmM2Y0ZjYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNlNWU3ZWIiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0idXJsKCNhKSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Qcm9qZWN0IEltYWdlPC90ZXh0Pjwvc3ZnPg==';
  }
  
  getImageSrc(): string {
    if (this.imageError) {
      return this.getPlaceholderImage();
    }
    return this.project.image;
  }
}