import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { IonHeader, IonToolbar, IonRow,IonCol,ModalController, IonContent,IonIcon,IonCard,IonGrid,IonButtons,IonMenuButton
 } from '@ionic/angular/standalone';
import { TruncateWordsPipe } from 'src/app/pipes/truncate-words.pipe';
import { TempleService } from 'src/app/services/temples/temple.service';
import { VisitsLocationComponent } from '../visits-location/visits-location.component';


@Component({
  selector: 'app-list-content',
  templateUrl: './list-content.component.html',
  styleUrls: ['./list-content.component.scss'],
  imports: [IonHeader,IonToolbar,IonCol,NgFor,IonIcon,IonRow,IonCard,IonButtons,NgStyle, IonMenuButton, TruncateWordsPipe],
})
export class ListContentComponent  implements OnInit {

  router = inject(Router)
  protected modalController = inject(ModalController);
   @Input() templeVistData: any;

  templeContent = signal<any>([]);

  //constructor(private navParams:NavParams) { }

  constructor(private templeService: TempleService) {
    const temples = this.templeService.ujjainTemlesList();
    this.templeService.getPostData().subscribe((res:any) => {
      const postData = res.data.posts.filter((item: any) => item.category_id === 1);
      this.templeContent.set(postData);
    });
  }
  

  ngOnInit() {

  }

  // selectedTempleIndex = 0; // Default to the first temple

  // // Function to update selected temple
  // selectTemple(index: number) {
  //   this.selectedTempleIndex = index;
    
  // }

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
    //this.closeModal();
    this.router.navigateByUrl('/temple-details')
  }

  // closeModal() {
  //   this.modalController.dismiss();
  // }
  // truncateText(limit: number , text: string): string {
  //   const words = text.split(' ');
  //   return words.slice(0, limit).join(' ');
  // }
  redirectTo(pageUrl: string) {
    this.router.navigateByUrl(pageUrl);
  }

  async openModal( item : any ,index: number) {
    const dataArray = this.templeContent();
     const selectedItem = dataArray.find((item: any) => item.id === index);
  
    const modal = await this.modalController.create({
      component: VisitsLocationComponent,
      componentProps: { templeVistData: item, userIndex: index },
    });
    await modal.present();
  }
}



