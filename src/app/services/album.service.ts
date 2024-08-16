import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../models/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private url = 'http://localhost:3000/albums'

  constructor(private httpClient: HttpClient) { }

  getAllAlbuns(): Observable<Album[]> {
    return this.httpClient.get<Album[]>(this.url);
  }

  getAlbumById(id: number): Observable<Album> {
    return this.httpClient.get<Album>(`${this.url}/${id}`)
  }
}
