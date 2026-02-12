import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../models/project';

@Component({
  selector: 'app-project-card',
  standalone: false, 
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  @Input() project!: Project;

  @Output() cardClick = new EventEmitter<void>();

  onCardClick() {
    this.cardClick.emit();
  }
}
