import { Component, OnInit, OnDestroy } from '@angular/core';
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
import { LanguageService } from './services/language.service';
import { TranslateService } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Subscription } from 'rxjs';

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
    <div>
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
export class AppComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();

  constructor(
    public themeService: ThemeService,
    private languageService: LanguageService,
    private translateService: TranslateService
  ) {}

  ngOnInit() {
    // Initialize language
    const currentLang = this.languageService.getCurrentLanguage();
    this.translateService.setDefaultLang('en');
    this.translateService.use(currentLang);
    
    // Subscribe to language changes
    this.subscriptions.add(
      this.languageService.currentLanguage$.subscribe(lang => {
        this.translateService.use(lang);
      })
    );

    // Theme is already initialized in ThemeService constructor
    // Subscribe to theme changes to ensure sync
    this.subscriptions.add(
      this.themeService.darkTheme$.subscribe(isDark => {
        // Theme is already applied by ThemeService
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
