import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Brice-Nguenkam';
  @ViewChild('topBtn', {static: true}) topBtn: ElementRef;

  @HostListener('window:scroll') onScroll(): void {
    console.log('scroll');
    this.scrollFunction();
  }


  ngOnInit(): void {
  }

  scrollFunction(): void {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.topBtn.nativeElement.style.display = 'block';
    } else {
      this.topBtn.nativeElement.style.display = 'none';
    }
  }

  onTopActivate(): void {
    window.scroll(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
