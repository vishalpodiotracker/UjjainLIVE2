import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { 
  IonIcon,IonGrid,IonCol,IonItem,IonRow,IonLabel,IonChip,IonAvatar} from '@ionic/angular/standalone';
@Component({
  selector: 'app-view-screens',
  templateUrl: './view-screens.component.html',
  standalone:true,
  styleUrls: ['./view-screens.component.scss'],
  imports: [ 
    IonIcon, 
    IonGrid,IonCol,IonItem,IonRow,IonChip,IonAvatar,IonLabel
  
  ]
})
export class ViewScreensComponent  implements OnInit {
  @ViewChild('iframeElement') iframeElement!: ElementRef;
  constructor() { }
  router = inject(Router);

  ngOnInit() {
  }
  redireactTo(path:string){
   this.router.navigate([path]);
  }


}
