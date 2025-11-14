import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  name = 'Tu Nombre';
  role = 'Front-End Developer';
  description = 'Me apasiona crear soluciones innovadoras y experiencias de usuario fluidas usando Angular, React y más.';

  // URL del ícono para el saludo (Ejemplo de un ícono de mano saludando)
  handIconUrl = 'https://s3.amazonaws.com/skillicons-static/hand-emoji.png'; 
}