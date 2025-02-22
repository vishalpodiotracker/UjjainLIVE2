import { Component, EnvironmentInjector, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import * as allIcons from 'ionicons/icons';
import { ThemeService } from '../services/utils/theme.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    NgFor,
  ],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);
  public router = inject(Router);
  tabsList = signal<any>([]);
  constructor(private theamService: ThemeService) {
    addIcons(allIcons);
    this.theamService.getMenuItems().subscribe((res:any) => {
      const data = res?.data?.menu;
      const tabsMenu = data.filter((item: any) => item.visible_at === 'Tab');
      this.tabsList.set(tabsMenu); //res.data.menu;
      console.info(res, this.tabsList());
    });
  }

  redirectTo(path: string) {
    console.info('path:', path);
    this.router.navigateByUrl(path);
  }
  list = document.querySelectorAll('.list');

  ngOnInit() {}
}
