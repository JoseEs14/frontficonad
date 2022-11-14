import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = '/api/users';
  constructor(private http: HttpClient) { }

  // get
  getUsers() {
    return this.http.get(this.url+'/con');
  }
  //get un nombre
  getUser(id: String) {
    return this.http.get(this.url + '/con/' + id);
  }
  //Agregar un nombre
  addUser(user:User) {
    return this.http.post(this.url+ '/add' , user);
  }
  //Eliminar un nombre
  delUser(id: String) {
    return this.http.delete(this.url + '/del/' + id);
  }
  //Modificar un nombre
  updUser(id: String, user:User) {
    return this.http.put(this.url + '/upd/' + id, user);
  }
}
export interface User{
  id?:string;
  nombre?:string;
}