import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2
} from '@angular/core';

import { ScrollObserverService } from '../services/scroll-observer.service';

@Directive({
  selector: '[appScrollFade]',
  standalone: true,
})
export class ScrollFadeDirective implements OnInit {

  @Input() animation: 'up' | 'left' | 'right' | 'zoom' = 'up';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private scrollObserver: ScrollObserverService
  ) {}

  ngOnInit(): void {

    this.renderer.addClass(
      this.el.nativeElement,
      'scroll-reveal'
    );

    this.renderer.addClass(
      this.el.nativeElement,
      `reveal-${this.animation}`
    );

    this.scrollObserver.observe(
      this.el.nativeElement
    );

  }

}