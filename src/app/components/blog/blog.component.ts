import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../services/shared.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(private sharedService: SharedService) {
  }

  ngOnInit(): void {
  }

  rewriteBlogURL(url = 'https://nguenkam.com/blog/' ): void {
    this.sharedService.category = 'blog';
    this.sharedService.currentBlogURL = url;
  }
}
