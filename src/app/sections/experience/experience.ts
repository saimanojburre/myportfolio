import { Component } from '@angular/core';

interface ExperienceInterface {
 period: string;
 company: string;
 role: string;
 location: string;
 description: string;
 achievements: string[];
 technologies: string[];
 current?: boolean;
}

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {

 experiences: ExperienceInterface[] = [
   {
     period: 'Mar 2026 — Present',
     company: 'Wipro',
     role: 'Senior Software Engineer',
     location: 'Hyderabad, India',
     current: true,
     description:
       'Working on enterprise applications using modern frontend and backend technologies, with a focus on scalable application architecture and cloud-based solutions.',
     achievements: [
       'Developing enterprise applications using Angular, Java and Spring Boot.',
       'Building and integrating RESTful APIs for frontend and backend communication.',
       'Working with Azure services and modern cloud-based development practices.',
       'Collaborating with cross-functional teams to deliver scalable software solutions.'
     ],
     technologies: [
       'Angular',
       'TypeScript',
       'Java',
       'Spring Boot',
       'REST APIs',
       'Azure'
     ]
   },
   {
     period: 'Jul 2023 — Jul 2025',
     company: 'Tata Consultancy Services',
     role: 'Senior Systems Engineer',
     location: 'Hyderabad, India',
     description:
       'Worked on an Angular-based enterprise portal for server patching, reporting and access management.',
     achievements: [
       'Developed and maintained an Angular-based enterprise portal for server patching.',
       'Implemented role-based access control for different user roles.',
       'Built real-time reporting features to improve operational visibility.',
       'Contributed to reducing manual operational effort by approximately 70%.',
       'Worked closely with backend teams for REST API integration.'
     ],
     technologies: [
       'Angular',
       'TypeScript',
       'HTML5',
       'CSS3',
       'REST APIs',
       'Git'
     ]
   },
   {
     period: 'Oct 2020 — Jun 2023',
     company: 'Capgemini',
     role: 'Software Engineer',
     location: 'Hyderabad, India',
     description:
       'Worked on enterprise software applications with a focus on frontend development and backend integration.',
     achievements: [
       'Developed responsive enterprise applications using Angular and TypeScript.',
       'Integrated frontend applications with Java and Spring Boot REST APIs.',
       'Implemented reusable components and services for maintainable application development.',
       'Worked with cross-functional teams throughout the software development lifecycle.',
       'Participated in code reviews, debugging and application enhancements.'
     ],
     technologies: [
       'Angular',
       'TypeScript',
       'Java',
       'Spring Boot',
       'REST APIs',
       'MySQL'
     ]
   }
 ];
}
