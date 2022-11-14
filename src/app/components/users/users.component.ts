import { Component, OnInit } from '@angular/core';
import { User, UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    id: '',
    nombre: ''
  };
  constructor(private us: UsersService, private r: Router) { }

  ngOnInit(): void {
  }

  agregar() {
    delete this.user.id;
    this.us.addUser(this.user).subscribe();
    this.r.navigate(['/portada']);
  }
}
