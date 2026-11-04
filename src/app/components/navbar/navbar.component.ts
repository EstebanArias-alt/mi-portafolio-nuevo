import {
  Component,
  HostListener,
  OnDestroy,
  OnInit
} from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  menuOpen = false;

  activeSection = 'hero';

  scrolled = false;

  private observer?: IntersectionObserver;


  ngOnInit(): void {

    const sections = [
      'hero',
      'about',
      'projects',
      'contact'
    ];

    this.observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }

        });

      },
      {
        threshold: 0.4
      }
    );


    sections.forEach((id) => {

      const element = document.getElementById(id);

      if (element) {
        this.observer?.observe(element);
      }

    });


    this.checkScroll();

  }


  ngOnDestroy(): void {
    this.observer?.disconnect();
  }


  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.checkScroll();
  }


  private checkScroll(): void {
    this.scrolled = window.scrollY > 40;
  }


  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }


  closeMenu(): void {
    this.menuOpen = false;
  }

}