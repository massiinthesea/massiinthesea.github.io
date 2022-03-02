import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from './services/localstorage.service';
import { ThemeService, ThemeType } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isDefaultTheme: boolean;

  constructor(
    private themeService: ThemeService,
    private localStorageService: LocalstorageService
  ) { }

  ngOnInit(): void {
    this.isDefaultTheme = this.themeService.currentTheme === ThemeType.default ? true : false;
  }

  toggleTheme(): void {
    this.themeService.toggleTheme().then();
    this.localStorageService.setTheme(this.themeService.currentTheme);
  }
}
