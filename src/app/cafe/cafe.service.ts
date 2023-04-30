import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Cafe } from './cafe';

@Injectable({
  providedIn: 'root'
})
export class CafeService {

  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getCafeList(): Observable<Cafe[]>{
    return this.http.get<Cafe[]>(this.apiUrl);
  }
}
