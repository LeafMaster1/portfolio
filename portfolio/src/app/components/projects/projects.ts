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
      url: 'https://github.com/LeafMaster1/Ella-room-booking-system',
      language: ['TypeScript', 'JavaScript'],
      images: [
       'assets/Ella-Booking-App/login(dark).png',
       'assets/Ella-Booking-App/student-homepage(dark).png',
       'assets/Ella-Booking-App/admin-panel-overview(dark).png',
       'assets/Ella-Booking-App/student-book-room(dark).png',
       'assets/Ella-Booking-App/login(dark).png',
       'assets/Ella-Booking-App/admin-edit-users(dark).png',
       'assets/Ella-Booking-App/admin-edit-room(dark).png',


    
      ]
      
    },
    {
      name: 'portfolio',
      description: 'My personal portfolio website built with Angular',
      url: 'https://github.com/myusername/portfolio',
      language: ['TypeScript'],
    },
    {
      name: 'game-engine',
      description: 'A 2D game engine in C++',
      url: 'https://github.com/myusername/game-engine',
      language: ['C#'],
    },
    {
      name: 'weather-app',
      description: 'A weather forecasting app built with React',
      url: 'https://github.com/myusername/weather-app',
      language: ['JavaScript', 'React'],
    }
  
  ];

  selectedProject: Project | null = null; // Variabel för att hålla reda på det valda projektet som ska visas i modalen

  
  openProject(project: Project) {
    this.selectedProject = project; // Sätter selectedProject till det valda projektet för att öppna modalen
  }

  closeModal() {
    this.selectedProject = null; // Stänger modalen genom att sätta selectedProject till null
  }
}
