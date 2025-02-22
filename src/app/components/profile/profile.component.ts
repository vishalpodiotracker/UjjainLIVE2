import { Component, signal } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonCard,
  IonIcon,
  IonList,
  IonItem,
  IonLabel,
  IonButtons,
  IonMenuButton,
  IonInput,
  IonButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonContent,
    IonButtons,
    IonMenuButton,
    IonCard,
    IonIcon,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
  ],
  standalone: true, // Ensure standalone is set to true
})
export class ProfileComponent  {
  showContent = signal('order');
  constructor() {}

  showContentHandler(content: string) {
    this.showContent.set(content);
  }


  ngOnInit() {}

}
