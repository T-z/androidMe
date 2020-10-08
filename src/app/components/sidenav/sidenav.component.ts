import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../services/shared.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private sharedService: SharedService) {
  }

  ngOnInit(): void {
  }

  rewriteSocialNetworkURL(url = ''): void {
    this.sharedService.category = 'social-network';
    this.sharedService.currentSocialNetworkURL = url;
  }
}
