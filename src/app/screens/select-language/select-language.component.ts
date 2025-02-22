import { NgFor } from '@angular/common';
import { Component,inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel,IonSelect,IonSelectOption, IonButton } from '@ionic/angular/standalone';
@Component({
  selector: 'app-select-language',
  standalone: true,
  imports: [IonButton, IonLabel, IonItem, IonHeader, IonSelect, IonToolbar, IonTitle, IonContent,IonSelectOption,NgFor],
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.scss'],
})
export class SelectLanguageComponent  implements OnInit {
  router = inject(Router);
  languages = [
    {
      code: 'en',
      name: 'English',
      flag: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
    },
    {
      code: 'hi',
      name: 'Hindi',
      flag: 'https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg',
    },
    {
      code: 'es',
      name: 'Spanish',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg',
    },
    // Add more languages as needed
  ];

  selectedLanguage = this.languages[0];

  onLanguageChange(event: any) {
    this.selectedLanguage = event.detail.value;
  }

  ngOnInit() {}
  next(){
    this.router.navigate(['/tabs/home']);
  }
}
