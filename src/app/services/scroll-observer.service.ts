import { Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollObserverService {
  constructor(private ngZone: NgZone) {}

  observe(target: Element) {
    const observer = new IntersectionObserver(
      (entries) => {
        this.ngZone.run(() => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
              observer.unobserve(entry.target); // Detenemos la observación
            }
          });
        });
      },
      { threshold: 0.1 } 
    );
    observer.observe(target);
  }
}