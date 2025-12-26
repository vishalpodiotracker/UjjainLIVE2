import { NgFor, NgIf, NgStyle } from '@angular/common';
import { AfterViewInit, Component, inject, Input, OnInit, signal, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { IonIcon,IonHeader,IonTitle, IonToolbar,IonMenuButton,IonButtons,IonCard,IonCardContent,ModalController} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import * as allIcons from 'ionicons/icons';
import { ListContentComponent } from 'src/app/components/list-content/list-content.component';
import { TempleDetailsComponent } from 'src/app/components/temple-details/temple-details.component';
import { VisitsLocationComponent } from 'src/app/components/visits-location/visits-location.component';
import { TempleService } from 'src/app/services/temples/temple.service';
import Swiper from 'swiper';

@Component({
  selector: 'app-top-header',
  standalone:true,
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss'],
  imports: [ IonIcon,IonHeader,IonTitle, 
    IonToolbar,IonMenuButton,IonButtons,IonCard,IonCardContent,NgFor,NgIf,NgStyle
  ],
  //encapsulation: ViewEncapsulation.None
  
})
export class TopHeaderComponent  implements OnInit , AfterViewInit{

  rotue = inject(Router)
  protected modalController = inject(ModalController);
  slideContents = signal<any>([]);
  @Input() templeVistData: any; // Data passed from the parent component
constructor(private templeService: TempleService) {
  const temples = this.templeService.ujjainTemlesList();
  this.templeService.getPostData().subscribe((res:any) => {
    const postData = res.data.posts.filter((item: any) => item.category_id === 1);
    this.slideContents.set(postData);
  });


  addIcons(allIcons);
  }
  ngOnInit() {

  }

  // async openSlide(index: number) {
  //   const listData = this.slideContents();
  //   let element = listData.splice(index, 1)[0];
  //   listData.unshift(element);
  //     const modal = await this.modalController.create({
  //       component: TempleDetailsComponent,
  //       componentProps: { listData },
  //     });
  //     return await modal.present();
  // }
ngAfterViewInit(): void {
  new Swiper('.swiper-container', {
    spaceBetween: 5,
    slidesPerView: 3,
  });
}

async openModal( item : any ,index: number) {
    const dataArray = this.slideContents();
     const selectedItem = dataArray.find((item: any) => item.id === index);
  
    const modal = await this.modalController.create({
      component: VisitsLocationComponent,
      componentProps: { templeVistData: item, userIndex: index },
    });
    await modal.present();
  }

}
