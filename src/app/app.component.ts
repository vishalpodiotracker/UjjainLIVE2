import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { menuController } from '@ionic/core/components';
import {
  IonApp,
  IonRouterOutlet,
  IonList,
  IonIcon,
  IonLabel,
  IonContent,
  IonMenu,
  IonItem,
  IonSplitPane,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import * as allIcons from 'ionicons/icons';
import { ThemeService } from './services/utils/theme.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [
    IonSplitPane,
    IonItem,
    IonApp,
    IonRouterOutlet,
    IonIcon,
    IonLabel,
    IonContent,
    IonMenu,
    IonRouterOutlet,
    IonList,
    IonItem,
    NgFor,
  ],
})
export class AppComponent {
  public router = inject(Router);
  menuList = signal<any>([]);
  constructor(private theamService: ThemeService) {
    addIcons(allIcons);
    this.theamService.getMenuItems().subscribe((res:any) => {
      this.menuList.set(res?.data?.menu); //res.data.menu;
    });
  }
  nevigateTo(url: string) {
    this.router.navigateByUrl(url);
    menuController.close();
  }
}
