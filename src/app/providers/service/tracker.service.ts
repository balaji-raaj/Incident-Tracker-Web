import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TrackerDetails } from '../models/tracker-details';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {

  private apiBaseUrl = "https://localhost:44327/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      "Access-Control-Allow-Methods": 'POST',
    })
  }
  constructor(private httpClient: HttpClient) { }

  Create(trackerDetails: any): Observable<TrackerDetails> {
    return this.httpClient.post<TrackerDetails>(this.apiBaseUrl + '/Tracker/', JSON.stringify(trackerDetails), this.httpOptions );
  }

  getById(id: any): Observable<TrackerDetails> {
    return this.httpClient.get<TrackerDetails>(this.apiBaseUrl + '/Tracker/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  getAll(): Observable<TrackerDetails[]> {
    return this.httpClient.get<TrackerDetails[]>(this.apiBaseUrl + '/Tracker/')
      .pipe(
        catchError(this.errorHandler)
      )
  }

  update(id: any, trackerDetails: any): Observable<TrackerDetails> {
    return this.httpClient.put<TrackerDetails>(this.apiBaseUrl + '/Tracker/' + id, JSON.stringify(trackerDetails), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  delete(id: any) {
    return this.httpClient.delete<TrackerDetails>(this.apiBaseUrl + '/Tracker/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
