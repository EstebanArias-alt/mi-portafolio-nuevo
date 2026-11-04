import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.contactForm = this.fb.group({

      discordName: [
        '',
        Validators.required
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      message: [
        '',
        [
          Validators.required,
          Validators.minLength(10)
        ]
      ]

    });

  }

  ngOnInit(): void {}

  onSubmit(): void {

    if (this.contactForm.invalid) {
      alert('Por favor, completá todos los campos correctamente.');
      return;
    }

    const {
      discordName,
      email,
      message
    } = this.contactForm.value;

    const whatsappNumber = '5493884605421';

    const text = `
Hola, soy ${discordName}.

Email: ${email}

Mensaje:
${message}
    `.trim();

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(
      whatsappUrl,
      '_blank'
    );

    this.contactForm.reset();
  }

}