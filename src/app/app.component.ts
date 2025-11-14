import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Importa los componentes de tu portafolio
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

// Importa la nueva directiva de animación
import { ScrollFadeDirective } from './directives/scroll-fade.directive'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    // Componentes del portafolio:
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    // La directiva de animación
    ScrollFadeDirective // <-- ¡Añadir aquí!
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // ...
}