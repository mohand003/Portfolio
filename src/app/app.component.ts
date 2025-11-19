import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThemeService } from './services/theme.service';
import { LanguageService } from './services/language.service';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { LazyLoadDirective } from './directives/lazy-load.directive';

// Lazy loaded components
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    FooterComponent,
    LazyLoadDirective,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    EducationComponent,
    ContactComponent
  ],
  template: `
    <div>
      <app-header></app-header>
      <main class="main-container">
        <div class="content-wrapper">
          <app-hero></app-hero>
          <section appLazyLoad data-section="about" class="lazy-section">
            @defer (on viewport) {
              <app-about></app-about>
            } @placeholder {
              <div class="section-placeholder"></div>
            }
          </section>
          <section appLazyLoad data-section="skills" class="lazy-section">
            @defer (on viewport) {
              <app-skills></app-skills>
            } @placeholder {
              <div class="section-placeholder"></div>
            }
          </section>
          <section appLazyLoad data-section="projects" class="lazy-section">
            @defer (on viewport) {
              <app-projects></app-projects>
            } @placeholder {
              <div class="section-placeholder"></div>
            }
          </section>
          <section appLazyLoad data-section="experience" class="lazy-section">
            @defer (on viewport) {
              <app-experience></app-experience>
            } @placeholder {
              <div class="section-placeholder"></div>
            }
          </section>
          <section appLazyLoad data-section="education" class="lazy-section">
            @defer (on viewport) {
              <app-education></app-education>
            } @placeholder {
              <div class="section-placeholder"></div>
            }
          </section>
          <section appLazyLoad data-section="contact" class="lazy-section">
            @defer (on viewport) {
              <app-contact></app-contact>
            } @placeholder {
              <div class="section-placeholder"></div>
            }
          </section>
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
    
    .lazy-section {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.4s ease, transform 0.4s ease;
      will-change: opacity, transform;
    }
    
    .lazy-section.loaded {
      opacity: 1;
      transform: translateY(0);
    }
    
    .section-placeholder {
      min-height: 200px;
      background: transparent;
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
