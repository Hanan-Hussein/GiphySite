import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import {Observable, of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(    private http: HttpClient,
    ) { }
  getImage(url: string): Observable<any> {
    
    return this.http.get(url);
  }
}
