import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

// imoprtacion de modelos
import { User } from 'src/app/core/models/user.model';

// importacion de servicios
import { UserService } from 'src/app/core/services/user/user.service';
import { AlertService } from 'src/app/core/services/alert/alert.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Output() public userView = new EventEmitter<User>();

  usersList: User[];

  // recursos para la tabla
  displayedColumns: string[] = ['id', 'first_name', 'last_name','email', 'view'];
  dataSource;

  // recursos para el paginado
  length = 12;
  pageSize = 6;

  constructor(private userservice: UserService, private as: AlertService) {  }

  ngOnInit(): void {
    this.getUsersList(1);
  }

  getUsersList(page: number){
    this.userservice.getUserPage(page).subscribe(
      response =>{
        this.usersList = response.data;
        this.pageSize = response.per_page;
        this.length = response.total;
        this.dataSource = new MatTableDataSource(this.usersList);
      },
      error =>{
        this.as.alertError(error.message);
      }
    )
  }

  selectUser(user: User){
    this.userView.emit(user);
  }

  changePage(event){
    this.getUsersList(event.pageIndex+1);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
