import { Component, OnInit } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { IUserModel } from 'src/app/models/users.model';
import { UserListService } from 'src/app/services/user-list.service';

enum SortOrder {
  Ascending = 'asc',
  Descending = 'desc',
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users$: Observable<IUserModel[]> = of([]);
  sortOrder: SortOrder = SortOrder.Ascending;
  filterText: string = '';
  sortingCriterion: string = 'name';
  sortingOrder: SortOrder = SortOrder.Ascending;

  constructor(private _userListService: UserListService) { }


  toggleSortOrder(): void {
    this.sortingOrder = this.sortingOrder === SortOrder.Ascending ? SortOrder.Descending : SortOrder.Ascending;
  }

  ngOnInit(): void {
    this.users$ = this._userListService.getUsers();
  }
}
