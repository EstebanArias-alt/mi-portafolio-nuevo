import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ScrollObserverService } from '../services/scroll-observer.service';

@Directive({
  selector: '[appScrollFade]',
  standalone: true, 
})
export class ScrollFadeDirective implements OnInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private scrollObserver: ScrollObserverService
  ) {}

  ngOnInit() {
    // 1. Añade la clase base de Tailwind 'fade-in'
    this.renderer.addClass(this.el.nativeElement, 'fade-in');

    // 2. Inicia la observación
    this.scrollObserver.observe(this.el.nativeElement);
  }
}