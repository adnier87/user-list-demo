import { Pipe, PipeTransform } from '@angular/core';
import { IUserModel } from 'src/app/models/users.model';

@Pipe({
  name: 'userSort'
})
export class UserSortPipe implements PipeTransform {

  /**
   * Transforms the given array of user models based on the specified sorting criteria.
   *
   * @param {IUserModel[]} users - The array of user models to be transformed.
   * @param {string} sortBy - The sorting criteria (either "name" or "email").
   * @param {string} sortOrder - The order in which the user models should be sorted ("asc" or "desc").
   * @return {IUserModel[]} The transformed array of user models.
   */
  transform(users: IUserModel[], sortBy: string, sortOrder: string): IUserModel[] {
    if (!users) {
      return [];
    }

    if (sortBy === 'name') {
      return this.sortByName(users, sortOrder);
    } else if (sortBy === 'email') {
      return this.sortByEmail(users, sortOrder);
    } else {
      return this.sortByName(users, sortOrder);
    }
  }

  /**
   * Sorts an array of user objects by name in either ascending or descending order.
   *
   * @param {IUserModel[]} users - The array of user objects to be sorted.
   * @param {string} sortOrder - The order in which to sort the user objects. Can be 'asc' for ascending or 'desc' for descending.
   * @return {IUserModel[]} - The sorted array of user objects.
   */
  private sortByName(users: IUserModel[], sortOrder: string): IUserModel[] {
    return users.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
  }

/**
 * Sorts the given array of users by email in either ascending or descending order.
 *
 * @param {IUserModel[]} users - The array of users to be sorted.
 * @param {string} sortOrder - The order in which the users should be sorted. Can be either 'asc' or 'desc'.
 * @return {IUserModel[]} - The sorted array of users.
 */
  private sortByEmail(users: IUserModel[], sortOrder: string): IUserModel[] {
    return users.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.email.localeCompare(b.email);
      } else {
        return b.email.localeCompare(a.email);
      }
    });
  }

}
