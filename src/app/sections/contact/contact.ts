import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  contactLinks = [
    {
      label: 'Email',
      value: 'saimanoj.burre@gmail.com',
      href: 'mailto:saimanoj.burre@gmail.com',
    },
    {
      label: 'LinkedIn',
      value: 'LinkedIn Profile',
      href: 'YOUR_LINKEDIN_URL',
    },
    {
      label: 'GitHub',
      value: 'GitHub Profile',
      href: 'YOUR_GITHUB_URL',
    },
  ];
}
