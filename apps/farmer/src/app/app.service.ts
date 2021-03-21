import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Farmer } from '@farmer/api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) { }

  farmerSearch(nameOrDocId: string) {
    return this.http.get<Farmer[]>('/api/farmers/search', {
      params: { query: nameOrDocId },
    });
  }
}