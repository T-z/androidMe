import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private baseUrl: string = environment.apiUrl;
  cars: any[];

  constructor(private http: HttpClient) {
  }

  sendMail(): void {
  }

  getAll(): Observable<any[]> {
    return this.http.get(`${this.baseUrl}/list`).pipe(
      map((res) => {
        this.cars = res['data'];
        return this.cars;
      });
  }

}
