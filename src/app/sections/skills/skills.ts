import { Component } from '@angular/core';
interface Skill {
 name: string;
 description: string;
 level: string;
}
interface SkillCategory {
 number: string;
 title: string;
 description: string;
 skills: Skill[];
}
@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skillCategories: SkillCategory[] = [
   {
     number: '01',
     title: 'Frontend',
     description:
       'Building responsive, scalable and maintainable user interfaces.',
     skills: [
       {
         name: 'Angular',
         description: 'Component-based enterprise applications',
         level: 'Advanced'
       },
       {
         name: 'TypeScript',
         description: 'Strongly typed application development',
         level: 'Advanced'
       },
       {
         name: 'JavaScript',
         description: 'Modern ES6+ application development',
         level: 'Advanced'
       },
       {
         name: 'HTML5',
         description: 'Semantic and accessible markup',
         level: 'Advanced'
       },
       {
         name: 'CSS / SCSS',
         description: 'Responsive and maintainable styling',
         level: 'Advanced'
       },
       {
         name: 'RxJS',
         description: 'Reactive programming and async workflows',
         level: 'Advanced'
       }
     ]
   },
   {
     number: '02',
     title: 'Backend',
     description:
       'Developing secure REST APIs and scalable backend services.',
     skills: [
       {
         name: 'Java',
         description: 'Object-oriented application development',
         level: 'Advanced'
       },
       {
         name: 'Spring Boot',
         description: 'Enterprise REST API development',
         level: 'Advanced'
       },
       {
         name: 'Spring Security',
         description: 'Authentication and authorization',
         level: 'Intermediate'
       },
       {
         name: 'REST APIs',
         description: 'API design and integration',
         level: 'Advanced'
       },
       {
         name: 'Microservices',
         description: 'Distributed service architecture',
         level: 'Intermediate'
       }
     ]
   },
   {
     number: '03',
     title: 'Database',
     description:
       'Working with relational databases and efficient data access.',
     skills: [
       {
         name: 'MySQL',
         description: 'Relational database development',
         level: 'Advanced'
       },
       {
         name: 'SQL',
         description: 'Queries, joins, indexes and optimization',
         level: 'Advanced'
       },
       {
         name: 'JPA / Hibernate',
         description: 'ORM and database integration',
         level: 'Advanced'
       }
     ]
   },
   {
     number: '04',
     title: 'Cloud & DevOps',
     description:
       'Deploying and maintaining applications using modern development tools.',
     skills: [
       {
         name: 'Azure',
         description: 'Cloud application development',
         level: 'Intermediate'
       },
       {
         name: 'Git',
         description: 'Version control and collaboration',
         level: 'Advanced'
       },
       {
         name: 'Jenkins',
         description: 'Continuous integration and delivery',
         level: 'Intermediate'
       },
       {
         name: 'GitHub Actions',
         description: 'Automated CI/CD workflows',
         level: 'Intermediate'
       },
       {
         name: 'Docker',
         description: 'Containerized application deployment',
         level: 'Intermediate'
       }
     ]
   },
   {
     number: '05',
     title: 'Tools',
     description:
       'Tools and practices used throughout the development lifecycle.',
     skills: [
       {
         name: 'GitHub',
         description: 'Source control and collaboration',
         level: 'Advanced'
       },
       {
         name: 'Postman',
         description: 'API testing and debugging',
         level: 'Advanced'
       },
       {
         name: 'Swagger',
         description: 'API documentation and testing',
         level: 'Advanced'
       },
       {
         name: 'VS Code',
         description: 'Frontend development environment',
         level: 'Advanced'
       },
       {
         name: 'IntelliJ IDEA',
         description: 'Java development environment',
         level: 'Advanced'
       }
     ]
   },
   {
     number: '06',
     title: 'Currently Exploring',
     description:
       'Technologies I am actively learning and incorporating into my skill set.',
     skills: [
       {
         name: 'Generative AI',
         description: 'AI-powered application development',
         level: 'Learning'
       },
       {
         name: 'LLMs',
         description: 'Large language model integration',
         level: 'Learning'
       },
       {
         name: 'Azure AI',
         description: 'Cloud-based AI services',
         level: 'Learning'
       }
     ]
   }
 ];
}
