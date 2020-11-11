import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {interval} from 'rxjs';
import {SharedService} from '../../services/shared.service';

/**
 *  Brief Introduction of myself
 */

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  slideMenu = 0;
  @ViewChild('roles', {static: true}) el: ElementRef;
  counter = 0;
  roles = [];
  speed = 300;
  tabIndex = 0;

  @ViewChild('carousel', {static: true}) slides: ElementRef;

  constructor(private sharedService: SharedService) {
  }

  ngOnInit(): void {
    // this.slideAnimation();
    this.roles = ['Full Stack web apps Developer', 'Frontend Developer', 'Angular Devs', 'TypeScript / Javascript Devs',
      'Fullstack JS Devs'];
    this.typeWriter();
    interval(3000).subscribe(() => {
      this.slideMenu = (this.slideMenu === 0) ? 1 : 0;
      // this.slideAnimation();
    });
  }

  typeWriter(): void {
    this.tabIndex = this.tabIndex < this.roles.length ? this.tabIndex : 0;
    if (this.counter < this.roles[this.tabIndex].length) {
      this.el.nativeElement.innerHTML += this.roles[this.tabIndex].charAt(this.counter);
      this.counter++;
      setTimeout(() => {
        this.typeWriter();
      }, this.speed);
    } else {
      this.reverseWriter(this.tabIndex);
    }
  }

  /**
   * @param index the current position of the cursor
   */
  reverseWriter(index: number): void {
    if (this.counter > 0) {
      this.el.nativeElement.innerHTML = this.roles[index].slice(0, this.counter - 1);
      this.counter--;
      setTimeout(() => {
        this.reverseWriter(index);
      }, this.speed - 100);
    } else {
      this.tabIndex++;
      this.typeWriter();
    }
  }

  slideAnimation(): void {
    const startCounter = this.slideMenu * 3;
    const endCounter = startCounter + 3;
    for (let i = 0; i < 6; i++) {
      this.slides.nativeElement.children[i].classList.remove('show');
    }
    for (let i = startCounter; i < endCounter; i++) {
      this.slides.nativeElement.children[i].classList.add('show');
    }
  }


  rewriteBlogURL(url = 'https://nguenkam.com/blog/'): void {
    this.sharedService.category = 'blog';
    this.sharedService.currentBlogURL = url;
  }
}
