import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { IUserModel } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  private _url = 'assets/users.json';

  constructor(private _http: HttpClient) { }

  /**
   * Retrieves the list of users.
   * @returns {Observable<IUserModel[]>} - The observable that emits the list of users.
   * @throws {Error} - If an error occurs while fetching user data.
   */
  getUsers(): Observable<IUserModel[]> {
    return this._http.get<IUserModel[]>(this._url)
      .pipe(
        catchError(err => {
          return throwError(() => new Error('An error occurred while fetching user data.'))
        })
      );
  }
}
