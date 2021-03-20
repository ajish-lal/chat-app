import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'chat-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserListComponent implements OnInit {
  usersList: any = [];
  activeIndex = null;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.fetchUsers().subscribe((data: any) => {
      this.usersList = data[0].data.concat(data[1].data);
    });
  }

  selectedMessage(index: any) {
    this.activeIndex = index;
  }

}
