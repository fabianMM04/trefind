import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SEARCH } from "./global";


@Injectable({
  providedIn: 'root'
})
export class TrelloService {
  public url: string;
  constructor(private http: HttpClient)
   { 
     this.url = SEARCH.url;
   }

   getBoards(table): Observable<any>{
    return this.http.get(this.url+table);
   }
}
