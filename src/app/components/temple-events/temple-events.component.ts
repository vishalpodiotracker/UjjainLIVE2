import { NgFor, NgStyle } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import Swiper from 'swiper';
import {  IonContent,IonAvatar,IonList,IonItem,ModalController} from '@ionic/angular/standalone';
import { TempleService } from 'src/app/services/temples/temple.service';
import { VisitEventsComponent } from '../visit-events/visit-events.component';
@Component({
  selector: 'app-temple-events',
  standalone: true,
  templateUrl: './temple-events.component.html',
  styleUrls: ['./temple-events.component.scss'],
  imports: [NgFor,IonContent,IonList,IonItem,IonAvatar,NgFor,NgStyle],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TempleEventsComponent  implements OnInit {
  modalController = inject(ModalController)

 templeEvents = [
  {
    name: "Maha Shivratri 2025",
    date: "2025-02-26",
    location: "Ujjain, India",
    imageUrl: "../../../assets/temple/e1.jpg",
    description: "Maha Shivratri was celebrated on Wednesday, February 26, 2025, in Ujjain's Mahakal temple. Devotees observed the festival by fasting, chanting, meditating, and visiting temples."
  },
  {
    name: "Mahakaleshwar Ver Nikashi",
    date: "2025-02-26",
    location: "Ujjain, India",
    imageUrl: "../../../assets/temple/e2.jpg",
    description: "Maha Shivratri was celebrated on Wednesday, February 26, 2025, in Ujjain's Mahakal temple. Devotees celebrated by fasting, chanting, meditating, and visiting temples."
  },
  {
    name: "Mahakal Shahi Swari 2025",
    date: "2025-09-02",
    location: "Ujjain, India",
    imageUrl: "../../../assets/temple/e3.png",
    description: "In 2025, Lord Mahakal's royal procession will take place on September 2, which falls on a Monday in the Bhadra month."
  },
  {
    name: "1500 Damru Vadak World Record",
    date: "2025-08-04",
    location: "Ujjain, India",
    imageUrl: "../../../assets/temple/e4.png",
    description: "A new Guinness World Record was created at Mahakal Temple in Ujjain on Monday — the third Shravan Somwar — when around 1,500 people played the 'damru' together, breaking a record set in New York."
  }
];


  constructor(
    private templeService : TempleService
  ) { }

  ngOnInit() {
    this.openModal(this.templeEvents[0])
  }
  ngAfterViewInit(): void {
    new Swiper('.swiper-container', {
      slidesPerView: 1.5, 
      spaceBetween: 8, 
    });
  }
  async openModal(data:any){ 
      const modal = await this.modalController.create({
        component: VisitEventsComponent,
        componentProps: { eventsVisitData: data,fullData: this.templeEvents },
      });
      return await modal.present();
  }
}
