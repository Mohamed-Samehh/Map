import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private jsonURL = '../assets/map-points.json';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.jsonURL);
  }
}
