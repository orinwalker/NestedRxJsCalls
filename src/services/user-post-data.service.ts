import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debug } from 'util';


@Injectable({
  providedIn: 'root'
})
export class UserPostDataService {

  constructor(private http: HttpClient) {

  }

  GetAllPosts() {
    // console.log('GetAllPosts');
    return this.http.get('http://jsonplaceholder.typicode.com/posts');
  }

  GetUserById(id: any) {
    // console.log(`GetUserById: ${id}`);
    return this.http.get(`http://jsonplaceholder.typicode.com/users/${id}`);
  }
}
