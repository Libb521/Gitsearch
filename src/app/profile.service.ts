import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operators/map';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public username: string;
  public clientid:'088761f8956b9ece1dbb';
  public clientsecret:'9f9f07b89d82b755d55281498cf9279ccc03d0a4';

  constructor(public http:HttpClient) {
    console.log("service is now ready!");
    this.username = 'JamesOdera';
   }

   getProfileInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
      // .map(res => res.json())
      // // .catch(this.handleError);
   };

   getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
   }


   updateProfile(username: string){
     this.username = username;
   }


}
