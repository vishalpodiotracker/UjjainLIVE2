import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TempleService {
  http = inject(HttpClient);
  private baseUrl = 'https://ujjainliveapp.link4.in/api';

  ujjainTemlesList = signal([
      {
        image: '../../../assets/temple/temp1.jpg',
        name: 'Mahakal Temple',
        location: 'Ujjain, India',
        rating: 3.5,
      },
      {
        image: '../../../assets/temple/temp2.jpg',
        name: 'Cintaman Ganesh',
        location: 'Ujjain, India',
        rating: 5.0,
      },
      {
        image: '../../../assets/temple/temp3.jpg',
        name: 'Harshidhi Temple',
        location: 'Ujjain, India',
        rating: 4.5,
      },
      {
        image: '../../../assets/temple/temp3.jpg',
        name: 'Golden Temple',
        location: 'Amritsar, India',
        rating: 4.0,
      },
      {
        image: '../../../assets/temple/temp3.jpg',
        name: 'Mahakal Temple',
        location: 'Ujjain, India',
        rating: 3.5,
      },
      {
        image: '../../../assets/temple/temp2.jpg',
        name: 'Cintaman Ganesh',
        location: 'Ujjain, India',
        rating: 5.0,
      },
      {
        image: '../../../assets/temple/temp1.jpg',
        name: 'Harshidhi Temple',
        location: 'Ujjain, India',
        rating: 4.5,
      },
      {
        image: '../../../assets/temple/temp3.jpg',
        name: 'Golden Temple',
        location: 'Amritsar, India',
        rating: 4.0,
      },
    ])

  constructor() { }

  getCategouriesData() {
    return this.http.get(`${this.baseUrl}/categories`, {});
  }
  getPostData() {
    return this.http.get(`${this.baseUrl}/post`, {});
  }
  getHowToVisitData() {
    return this.http.get(`${this.baseUrl}/how-to-visit`, {});
  }
  
}
