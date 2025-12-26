
import { Component, signal,OnInit, inject } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonIcon,
  IonList,
  IonItem,
  IonLabel,
  IonButtons,
  IonMenuButton,
  IonButton,
  ModalController,
} from '@ionic/angular/standalone';
import { VisitsLocationComponent } from '../visits-location/visits-location.component';
import { TempleService } from 'src/app/services/temples/temple.service';
import { Router } from '@angular/router';
import { TruncateWordsPipe } from 'src/app/pipes/truncate-words.pipe';

@Component({
  standalone: true,
  selector: 'app-temple-visits',
  templateUrl: './temple-visits.component.html',
  styleUrls: ['./temple-visits.component.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonContent,
    IonButtons,
    IonMenuButton,
    IonIcon,
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    TruncateWordsPipe
  ],
})
export class TempleVisitsComponent  implements OnInit {
 howToVisitData = signal<any>([]);
 modalController = inject(ModalController)
 router = inject(Router)

  constructor(private templeService: TempleService) {
    this.templeService.getHowToVisitData().subscribe((res:any) => {
      console.log(res);
      this.howToVisitData.set(res?.data?.temples);

    })
  }

  ngOnInit() {

  }


  // async openModal(index?: number) {
  //     const modal = await this.modalController.create({
  //       component: VisitsLocationComponent,
  //       componentProps: { howToVisitData: this.howToVisitData(), userIndex: index },
  //     });
  //     return await modal.present();
  // }

  async openModal(id: string) {
  const dataArray = this.howToVisitData();
   const selectedItem = dataArray.find((item: any) => item.id === id);

  const modal = await this.modalController.create({
    component: VisitsLocationComponent,
    componentProps: {
      howToVisitData: this.howToVisitData(),
      userIndex: this.howToVisitData().indexOf(selectedItem),
    },
  });
  await modal.present();
}

  redirectTo(pageUrl: string) {
    this.router.navigateByUrl(pageUrl);
  }
}
