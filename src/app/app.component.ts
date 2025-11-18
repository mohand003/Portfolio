import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThemeService } from './services/theme.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    EducationComponent,
    ContactComponent,
    FooterComponent,
    FontAwesomeModule
  ],
  template: `
    <div class="light-theme">
      <app-header></app-header>
      <main class="main-container">
        <div class="content-wrapper">
          <app-hero></app-hero>
          <app-about></app-about>
          <app-skills></app-skills>
          <app-projects></app-projects>
          <app-experience></app-experience>
          <app-education></app-education>
          <app-contact></app-contact>
          <router-outlet></router-outlet>
        </div>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: `
    main {
      min-height: 100vh;
    }
    
    .main-container {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    
    .content-wrapper {
      width: 100%;
      max-width: 100%;
    }
    
    @media (max-width: 768px) {
      .content-wrapper {
        overflow-x: hidden;
      }
    }
  `
})
export class AppComponent {
  constructor(public themeService: ThemeService) {}

  ngOnInit() {
    document.documentElement.classList.add('light-theme');
    document.documentElement.classList.remove('dark-theme');
  }
}
