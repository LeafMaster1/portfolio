import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Project } from '../../models/project';

@Component({
  selector: 'app-project-modal',
  standalone: false,
  templateUrl: './project-modal.html',
  styleUrl: './project-modal.scss',
})
export class ProjectModal {
  @Input() project: Project | null = null; // Tar emot ett Project-objekt som input 
  @Output() close = new EventEmitter<void>(); // EventEmitter för att signalera när modalen ska stängas

  onClose() {
    this.close.emit(); // Emittera close-eventet när modalen stängs
  }
}

