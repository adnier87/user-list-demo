import { TestBed } from '@angular/core/testing';

import { UserListService } from './user-list.service';
import { of, throwError } from 'rxjs';
import { IUserModel } from '../models/users.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('UserListService', () => {
  let service: UserListService;
  let httpSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(UserListService);
    httpSpy = jasmine.createSpyObj('HttpClient', ['get']);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the list of users', () => {
    const expectedUsers: IUserModel[] = [
      { id: 1, name: 'John', email: 'john@example.com', avatar: 'avatar1.jpg' },
      { id: 2, name: 'Jane', email: 'jane@example.com', avatar: 'avatar2.jpg' }
    ];
    spyOn(service['_http'], 'get').and.returnValue(of(expectedUsers));

    service.getUsers().subscribe(users => {
      expect(users).toEqual(expectedUsers);
    });
  });

  it('should throw an error if fetching user data fails', () => {
    const errorMessage = 'An error occurred while fetching user data.';
    spyOn(service['_http'], 'get').and.returnValue(throwError(errorMessage));

    service.getUsers().subscribe(
      () => {},
      error => {
        expect(error.message).toBe(errorMessage);
      }
    );
  });
});