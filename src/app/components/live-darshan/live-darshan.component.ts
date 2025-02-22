import { NgFor } from '@angular/common';
import { AfterViewInit, Component, OnInit, signal} from '@angular/core';
import { IonCard, IonCardContent} from "@ionic/angular/standalone";import { DarshanService } from 'src/app/services/temples/darshan.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

// Import Swiper styles (in your component's styles or global styles)
import 'swiper/swiper-bundle.css';
import Swiper from 'swiper';

@Component({
  selector: 'app-live-darshan',
  standalone: true,
  imports: [IonCardContent, IonCard, NgFor],
  templateUrl: './live-darshan.component.html',
  styleUrls: ['./live-darshan.component.scss'],
})
export class LiveDarshanComponent implements OnInit, AfterViewInit {
  liveDarshanVideos = signal<any>([]);
  constructor(private darshanService: DarshanService, private sanitizer: DomSanitizer) { 
    this.darshanService.getLiveDarshanVideos().subscribe((res: any) => {
      const liveDarshanVideos = res.data.map((video: any) => ({
        ...video,
        sanitizedLink: this.videoLinkSafe(video.link), // Add a new property for the sanitized link
      }));
     this.liveDarshanVideos.set(liveDarshanVideos);
    })
  }


  videoLinkSafe(video: any): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(video);
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    new Swiper('.swiper-container', {
      slidesPerView: 1.5, 
      spaceBetween: 8, 
    });
  
  }



}
