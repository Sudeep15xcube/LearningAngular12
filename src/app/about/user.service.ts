import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {   

  constructor(private http:HttpClient) {

   }
   getJob(){
    let apiurl="https://jsonplaceholder.typicode.com/users";
    
    return this.http.get(apiurl);
   }
}

