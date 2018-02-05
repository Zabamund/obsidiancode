import { Component } from '@angular/core';
import { TranslationService } from '../shared';

@Component({
  selector: 'ocio-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private translationService: TranslationService
  ) { }

  switchLanguage(language: string) {
    this.translationService.switchLanguage(language);
  }

}
