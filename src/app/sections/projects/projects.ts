import { Component } from '@angular/core';
interface Project {
  number: string;
  title: string;
  type: string;
  domain: string;
  description: string;
  contributions: string[];
  technologies: string[];
  github?: string;
  live?: string;
}
@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects: Project[] = [
    {
      number: '01',
      title: 'The Airawat Kitchen Website',
      type: 'Personal Project',
      domain: 'Restaurant / Web Application',
      description:
        'A responsive restaurant website designed to provide customers with an engaging digital experience while showcasing the restaurant, menu, offers and online presence.',
      contributions: [
        'Designed and developed the responsive frontend using Angular.',
        'Created reusable UI sections for restaurant information, menu and offers.',
        'Implemented responsive layouts for desktop and mobile devices.',
        'Optimized the website structure for usability and search visibility.',
      ],
      technologies: ['Angular', 'HTML5', 'CSS3', 'Bootstrap'],
      live: '',
    },

    {
      number: '02',
      title: 'Server Patching Portal',
      type: 'Enterprise Application',
      domain: 'Banking Domain · TCS',
      description:
        'An Angular-based enterprise platform designed to identify and remediate vulnerable servers, improving infrastructure security and compliance.',
      contributions: [
        'Architected and delivered the Angular-based server patching platform.',
        'Integrated secure RESTful APIs with authentication and error handling.',
        'Built reusable Angular UI components aligned with modern UX standards.',
        'Automated UI workflows, reducing manual effort by 70%.',
        'Implemented reporting and operational workflows for server remediation.',
      ],
      technologies: [
        'Angular',
        'TypeScript',
        'HTML5',
        'CSS3',
        'REST APIs',
        'Azure DevOps',
        'CI/CD',
      ],
    },

    {
      number: '03',
      title: 'Policy Endorsement Platform',
      type: 'Enterprise Application',
      domain: 'Insurance Domain · Capgemini',
      description:
        'A responsive insurance policy management platform designed to support policy operations across desktop and mobile environments.',
      contributions: [
        'Developed responsive Angular modules with cross-browser and mobile support.',
        'Created reusable Angular components and optimized backend APIs.',
        'Implemented modules for client evaluation and resource management.',
        'Integrated RESTful frontend-backend communication.',
        'Improved application performance, maintainability and data consistency.',
      ],
      technologies: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'Microservices', 'REST APIs'],
    },
  ];
}
