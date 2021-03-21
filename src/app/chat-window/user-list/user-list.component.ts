import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { UserService } from 'src/app/common/user.service';

@Component({
  selector: 'chat-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserListComponent implements OnInit {
  @Output() selectedUser = new EventEmitter();
  usersList: any = [];
  activeIndex = 0;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.initData();
  }

  private initData() {
    this.userService.fetchUsers().subscribe((data: any) => {
      this.usersList = data[0].data.concat(data[1].data);
      this.selectedUser.emit(this.usersList[0]);
    });
  }

  selectedMessage(user: any, index: any) {
    this.activeIndex = index;
    this.selectedUser.emit(user);
  }

}
