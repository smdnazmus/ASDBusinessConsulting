import { Component } from '@angular/core';
import { Contact } from '../../components/contact/contact';

@Component({
  selector: 'app-contact-form',
  imports: [Contact],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm {}
