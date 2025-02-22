import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit, signal } from '@angular/core';
import { addIcons } from 'ionicons';
import * as allIcons from 'ionicons/icons';
import { IonIcon,IonCard,IonCardContent,ModalController} from '@ionic/angular/standalone';
import { HotelService } from 'src/app/services/hotels/hotel.service';
import { ListContentComponent } from '../list-content/list-content.component';
import { TempleService } from 'src/app/services/temples/temple.service';
import { NgFor } from '@angular/common';
import { Data } from '@angular/router';
@Component({
  selector: 'app-fetured',
  standalone: true,
  templateUrl: './fetured.component.html',
  styleUrls: ['./fetured.component.scss'],
  imports:[IonIcon,IonCard,IonCardContent,NgFor],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeturedComponent  implements OnInit {
  hotelList = this.hotelService.ujjainHotelList();
  protected modalController = inject(ModalController);

  features = [
    { title: "Prosad", imageUrl: "../../../assets/icon/laddu.png" },
    { title: "E-Arti", imageUrl: "../../../assets/icon/arti.png" },
    { title: "E-Darshan", imageUrl: "../../../assets/icon/temple.png" },
    { title: "E-Darshan", imageUrl: "../../../assets/icon/temple.png" },
    { title: "E-Darshan", imageUrl: "../../../assets/icon/temple.png" },
    { title: "Booking", imageUrl: "../../../assets/icon/hotel.png", action: () => this.openModal('hotelList') },
    { title: "Prosad", imageUrl: "../../../assets/icon/laddu.png" },
    { title: "E-Darshan", imageUrl: "../../../assets/icon/temple.png" }
  ];
  categoriesSignal = signal([])

  
  constructor(private hotelService: HotelService,private templeService: TempleService) { 
    this.templeService.getCategouriesData().subscribe((res:any)=>{
    console.info("RES-REA",res)
    const categories = res.data.categories
    this.categoriesSignal.set(categories)
    console.info("categories",categories)
    })
    addIcons(allIcons);
  }

    // Function to handle modal opening

  ngOnInit() {}

  async openModal(listData: any) {
      console.info('slide:', listData);
        const modal = await this.modalController.create({
          component: ListContentComponent,
          componentProps: { listData },
        });
        return await modal.present();
      
    }

  

}
