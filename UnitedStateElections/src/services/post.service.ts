import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Votes } from 'src/models/votes.model';
  
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://localhost:7116/api/Result';
   
  constructor(private httpClient: HttpClient) { }
  
  getPosts(): Observable<Votes[]>{
    return this.httpClient.get<Votes[]>(this.url);
  }
  
}