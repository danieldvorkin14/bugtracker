import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bug } from './bug';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})

export class BugService {
  base_url = "https://localhost:3000";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  CreateBug(data): Observable<Bug> {
    return this.http.post<Bug>(this.base_url + '/bugtracking/' + JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1), catchError(this.errorHandl)
    )
  }

  GetIssue(id): Observable<Bug> {
    return this.http.get<Bug>(this.base_url + '/bugtracking/' + id)
    .pipe(
      retry(1), catchError(this.errorHandl)
    )
  }

  GetIssues(): Observable<Bug> {
    return this.http.get<Bug>(this.base_url + '/bugtracking/')
    .pipe(
      retry(1), catchError(this.errorHandl)
    )
  }

  UpdateBug(id, data): Observable<Bug> {
    return this.http.put<Bug>(this.base_url + '/bugtracking/' + id, JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1), catchError(this.errorHandl)
    )
  }

  DeleteBug(id): Observable<Bug> {
    return this.http.delete<Bug>(this.base_url + '/bugtracking/' + id, this.httpOptions)
    .pipe(
      retry(1), catchError(this.errorHandl)
    )
  }

  errorHandl(error){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
