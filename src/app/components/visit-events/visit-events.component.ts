import { AsyncPipe, NgFor, NgForOf, NgIf } from '@angular/common';
import { Component, Input, OnInit, signal, Signal } from '@angular/core';
import { IonHeader, IonContent,  IonIcon, IonList,IonCard,IonCardTitle,IonCardHeader,IonCardContent,IonItem, IonButtons, IonMenuButton, IonGrid, IonCol, IonRow, IonChip, IonAvatar, IonInput, IonButton, ModalController, IonBackButton } from '@ionic/angular/standalone';
import Swiper from 'swiper';
@Component({
  selector: 'app-visit-events',
  templateUrl: './visit-events.component.html',
  styleUrls: ['./visit-events.component.scss'],
  imports:[
    IonHeader,
    IonContent,
    IonIcon,
    IonList,
    IonCard,
    IonCardTitle,
    IonCardHeader,
    IonCardContent,
    IonItem,
    IonButtons,
    IonMenuButton,
    IonGrid,
    IonCol,
    IonRow,
    IonChip,
    IonAvatar,
    IonInput,
    IonButton,
    IonBackButton,
    AsyncPipe,
    NgFor,
    NgIf,
  ]

})
export class VisitEventsComponent  implements OnInit {
@Input() eventsVisitData: any; 
@Input() fullData: any; 
timerValueSignal= signal('')

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  console.info("eventsVisitData",this.eventsVisitData)
  console.info("fullData",this.fullData)
  this.startTimer() 
  }
  closeModale(){
    this.modalController.dismiss();
  }
  ngAfterViewInit(): void {
    new Swiper('.swiper-container', {
      slidesPerView: 1.2, 
      spaceBetween: 5, 
    });
  }

  async openModal(data:any){ 
    const modal = await this.modalController.create({
      component: VisitEventsComponent,
      componentProps: { eventsVisitData: data,fullData: this.fullData },
    });
    return await modal.present();
}
truncateText(text: string, limit: number): string {
  return text.length > limit ? text.substring(0, limit) + '...' : text;
}
 startTimer() {
  setInterval(() => {
      const now = new Date();

      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      this.timerValueSignal.set(`${hours}:${minutes}:${seconds}`)
  }, 1000); // Updates every 1 second
}

}
