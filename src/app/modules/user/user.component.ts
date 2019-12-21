import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
 
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users = [];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.users;
  constructor(private userService : UserService) { }
  ngOnInit() {
    this.userService.get_userlist().subscribe((res : any[])=>{      
      console.log(res);
      this.users = res;
    });
  }
}
