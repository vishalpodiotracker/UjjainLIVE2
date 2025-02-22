import { NgFor } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonItemSliding,IonAvatar
  ,IonIcon,IonList,IonItem,IonLabel,IonNote,IonItemOptions,IonItemOption,IonButtons,IonMenuButton
 } from '@ionic/angular/standalone';
import { TempleService } from 'src/app/services/temples/temple.service';
@Component({
  selector: 'app-temple-events',
  standalone: true,
  templateUrl: './temple-events.component.html',
  styleUrls: ['./temple-events.component.scss'],
  imports: [NgFor,IonContent,IonList,IonItem,IonAvatar,NgFor],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TempleEventsComponent  implements OnInit {

 templeEvents = this.templeService.ujjainTemlesList();
  constructor(
    private templeService : TempleService
  ) { }

  ngOnInit() {}
  ngAfterViewInit(): void {
    new Swiper('.swiper-container', {
      slidesPerView: 1.5, 
      spaceBetween: 8, 
    });
  }

}
