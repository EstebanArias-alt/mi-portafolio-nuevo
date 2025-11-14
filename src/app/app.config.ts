import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
// Importamos el módulo directamente, como sugiere el error
import { ReactiveFormsModule } from '@angular/forms'; 

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    // Usamos importProvidersFrom para habilitar ReactiveFormsModule como proveedor
    importProvidersFrom(ReactiveFormsModule) 
  ]
};