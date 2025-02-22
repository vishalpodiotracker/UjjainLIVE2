import { Component, signal } from '@angular/core';
import { ProfileComponent } from '../components/profile/profile.component';
@Component({
  selector: 'app-tab1',
  standalone: true,
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [ ProfileComponent ]
})
export class Tab1Page {

  constructor() {}


}
