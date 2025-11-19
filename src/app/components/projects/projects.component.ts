import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectCardComponent } from './project-card/project-card.component';
import { Project } from '../../models/project.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faBook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule, ProjectCardComponent, FontAwesomeModule],
  template: `
    <section id="projects" class="section">
      <div class="container">
        <h2 class="section-title" @fadeIn>{{ 'projects.title' | translate }}</h2>
        
        <div class="projects-tabs" @fadeIn>
          <button 
            class="tab-btn" 
            [class.active]="activeFilter === 'all'"
            (click)="filterProjects('all')"
          >
            {{ 'projects.allProjects' | translate }}
          </button>
        </div>
        
        <div class="featured-project" *ngIf="featuredProject" @fadeInUp>
          <div class="featured-content">
            <div class="featured-text">
              <span class="featured-label">{{ 'projects.featured' | translate }}</span>
              <h3>{{ featuredProject.title }}</h3>
              <p>{{ featuredProject.description }}</p>
              <div class="tech-stack">
                @for (tech of featuredProject.tech; track tech) {
                  <span class="tech-tag">{{ tech }}</span>
                }
              </div>
              <div class="project-links">
                @if (featuredProject.github) {
                  <a [href]="featuredProject.github" target="_blank" rel="noopener noreferrer" class="project-link github">
                    <fa-icon [icon]="faGithub" [size]="'lg'"></fa-icon>
                    {{ 'projects.code' | translate }}
                  </a>
                }
                @if (featuredProject.link) {
                  <a [href]="featuredProject.link" target="_blank" rel="noopener noreferrer" class="project-link live">
                    <fa-icon [icon]="faExternalLinkAlt" [size]="'lg'"></fa-icon>
                    {{ 'projects.liveDemo' | translate }}
                  </a>
                }
                @if (featuredProject.caseStudy) {
                  <a href="#" class="project-link case-study">
                    <fa-icon [icon]="faBook" [size]="'lg'"></fa-icon>
                    {{ 'projects.caseStudy' | translate }}
                  </a>
                }
              </div>
            </div>
            <div class="featured-image">
              <img 
                [src]="featuredProject.image" 
                [alt]="featuredProject.title"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
                referrerpolicy="no-referrer-when-downgrade"
                crossorigin="anonymous"
              >
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
    
    .dark-theme .tab-btn:hover {
      background-color: var(--color-neutral-700);
    }
    
    
    .tab-btn.active {
      background-color: var(--color-primary-500);
      color: white !important;
    }
    
    .featured-project {
      margin-bottom: var(--space-6);
    }
    
    .featured-content {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-4);
      align-items: center;
      background-color: var(--surface);
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 8px 30px var(--shadow-light);
      transition: all var(--transition-normal);
    }
    
    .featured-content:hover {
      transform: translateY(-8px);
      box-shadow: 0 16px 40px var(--shadow-medium);
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
      color: var(--color-highlight-300);
    }
    
    .featured-text h3 {
      font-size: 1.75rem;
      margin-bottom: var(--space-2);
      color: var(--text-primary);
    }
    
    .featured-text p {
      margin-bottom: var(--space-3);
      color: var(--text-secondary);
      line-height: 1.7;
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
      font-weight: 500;
    }
    
    :host-context(.dark-theme) .tech-tag,
    .dark-theme .tech-tag {
      background-color: var(--color-primary-500) !important;
      color: white !important;
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
    
    .dark-theme .project-link {
      color: var(--text-primary);
    }
    
    .dark-theme .project-link:hover {
      color: var(--color-primary-400);
    }
    
    .project-link fa-icon {
      color: inherit !important;
      font-size: 1.25rem;
    }
    
    .project-link fa-icon svg {
      fill: currentColor !important;
      width: 1.25rem !important;
      height: 1.25rem !important;
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
        animate('400ms ease', style({ opacity: 1 })),
      ]),
    ]),
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('400ms ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class ProjectsComponent {
  activeFilter = 'all';
  projects: Project[] = [
    {
      id: 1,
      title: 'Graduation Project: UI Generator (UI Evolution) - Grade: A+',
      description: 'Developed complete frontend interface for AI-powered UI automation system using Angular, Bootstrap, and 3D JavaScript. Implemented user authentication, responsive design, and dynamic visual components with enhanced user experience.',
      image: 'https://www.datocms-assets.com/16499/1734278451-thumb-ai-ui-generators.png?auto=format',
      tech: ['Angular', 'Bootstrap', '3D JavaScript', 'TypeScript'],
      link: 'https://ui-evolution.vercel.app/',
      github: 'https://github.com/mohand003/UI-Evolution.git',
      featured: true
    },
    {
      id: 2,
      title: 'E-Commerce (Nile-Mart)',
      description: 'Built a fully responsive Angular e-commerce web application. Implemented using HTML5, CSS3, and TypeScript with LocalStorage for data persistence. Features include user authentication, product management, shopping cart, and favorites.',
      image: 'https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg',
      tech: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'LocalStorage'],
      link: 'https://nile-mart-tan.vercel.app/',
      github: 'https://github.com/mohand003/Nile-Mart.git',
      featured: false
    },
    {
      id: 3,
      title: 'Super-Mart (Supermarket System)',
      description: 'Built a responsive Angular supermarket website with TypeScript and LocalStorage. Features user shopping interface and offers browsing functionality. Complete supermarket system with full administrative controls.',
      image: 'https://img.freepik.com/free-vector/supermarket-logo-template-with-shopping-cart_23-2148470292.jpg',
      tech: ['Angular', 'TypeScript', 'LocalStorage'],
      link: 'https://super-mart-five.vercel.app/',
      github: 'https://github.com/mohand003/SuperMart.git',
      featured: false
    },
    {
      id: 4,
      title: 'MSH Suits (Women\'s Suits E-Commerce)',
      description: 'Developed full-stack e-commerce platform with Angular 20 frontend and Node.js backend. Implemented comprehensive admin dashboard for managing orders, products, and promo codes with complete CRUD operations. Integrated JWT authentication, multi-language support (NGX-Translate), dark/light theme switching, and shopping cart with order management.',
      image: 'https://res.cloudinary.com/df9rcxvpg/image/upload/v1759015601/home_upwiwy.jpg',
      tech: ['Angular 20', 'Node.js', 'JWT', 'NGX-Translate', 'RxJS'],
      link: 'https://msh-suits.vercel.app/',
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