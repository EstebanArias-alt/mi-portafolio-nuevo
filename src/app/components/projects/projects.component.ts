import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Proyecto {
  titulo: string;
  urlSitio: string;
  urlImagen: string;
  tecnologias: string[];
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  standalone: true, // Asumo que es standalone
  imports: [CommonModule]
})
export class ProjectsComponent implements OnInit {

  proyectos: Proyecto[] = [
    {
      titulo: 'Sistema de Ventas CerroAutomotores',
      urlSitio: 'https://www.drops-club.com/',
      urlImagen: 'https://via.placeholder.com/600x380.png?text=Drops-Club',
      tecnologias: ['Angular', 'SpringTools', 'Eclipse', 'MySQL', 'Xampp'],
    },
    {
      titulo: 'Sistema de Usuarios CerroAutomotores',
      urlSitio: 'https://www.fnatiz.com/',
      urlImagen: 'https://via.placeholder.com/600x380.png?text=Fnatiz',
      tecnologias: ['Angular', 'SpringTools', 'Eclipse', 'MySQL','Xampp'],
    },
    {
      titulo: 'BOT DE WHATSAPP PARA ATENCIÓN AL CLIENTE',
      urlSitio: 'https://www.doserewards.com/',
      urlImagen: 'https://via.placeholder.com/600x380.png?text=DoseRewards',
      tecnologias: ['Node.js', 'MongoDB',],
    },{
  titulo: 'Página Cataleya',
  urlSitio: 'https://estebanarias-alt.github.io/cataleya-estetica/',
  urlImagen: '/images/projects/cataleya.png',
  tecnologias: ['HTML', 'CSS', 'Astro', 'JavaScript', 'Tailwind CSS'],
}
  ];

  constructor() {}

  ngOnInit(): void {}
}