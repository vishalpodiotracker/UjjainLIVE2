import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ViewScreensComponent } from "../screens/view-screens/view-screens.component";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ViewScreensComponent,ViewScreensComponent],
})
export class Tab3Page {
  constructor() {}
}
