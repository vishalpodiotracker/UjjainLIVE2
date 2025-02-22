import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonItemSliding
  ,IonIcon,IonList,IonItem,IonLabel,IonNote,IonItemOptions,IonItemOption,IonButtons,IonMenuButton
 } from '@ionic/angular/standalone';
@Component({
  selector: 'app-temple-details',
  templateUrl: './temple-details.component.html',
  styleUrls: ['./temple-details.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,IonItemSliding,IonNote
    ,IonIcon,IonList,IonItem,IonLabel,NgFor,IonItemOption,IonItemOptions,IonButtons,IonMenuButton],
})
export class TempleDetailsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
