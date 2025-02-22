import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { IonHeader, IonToolbar, IonRow,IonCol,ModalController, IonContent,IonIcon,IonCard,IonGrid,IonButtons,IonMenuButton
 } from '@ionic/angular/standalone';


@Component({
  selector: 'app-list-content',
  templateUrl: './list-content.component.html',
  styleUrls: ['./list-content.component.scss'],
  imports: [IonHeader,IonToolbar,IonCol,NgFor,IonIcon,IonRow,IonCard,IonButtons,NgStyle],
})
export class ListContentComponent  implements OnInit {

  router = inject(Router)
  protected modalController = inject(ModalController);

  listContent = signal<any>([]);
  constructor(private navParams:NavParams) { }

  ngOnInit() {
    const listData = this.navParams.get('listData');
    this.listContent.set(listData);
  }

  selectedTempleIndex = 0; // Default to the first temple

  // Function to update selected temple
  selectTemple(index: number) {
    this.selectedTempleIndex = index;
    
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

  selectTempleDetails(){
    this.closeModal();
    this.router.navigateByUrl('/temple-details')
  }

  closeModal() {
    this.modalController.dismiss();
  }
  truncateText(limit: number , text: string): string {
    const words = text.split(' ');
    return words.slice(0, limit).join(' ');
  }
}



