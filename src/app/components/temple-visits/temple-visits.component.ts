
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
  ],
})
export class TempleVisitsComponent  implements OnInit {
 howToVisitData = signal([]);
 modalController = inject(ModalController)
 router = inject(Router)

  constructor(private templeService: TempleService) {
    this.templeService.getHowToVisitData().subscribe((res:any) => {
      this.howToVisitData.set(res?.data?.temples);

    })
  }

  ngOnInit() {

  }


  async openModal(index?: number) {
      const modal = await this.modalController.create({
        component: VisitsLocationComponent,
        componentProps: { howToVisitData: this.howToVisitData(), userIndex: index },
      });
      return await modal.present();
  }
  redirectTo(pageUrl: string) {
    this.router.navigateByUrl(pageUrl);
  }
}
