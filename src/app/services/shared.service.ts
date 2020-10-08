import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  currentBlogURL = 'http://www.myblog.nguenkam.com/';
  currentSocialNetworkURL: string;
  category = 'blog' ; // 'blog' | 'social-network';

  constructor() {
  }
}
