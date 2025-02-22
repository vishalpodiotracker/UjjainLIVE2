import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelService {


  ujjainHotelList = signal([
    {
      image: '../../../assets/hotels/h1.jpg',
      name: 'The Oberoi Udaivilas',
      location: 'Udaipur, India',
      rating: 5.0,
      price: 500
    },
    {
      image: '../../../assets/hotels/h2.jpg',
      name: 'Taj Lake Palace',
      location: 'Udaipur, India',
      rating: 4.8,
      price: 400
    },
    {
      image: '../../../assets/hotels/h3.jpg',
      name: 'Leela Palace',
      location: 'New Delhi, India',
      rating: 4.7,
      price: 350
    },
    {
      image: '../../../assets/hotels/h4.jpg',
      name: 'ITC Maurya',
      location: 'New Delhi, India',
      rating: 4.5,
      price: 300
    },
    {
      image: '../../../assets/hotels/h5.jpg',
      name: 'Umaid Bhawan Palace',
      location: 'Jodhpur, India',
      rating: 5.0,
      price: 450
    },
    {
      image: '../../../assets/hotels/6.jpg',
      name: 'Rambagh Palace',
      location: 'Jaipur, India',
      rating: 4.9,
      price: 420
    },
    {
      image: '../../../assets/hotels/h1.jpg',
      name: 'The Taj Mahal Palace',
      location: 'Mumbai, India',
      rating: 4.8,
      price: 380
    },
    {
      image: '../../../assets/hotels/h2.jpg',
      name: 'Wildflower Hall',
      location: 'Shimla, India',
      rating: 4.6,
      price: 320

    },
  ]);
  

  constructor() {

   }
}
