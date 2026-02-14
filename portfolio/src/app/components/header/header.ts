import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  constructor(private themeService: ThemeService) {}

  onToggleTheme() {
    this.themeService.toggleTheme();
  }
}
