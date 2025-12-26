import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit, signal } from '@angular/core';
import { IonHeader, IonContent,  IonIcon, IonList,IonCard,IonCardTitle,IonCardHeader,IonCardContent,IonItem, IonButtons, IonMenuButton, IonGrid, IonCol, IonRow, IonButton, ModalController } from '@ionic/angular/standalone';
import { BehaviorSubject } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-visits-location',
  templateUrl: './visits-location.component.html',
  styleUrls: ['./visits-location.component.scss'],
  imports: [
    IonHeader, IonContent,
    IonButtons, IonMenuButton,IonCard,IonCardTitle,IonCardHeader,IonCardContent, IonIcon, IonList, IonItem,IonCol, IonGrid, IonRow, NgIf, IonButton,
    NgFor,AsyncPipe
  ],
})
export class VisitsLocationComponent implements OnInit {
  @Input() howToVisitData: any; // Data passed from the parent component
  @Input() userIndex: any; // Data passed from the parent component
  @Input() templeVistData: any; // Data passed from the parent component
  public postsData$ = new BehaviorSubject<any>([]);
  public hasPosts: boolean = false;
  howToVisitDataIndex: any;

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    
    if(this.howToVisitData){
      this.howToVisitDataIndex = this.howToVisitData[this.userIndex];
      const dataArry = this.howToVisitDataIndex?.posts ?? [];
      this.postsData$.next(dataArry);
      this.hasPosts = dataArry.length > 0;
    }
     // Access data here
  }

  // Generate an array of star types based on the rating
  getStars(rating: number): string[] {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    return [
      ...Array(fullStars).fill('star'),
      ...Array(halfStar).fill('star-half'),
      ...Array(emptyStars).fill('star-outline'),
    ];
  }

  goBack() {
    this.modalController.dismiss();
  }

  async openModal( item : any ,index: number) {
      const modal = await this.modalController.create({
        component: VisitsLocationComponent,
        componentProps: { templeVistData: item, userIndex: index },
      });
      return await modal.present();
  }
}