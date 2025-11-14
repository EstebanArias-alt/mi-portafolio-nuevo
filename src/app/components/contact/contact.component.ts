import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // <-- ReactiveFormsModule
import { CommonModule } from '@angular/common'; // <-- CommonModule

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true, // <-- Aseguramos que es standalone
  imports: [CommonModule, ReactiveFormsModule] // <-- Incluimos ambos
})
export class ContactComponent implements OnInit {
  
  // ... (Tu lógica existente aquí)
  
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      discordName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      service: ['', [Validators.required]], // Selector de servicio
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Formulario Válido. Datos:', this.contactForm.value);
      alert('¡Mensaje enviado con éxito! (Mira la consola para ver los datos)');
      this.contactForm.reset();
    } else {
      console.log('Formulario Inválido.');
      alert('Por favor, completa todos los campos requeridos correctamente.');
    }
  }
}