import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHtml5, faCss3Alt, faJs, faAngular, faSass, faGitAlt, faDocker, faNodeJs, faFigma } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface Skill {
  name: string;
  level: number;
  icon: IconDefinition;
  color: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <section id="skills" class="section">
      <div class="container">
        <h2 class="section-title" @fadeIn>My Skills</h2>
        
        <div class="skills-content">
          <div class="skills-text" @fadeInLeft>
            <h3>Technical Expertise</h3>
            <p>
              With a strong foundation in web technologies and a passion for clean, efficient code, 
              I've developed expertise in a range of tools and frameworks that allow me to build 
              performant, accessible, and beautiful web applications.
            </p>
            <p>
              I'm constantly learning and experimenting with new technologies to stay ahead of industry trends 
              and deliver cutting-edge solutions to complex problems.
            </p>
          </div>
          
          <div class="skills-cards" @fadeInRight>
            <div class="skills-category">
              <h4>Frontend Development</h4>
              <div class="skills-grid">
                @for (skill of frontendSkills; track skill.name) {
                  <div class="skill-card" [style.--skill-color]="skill.color">
                    <div class="skill-icon">
                      <fa-icon [icon]="skill.icon" [style]="{'color': skill.color}"></fa-icon>
                    </div>
                    <div class="skill-info">
                      <div class="skill-name">{{ skill.name }}</div>
                      <div class="skill-bar">
                        <div class="skill-level" [style.width.%]="skill.level"></div>
                      </div>
                    </div>
                  </div>
                }
              </div>
            </div>
            
            <div class="skills-category">
              <h4>Tools & Others</h4>
              <div class="skills-grid">
                @for (skill of toolsSkills; track skill.name) {
                  <div class="skill-card" [style.--skill-color]="skill.color">
                    <div class="skill-icon">
                      <fa-icon [icon]="skill.icon" [style]="{'color': skill.color}"></fa-icon>
                    </div>
                    <div class="skill-info">
                      <div class="skill-name">{{ skill.name }}</div>
                      <div class="skill-bar">
                        <div class="skill-level" [style.width.%]="skill.level"></div>
                      </div>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .skills-content {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-5);
    }
    
    .skills-text h3 {
      margin-bottom: var(--space-3);
      color: var(--color-primary-500);
    }
    
    .skills-text p {
      margin-bottom: var(--space-3);
      font-size: 1.125rem;
      line-height: 1.7;
    }
    
    .skills-category {
      margin-bottom: var(--space-4);
    }
    
    .skills-category h4 {
      margin-bottom: var(--space-3);
      font-size: 1.25rem;
      color: var(--text-secondary);
    }
    
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: var(--space-3);
    }
    
    .skill-card {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      padding: var(--space-3);
      border-radius: 12px;
      background-color: white;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      transition: all var(--transition-normal);
      border-left: 3px solid var(--skill-color, var(--color-primary-500));
    }
    
    .skill-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    }
    
    .dark-theme .skill-card {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }
    
    .skill-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    }
    
    .dark-theme .skill-card:hover {
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    }
    
    .skill-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      color: var(--skill-color, var(--color-primary-500));
    }
    
    .skill-info {
      flex: 1;
    }
    
    .skill-name {
      font-weight: 500;
      margin-bottom: var(--space-1);
    }
    
    .skill-bar {
      height: 6px;
      background-color: var(--color-neutral-200);
      border-radius: 3px;
      overflow: hidden;
    }
    
    .dark-theme .skill-bar {
      background-color: var(--color-neutral-700);
    }
    
    .skill-level {
      height: 100%;
      background-color: var(--skill-color, var(--color-primary-500));
      border-radius: 3px;
      transition: width 1s ease-in-out;
    }
    
    @media (min-width: 992px) {
      .skills-content {
        grid-template-columns: 1fr 2fr;
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
export class SkillsComponent {
  // Font Awesome icons
  faHtml5 = faHtml5;
  faCss3Alt = faCss3Alt;
  faJs = faJs;
  faAngular = faAngular;
  faSass = faSass;
  faGitAlt = faGitAlt;
  faDocker = faDocker;
  faNodeJs = faNodeJs;
  faFigma = faFigma;

  frontendSkills: Skill[] = [
    {
      name: 'HTML5',
      level: 95,
      color: '#E34F26',
      icon: this.faHtml5
    },
    {
      name: 'CSS3',
      level: 90,
      color: '#1572B6',
      icon: this.faCss3Alt
    },
    {
      name: 'JavaScript',
      level: 90,
      color: '#F7DF1E',
      icon: this.faJs
    },
    {
      name: 'TypeScript',
      level: 85,
      color: '#3178C6',
      icon: this.faJs // Using JS icon for TypeScript as there's no specific TS icon
    },
    {
      name: 'Angular',
      level: 92,
      color: '#DD0031',
      icon: this.faAngular
    },
    {
      name: 'SASS',
      level: 85,
      color: '#CC6699',
      icon: this.faSass
    },
  ];

  toolsSkills: Skill[] = [
    {
      name: 'Git',
      level: 88,
      color: '#F05032',
      icon: this.faGitAlt
    },
    {
      name: 'Docker',
      level: 75,
      color: '#2496ED',
      icon: this.faDocker
    },
    {
      name: 'Webpack',
      level: 70,
      color: '#8DD6F9',
      icon: this.faJs // Using JS icon for Webpack as there's no specific Webpack icon
    },
    {
      name: 'Figma',
      level: 75,
      color: '#F24E1E',
      icon: this.faFigma
    },
    {
      name: 'Node.js',
      level: 75,
      color: '#339933',
      icon: this.faNodeJs
    }
  ];
}