import { Component } from '@angular/core';
import { Project } from '../../models/project';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects: Project[] = [
    {
      name: 'ELLA - Edugrade Location & Logistics Assistant',
      description: 'Fullstack room booking system built with Node.js, Express, SQLite and vanilla JavaScript, featuring role-based access control and session authentication.',
      url: 'https://github.com/angular/angular-cli',
      language: 'TypeScript' + ' / JavaScript',
      
    },
    {
      name: 'portfolio',
      description: 'My personal portfolio website built with Angular',
      url: 'https://github.com/myusername/portfolio',
      language: 'TypeScript',
      stars: 5
    },
    {
      name: 'game-engine',
      description: 'A 2D game engine in C++',
      url: 'https://github.com/myusername/game-engine',
      language: 'C++',
      stars: 12
    }
  ];
}
