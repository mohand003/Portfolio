import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { ProjectCardComponent } from './project-card/project-card.component';
import { Project } from '../../models/project.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faBook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent, FontAwesomeModule],
  template: `
    <section id="projects" class="section">
      <div class="container">
        <h2 class="section-title" @fadeIn>My Projects</h2>
        
        <div class="projects-tabs" @fadeIn>
          <button 
            class="tab-btn" 
            [class.active]="activeFilter === 'all'"
            (click)="filterProjects('all')"
          >
            All
          </button>
          <button 
            class="tab-btn" 
            [class.active]="activeFilter === 'web'"
            (click)="filterProjects('web')"
          >
            Web Apps
          </button>
          <button 
            class="tab-btn" 
            [class.active]="activeFilter === 'mobile'"
            (click)="filterProjects('mobile')"
          >
            Mobile
          </button>
          <button 
            class="tab-btn" 
            [class.active]="activeFilter === 'ui'"
            (click)="filterProjects('ui')"
          >
            UI Design
          </button>
        </div>
        
        <div class="featured-project" *ngIf="featuredProject" @fadeInUp>
          <div class="featured-content">
            <div class="featured-text">
              <span class="featured-label">Featured Project</span>
              <h3>{{ featuredProject.title }}</h3>
              <p>{{ featuredProject.description }}</p>
              <div class="tech-stack">
                @for (tech of featuredProject.tech; track tech) {
                  <span class="tech-tag">{{ tech }}</span>
                }
              </div>
              <div class="project-links">
                @if (featuredProject.github) {
                  <a [href]="featuredProject.github" target="_blank" class="project-link github">
                    <fa-icon [icon]="faGithub"></fa-icon>
                    Code
                  </a>
                }
                @if (featuredProject.link) {
                  <a [href]="featuredProject.link" target="_blank" class="project-link live">
                    <fa-icon [icon]="faExternalLinkAlt"></fa-icon>
                    Live Demo
                  </a>
                }
                @if (featuredProject.caseStudy) {
                  <a href="#" class="project-link case-study">
                    <fa-icon [icon]="faBook"></fa-icon>
                    Case Study
                  </a>
                }
              </div>
            </div>
            <div class="featured-image">
              <img [src]="featuredProject.image" [alt]="featuredProject.title">
            </div>
          </div>
        </div>
        
        <div class="projects-grid">
          @for (project of filteredProjects; track project.id) {
            <app-project-card [project]="project" @fadeInUp></app-project-card>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .projects-tabs {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: var(--space-2);
      margin-bottom: var(--space-5);
    }
    
    .tab-btn {
      background: none;
      border: none;
      padding: var(--space-2) var(--space-3);
      font-size: 1rem;
      font-weight: 500;
      color: var(--text-secondary);
      cursor: pointer;
      border-radius: 30px;
      transition: all var(--transition-normal);
    }
    
    .tab-btn:hover {
      color: var(--text-primary);
      background-color: var(--color-neutral-100);
    }
    
    .tab-btn.active {
      background-color: var(--color-primary-500);
      color: white;
    }
    
    .featured-project {
      margin-bottom: var(--space-6);
    }
    
    .featured-content {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-4);
      align-items: center;
      background-color: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
      transition: all var(--transition-normal);
    }
    
    .featured-content:hover {
      transform: translateY(-8px);
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.1);
    }
    
    .dark-theme .featured-content {
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    }
    
    .featured-text {
      padding: var(--space-4);
    }
    
    .featured-label {
      display: inline-block;
      padding: var(--space-1) var(--space-2);
      background-color: var(--color-highlight-100);
      color: var(--color-highlight-500);
      border-radius: 4px;
      font-size: 0.875rem;
      font-weight: 500;
      margin-bottom: var(--space-2);
    }
    
    .dark-theme .featured-label {
      background-color: var(--color-highlight-900);
    }
    
    .featured-text h3 {
      font-size: 1.75rem;
      margin-bottom: var(--space-2);
    }
    
    .featured-text p {
      margin-bottom: var(--space-3);
      color: var(--text-secondary);
    }
    
    .featured-image {
      width: 100%;
      height: 0;
      padding-bottom: 56.25%;
      position: relative;
      overflow: hidden;
    }
    
    .featured-image img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform var(--transition-normal);
    }
    
    .featured-content:hover .featured-image img {
      transform: scale(1.05);
    }
    
    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-2);
      margin-bottom: var(--space-3);
    }
    
    .tech-tag {
      display: inline-block;
      padding: var(--space-1) var(--space-2);
      background-color: var(--color-neutral-100);
      color: var(--text-secondary);
      border-radius: 4px;
      font-size: 0.875rem;
    }
    
    .dark-theme .tech-tag {
      background-color: var(--color-neutral-700);
    }
    
    .project-links {
      display: flex;
      gap: var(--space-3);
    }
    
    .project-link {
      display: inline-flex;
      align-items: center;
      gap: var(--space-1);
      color: var(--text-primary);
      font-weight: 500;
      text-decoration: none;
      transition: all var(--transition-normal);
    }
    
    .project-link:hover {
      color: var(--color-primary-500);
    }
    
    .project-link svg {
      transition: transform var(--transition-normal);
    }
    
    .project-link:hover svg {
      transform: translateY(-2px);
    }
    
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: var(--space-4);
    }
    
    @media (min-width: 768px) {
      .featured-content {
        grid-template-columns: 1fr 1fr;
      }
      
      .projects-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    @media (min-width: 992px) {
      .projects-grid {
        grid-template-columns: repeat(3, 1fr);
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
export class ProjectsComponent {
  activeFilter = 'all';
  projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive admin dashboard for an e-commerce platform with real-time analytics, inventory management, and order processing.',
      image: 'https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg',
      tech: ['Angular', 'TypeScript', 'RxJS', 'Chart.js', 'Firebase'],
      link: 'https://nile-mart-tan.vercel.app/',
      github: 'https://github.com/mohand003/Nile-Mart.git',
      featured: true
    },
    {
      id: 2,
      title: 'UI Generator App',
      description: 'An AI-Powered Generative System for Automated UI Designs Creation Using Natural Language Prompts',
      image: 'https://www.datocms-assets.com/16499/1734278451-thumb-ai-ui-generators.png?auto=format',
      tech: ['Angular', 'Ionic', 'NgRx', 'Firebase'],
      link: 'https://ui-evolution.vercel.app/',
      github: 'https://github.com/mohand003/UI-Evolution.git',
      featured: false
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A web page that expresses your work, your qualifications for the job market, and ways to contact you.',
      image: 'https://parametric-architecture.com/wp-content/uploads/2024/08/Architecture-Portfolio-Cover-1024x683.webp',
      tech: ['Angular', 'TypeScript', 'Angular Material', 'Express.js'],
      link: 'https://example.com/tasks',
      github: 'https://github.com/example/tasks',
      featured: false
    },
  ];
  
  filteredProjects: Project[] = [];
  featuredProject: Project | undefined;
  
  constructor() {
    this.featuredProject = this.projects.find(project => project.featured);
    this.filterProjects('all');
  }
  
  filterProjects(filter: string): void {
    this.activeFilter = filter;
    
    if (filter === 'all') {
      this.filteredProjects = this.projects.filter(project => !project.featured);
    } else if (filter === 'web') {
      this.filteredProjects = this.projects.filter(project => 
        !project.featured && 
        (project.tech.includes('Angular') || project.tech.includes('React') || project.tech.includes('Vue'))
      );
    } else if (filter === 'mobile') {
      this.filteredProjects = this.projects.filter(project => 
        !project.featured && 
        (project.tech.includes('Ionic') || project.tech.includes('React Native'))
      );
    } else if (filter === 'ui') {
      this.filteredProjects = this.projects.filter(project => 
        !project.featured && 
        (project.tech.includes('Figma') || project.tech.includes('Adobe XD') || project.tech.includes('UI/UX'))
      );
    }
  }
  
  // Font Awesome icons
  faGithub = faGithub;
  faExternalLinkAlt = faExternalLinkAlt;
  faBook = faBook;
}