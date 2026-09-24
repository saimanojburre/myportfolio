import { Component } from '@angular/core';
interface Project {
 number: string;
 title: string;
 category: string;
 description: string;
 details: string;
 technologies: string[];
 features: string[];
 github?: string;
 live?: string;
 featured?: boolean;
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
     title: 'Enterprise Server Patching Portal',
     category: 'Enterprise Application',
     description:
       'An Angular-based enterprise portal designed to simplify server patching operations, reporting and access management.',
     details:
       'The application provides users with a centralized interface to manage patching activities, monitor execution status and access real-time reports.',
     technologies: [
       'Angular',
       'TypeScript',
       'HTML5',
       'CSS3',
       'REST APIs',
       'Git'
     ],
     features: [
       'Role-based access control',
       'Real-time reporting',
       'Server patching workflows',
       'Dashboard and status tracking',
       'REST API integration'
     ],
     featured: true
   },
   {
     number: '02',
     title: 'Restaurant Management System',
     category: 'Full Stack Application',
     description:
       'A full-stack management platform designed to manage restaurant inventory, purchases, employees and attendance.',
     details:
       'The system provides a centralized platform for restaurant operations, combining an Angular frontend with Spring Boot REST APIs and MySQL.',
     technologies: [
       'Angular',
       'TypeScript',
       'Java',
       'Spring Boot',
       'MySQL',
       'JWT'
     ],
     features: [
       'Inventory management',
       'Supplier management',
       'Purchase management',
       'Employee management',
       'Attendance tracking',
       'JWT authentication'
     ],
     github: 'https://github.com/',
     featured: true
   },
  //  {
  //    number: '03',
  //    title: 'Jewellery E-Commerce Platform',
  //    category: 'E-Commerce',
  //    description:
  //      'A modern e-commerce platform for browsing jewellery products, managing customer accounts and processing orders.',
  //    details:
  //      'The application is designed with a scalable architecture supporting product management, customer authentication, orders and future payment integration.',
  //    technologies: [
  //      'Angular',
  //      'TypeScript',
  //      'Java',
  //      'Spring Boot',
  //      'MySQL',
  //      'REST APIs'
  //    ],
  //    features: [
  //      'Product catalogue',
  //      'Category management',
  //      'Mobile OTP authentication',
  //      'Shopping cart',
  //      'Order management',
  //      'Admin functionality'
  //    ],
  //    github: 'https://github.com/'
  //  },
   {
     number: '04',
     title: 'AI-Powered Knowledge Assistant',
     category: 'AI / LLM',
     description:
       'An AI-powered application that allows users to interact with organizational knowledge using natural language.',
     details:
       'The application explores how modern LLM capabilities can be integrated with enterprise applications to provide contextual answers from structured and unstructured data.',
     technologies: [
       'Angular',
       'Spring Boot',
       'Azure',
       'LLM',
       'REST APIs'
     ],
     features: [
       'Natural language interaction',
       'AI-powered responses',
       'Document-based knowledge',
       'Secure API integration',
       'Conversation history'
     ],
     featured: true
   }
 ];
}
