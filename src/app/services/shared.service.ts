import {Injectable} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  currentBlogURL = 'https://nguenkam.com/blog/';
  currentSocialNetworkURL: string;
  category = 'blog' ; // 'blog' | 'social-network' | 'videos';

  constructor(private router: Router) {

    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      switch (true) {
        case event.urlAfterRedirects.startsWith('/embed/blog'):
          // this.router.navigate(['/embed/blog']);
          break;
        case event.urlAfterRedirects.startsWith('/embed/video'):
          break;
        default:
      }
    });
  }
}
