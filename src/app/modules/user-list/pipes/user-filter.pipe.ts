import { Pipe, PipeTransform } from '@angular/core';
import { IUserModel } from 'src/app/models/users.model';

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(users: IUserModel[], searchText: string): IUserModel[] {
    if (!users || !searchText) {
      return users;
    }

    searchText = searchText.toLowerCase();

    return users.filter((user: IUserModel) => {
      const nameMatch = user.name.toLowerCase().includes(searchText);
      const emailMatch = user.email.toLowerCase().includes(searchText);

      return nameMatch || emailMatch;
    });
  }

}
