import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-embed-website',
  templateUrl: './embed.component.html',
  styleUrls: ['./embed.component.scss']
})
export class EmbedComponent implements OnInit {

  @ViewChild('frame', {static: true}) iFrame: ElementRef;

  constructor(private sharedService: SharedService) {
  }

  ngOnInit(): void {
    this.iFrame.nativeElement.seamless = true;

    switch (this.sharedService.category) {

      case 'blog': {
        this.iFrame.nativeElement.src = this.sharedService.currentBlogURL;
        break;
      }
      case 'social-network': {
        this.iFrame.nativeElement.src = this.sharedService.currentSocialNetworkURL;
        break;
      }
      default : {
        this.iFrame.nativeElement.src = 'www.xing.com';
        break;
      }

    }
  }

}
