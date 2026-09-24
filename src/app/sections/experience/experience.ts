import { Component } from '@angular/core';

interface Experiences {
  number: string;
  company: string;
  role: string;
  location: string;
  duration: string;
  technologies: string[];
  description: string[];
}

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  experiences: Experiences[] = [
    {
      number: '01',
      company: 'WIPRO',
      role: 'Senior Software Engineer',
      location: 'Hyderabad, India',
      duration: 'Mar 2026 — Present',
      technologies: ['Angular', 'TypeScript', 'Java', 'Spring Boot'],
      description: [
        'Upskilled in cloud technologies and full-stack development to enhance end-to-end application delivery capabilities.',
        'Improved understanding of scalable application architecture, authentication and deployment workflows.',
      ],
    },

    {
      number: '02',
      company: 'TATA CONSULTANCY SERVICES',
      role: 'Senior Systems Engineer',
      location: 'Hyderabad, India',
      duration: 'Jul 2023 — Jul 2025',
      technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3'],
      description: [
        'Architected and delivered an Angular-based enterprise server patching platform used to identify and remediate vulnerable servers, improving infrastructure security and compliance.',
        'Integrated secure RESTful APIs with authentication and error handling, reducing failures and ensuring reliable data exchange.',
        'Built reusable Angular UI components aligned with modern UX standards, improving development speed and UI consistency.',
        'Automated UI workflows, cutting manual effort by 70% and significantly improving operational efficiency.',
      ],
    },

    {
      number: '03',
      company: 'CAPGEMINI',
      role: 'Software Engineer',
      location: 'Hyderabad, India',
      duration: 'Oct 2020 — Jun 2023',
      technologies: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'Microservices'],
      description: [
        'Developed a responsive insurance policy management platform with cross-browser and mobile support, improving accessibility and usability.',
        'Created reusable Angular components and optimized backend APIs, enhancing performance, maintainability and response times.',
        'Implemented end-to-end modules for client evaluation and resource management, ensuring accurate data flow and reliable reporting.',
        'Integrated RESTful frontend-backend communication, improving system reliability, scalability and data consistency.',
      ],
    },
  ];
}
