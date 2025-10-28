import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCard } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [CommonModule, MatIconModule, MatCard, FlexLayoutModule, RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  services = [
    {
      icon: 'account_balance',
      title: 'Tax Consulting',
      description: 'Expert advice on tax planning.',
      link: '/services/tax',
    },
    {
      icon: '🧾',
      title: 'VAT Consulting',
      description: 'Expert advice on vat planning.',
      link: '/services/vat',
    },
    {
      icon: 'account_balance',
      title: 'Customs',
      description: 'Expert advice on customs planning.',
      link: '/services/custom',
    },
    {
      icon: 'account_balance',
      title: 'RJSC',
      description: 'Expert advice on customs planning.',
      link: '/services/RJSC',
    },
    {
      icon: 'account_balance',
      title: 'BIDA',
      description: 'Expert advice on BIDA planning.',
      link: '/services/BIDA',
    },
    {
      icon: 'business_center',
      title: 'Accounts & Audit',
      description: 'Comprehensive accounts and audit solutions.',
      link: '/services/accountsandaudit',
    },
    {
      icon: 'trending_up',
      title: 'Business Licenses',
      description: 'Strategies for long-term growth.',
      link: '/services/businesslicenses',
    },
  ];
}
