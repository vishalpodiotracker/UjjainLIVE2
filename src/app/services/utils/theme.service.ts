import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  http = inject(HttpClient);
  private baseUrl = 'https://ujjainliveapp.link4.in/api';

  constructor() {
   }

  getMenuItems() {
    return this.http.get(`${this.baseUrl}/information`, {});
  }

}
