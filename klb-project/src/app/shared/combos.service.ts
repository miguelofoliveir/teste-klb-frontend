import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CombosService {
  url = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  getActions() {
    return this.http.get(this.url);
  }
}


