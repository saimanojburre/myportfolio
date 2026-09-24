import { Component } from '@angular/core';
interface SkillCategory {
  number: string;
  title: string;
  description: string;
  skills: string[];
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
      description: 'Building responsive and maintainable user interfaces.',
      skills: ['Angular', 'TypeScript', 'RxJS', 'JavaScript', 'HTML5', 'CSS3'],
    },
    {
      number: '02',
      title: 'Backend',
      description: 'Developing scalable enterprise backend services.',
      skills: ['Java', 'Spring Boot', 'REST APIs', 'Microservices'],
    },
    {
      number: '03',
      title: 'Database',
      description: 'Working with relational databases and data-driven applications.',
      skills: ['MySQL', 'Oracle', 'PostgreSQL'],
    },
    {
      number: '04',
      title: 'Cloud & DevOps',
      description: 'Supporting cloud deployment and continuous delivery workflows.',
      skills: ['Microsoft Azure', 'Azure App Services', 'CI/CD Pipelines'],
    },
    {
      number: '05',
      title: 'Tools',
      description: 'Development and collaboration tools used across projects.',
      skills: ['Git', 'Bitbucket', 'Postman', 'VS Code', 'Eclipse', 'IntelliJ IDEA'],
    },
    {
      number: '06',
      title: 'Practices',
      description: 'Engineering practices that support reliable product delivery.',
      skills: ['Agile / Scrum', 'Code Reviews', 'REST API Integration'],
    },
    {
      number: '07',
      title: 'AI & Developer Tools',
      description: 'Using modern AI tools to improve development productivity.',
      skills: ['GitHub Copilot', 'Claude AI'],
    },
  ];
}
