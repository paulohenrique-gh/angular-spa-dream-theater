import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BandMember } from '../models/band-member';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BandMemberService {
  private url = 'http://localhost:3000/bandMembers';

  constructor(private httpClient: HttpClient) { }

  getAllBandMembers(): Observable<BandMember[]> {
    return this.httpClient.get<BandMember[]>(this.url);
  }

  getBandMemberDetails(id: number): Observable<BandMember> {
    console.log(id)
    return this.httpClient.get<BandMember>(`${this.url}/${id}`);
  }
}
