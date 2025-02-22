import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonItemSliding
  ,IonIcon,IonList,IonItem,IonLabel,IonNote,IonItemOptions,IonItemOption,IonButtons,IonMenuButton
 } from '@ionic/angular/standalone';
 import { addIcons } from 'ionicons';
 import * as allIcons from 'ionicons/icons';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,IonItemSliding,IonNote
    ,IonIcon,IonList,IonItem,IonLabel,NgFor,IonItemOption,IonItemOptions,IonButtons,IonMenuButton],
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent  implements OnInit {



  notifications = [
    {
      id: 1,
      title: 'Live Darshan Alert',
      message: 'Join the live darshan of Mahakaleshwar Temple now.',
      timestamp: '10 mins ago',
      icon: 'eye-outline',
    },
    {
      id: 2,
      title: 'Booking Confirmation',
      message: 'Your hotel booking at Ujjain Residency is confirmed.',
      timestamp: '1 hour ago',
      icon: 'checkmark-circle-outline',
    },
    {
      id: 3,
      title: 'Prasad Delivery Update',
      message: 'Your prasad order has been shipped.',
      timestamp: 'Yesterday',
      icon: 'cube-outline',
    },
    {
      id: 4,
      title: 'New Booking Alert',
      message: 'A new hotel booking has been made.',
      timestamp: '2 days ago',
      icon: 'bed-outline',
    },
    {
      id: 5,
      title: 'New Darshan Booking',
      message: 'A new darshan booking has been made.',
      timestamp: '3 days ago',
      icon: 'eye-outline',
    },
    {
      id: 6,
      title: 'Prasad Delivery Update',
      message: 'Your prasad order has been shipped.',
      timestamp: '4 days ago',
      icon: 'cube-outline',
    },
    {
      id: 7,
      title: 'New Booking Alert',
      message: 'A new hotel booking has been made.',
      timestamp: '5 days ago',
      icon: 'bed-outline',
    },
    {
      id: 8,
      title: 'New Darshan Booking',
      message: 'A new darshan booking has been made.',
      timestamp: '6 days ago',
      icon: 'eye-outline',
    },

  ];


  deleteNotification(id: number) {
    this.notifications = this.notifications.filter((n) => n.id !== id);
  }


  constructor() { 
    addIcons(allIcons);
  }

  ngOnInit() {}

}
