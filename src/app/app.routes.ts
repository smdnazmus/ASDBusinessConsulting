import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { ServicesSection } from './pages/services-section/services-section';
import { ContactForm } from './pages/contact-form/contact-form';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'about', component: About },
  { path: 'services', component: ServicesSection },
  { path: 'contact', component: ContactForm },
];
