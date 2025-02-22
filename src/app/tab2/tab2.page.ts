import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonCard,IonCardContent} from '@ionic/angular/standalone';
import Swiper from 'swiper';
import { TopHeaderComponent } from '../screens/top-header/top-header.component';
import { LiveDarshanComponent } from "../components/live-darshan/live-darshan.component";
import { TempleEventsComponent } from "../components/temple-events/temple-events.component";
import { FeturedComponent } from "../components/fetured/fetured.component";
import { IonicSlides } from '@ionic/angular';
import { SwiperOptions } from 'swiper/types';
@Component({
  selector: 'app-tab2',
  standalone:true,
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, TopHeaderComponent, LiveDarshanComponent, TempleEventsComponent, FeturedComponent]
})
export class Tab2Page {
  swiperModules = [IonicSlides];
  constructor() {}
  sliderOptions: SwiperOptions = {
    slidesPerView: 1.1, 
    spaceBetween: 8, 
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
  };


  ngAfterViewInit(): void {
    new Swiper('.swiper-container', {
      slidesPerView: 1.2, 
      spaceBetween: 8, 
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
         nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },

    });
  }


}
