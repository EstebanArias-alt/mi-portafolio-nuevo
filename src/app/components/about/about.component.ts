import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  icon: string; 
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

@Component({
  selector: 'app-about',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {

  skillCategories: SkillCategory[] = [
    {
      title: 'Front-End Development',
      skills: [
        { name: 'Angular', icon: 'angular' },
        { name: 'TypeScript', icon: 'ts' },
        { name: 'JavaScript', icon: 'js' },
        { name: 'HTML', icon: 'html' },
        { name: 'CSS', icon: 'css' },
        { name: 'Tailwind CSS', icon: 'tailwind' },
      ],
    },
    {
      title: 'Back-End & Bases de Datos', 
      skills: [
        { name: 'Spring Boot', icon: 'springboot' },
        { name: 'Java', icon: 'java' },
        { name: 'Node.js', icon: 'nodejs' },
        { name: 'MySQL', icon: 'mysql' },
        { name: 'XAMPP', icon: 'xampp' },
  
      ],
    },
    {
      title: 'Herramientas y Otros',
      skills: [
        { name: 'Git', icon: 'git' },
        { name: 'VS Code', icon: 'vscode' },
        { name: 'Docker', icon: 'docker' },
        { name: 'GitHub', icon: 'github' },
        { name: 'Discord', icon: 'discord' },
      ],
    },
  ];
}