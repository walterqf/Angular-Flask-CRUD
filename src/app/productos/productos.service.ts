import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Productos } from './productos';
import { CookieService } from 'ngx-cookie-service';

interface HttpError {
  status: number;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private apiURL = 'http://127.0.0.1:5000/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Productos[]> {
    return this.httpClient
      .get<Productos[]>(this.apiURL)
      .pipe(catchError(this.errorHandler));
  }

  create_product(productos: Productos): Observable<Productos> {
    return this.httpClient
      .post<Productos>(this.apiURL, JSON.stringify(productos), this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  get_product(id: number): Observable<Productos> {
    console.log('hola' + '    ' + id);
    return this.httpClient
      .get<Productos>(this.apiURL + id)
      .pipe(catchError(this.errorHandler));
  }

  update_product(id: number, productos: Productos): Observable<Productos> {
    return this.httpClient
      .put<Productos>(
        this.apiURL + id,
        JSON.stringify(productos),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  delete_product(id: number): Observable<Productos> {
    return this.httpClient
      .delete<Productos>(this.apiURL + id, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpError | ErrorEvent) {
    let errorMessage = '';
    if (error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
