import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  txt: string;

  constructor() {
    this.txt = 'Copyright &copy; 2020 <a href="https://nguenkam.com/" target="_blank">Aurelien Brice Nguenkam</a>';
  }
}
