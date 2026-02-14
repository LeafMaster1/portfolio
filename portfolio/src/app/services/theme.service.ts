import { Injectable, Renderer2, RendererFactory2, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  private themes = ['', 'theme-orange', 'theme-blue'];
  private currentThemeIndex = 0;
  private isBrowser: boolean;

  constructor(
    rendererFactory: RendererFactory2,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.renderer = rendererFactory.createRenderer(null, null);
    
    if (this.isBrowser) {
      // Load saved theme if exists
      const savedTheme = localStorage.getItem('app-theme');
      if (savedTheme) {
        this.currentThemeIndex = this.themes.indexOf(savedTheme);
        if (this.currentThemeIndex === -1) this.currentThemeIndex = 0;
        this.applyTheme();
      }
    }
  }

  toggleTheme() {
    this.currentThemeIndex = (this.currentThemeIndex + 1) % this.themes.length;
    this.applyTheme();
    if (this.isBrowser) {
      localStorage.setItem('app-theme', this.themes[this.currentThemeIndex]);
    }
  }

  private applyTheme() {
    if (!this.isBrowser) return;

    // Remove all theme classes first
    this.themes.forEach(theme => {
      if (theme) {
        this.renderer.removeClass(document.body, theme);
      }
    });

    // Add current theme class
    const newTheme = this.themes[this.currentThemeIndex];
    if (newTheme) {
      this.renderer.addClass(document.body, newTheme);
    }
  }
}
