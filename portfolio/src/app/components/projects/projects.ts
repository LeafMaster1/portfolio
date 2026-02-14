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
      name: 'Kalles - Ordersystem',
      description: 'Konsolbaserat ordersystem i C# (.NET 8). Hanterar produkter, kunder och ordrar med persistent lagring via JSON.',
      url: 'https://github.com/LeafMaster1/Kalles-Ordersytem-Skol-Projekt',
      language: ['C#'],
      images: [
        'assets/kalles-ordersytem/run-menu.png',
        'assets/kalles-ordersytem/create-order-zoom.png',
        'assets/kalles-ordersytem/code-screen-menu.png',
        'assets/kalles-ordersytem/code-screen.png',
        'assets/kalles-ordersytem/orders.png',
        'assets/kalles-ordersytem/code-screen-order.png',
      ]
    },
    {
      name: 'BlackBox - Data transformation',
      description: 'konsolprogram skrivet i C# (.NET 8) som transformerar data från XML-format till CSV-format. Programmet är utformat för att hantera orderdata och extrahera relevant information till ett strukturerat CSV-format.',
      url: 'https://github.com/LeafMaster1/blackbox-data-transformation',
      language: ['C#'],
      images: [
        'assets/BlackBox-Data-Transformation/code-program.png',
        'assets/BlackBox-Data-Transformation/code-formatOrder.png',
        'assets/BlackBox-Data-Transformation/code-output.png',
        'assets/BlackBox-Data-Transformation/code-order.png',
        'assets/BlackBox-Data-Transformation/code-xml-example.png',
      ]
    },
    {
      name: 'weather-app',
      description: 'A weather forecasting app built with React',
      url: 'https://github.com/LeafMaster1/weather-app',
      language: ['JavaScript', 'React'],
      images: [
        'assets/weather-app/home.png',
        'assets/weather-app/forecast.png',
        'assets/weather-app/settings.png',
      ]
    },
  ];

  selectedProject: Project | null = null; // Variabel för att hålla reda på det valda projektet som ska visas i modalen

  
  openProject(project: Project) {
    this.selectedProject = project; // Sätter selectedProject till det valda projektet för att öppna modalen
  }

  closeModal() {
    this.selectedProject = null; // Stänger modalen genom att sätta selectedProject till null
  }
}
