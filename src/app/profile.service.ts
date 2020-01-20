import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public username: string;
  public clientid:'3e553d627765c29a7ef1';
  public clientsecret:'ea174daa7407d6b9bc96258a1459da1511c099d2';

  constructor(public http:HttpClient) {
    console.log("service is now ready!");
    this.username = 'Libb521';
   }

   getProfileInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
   };

   getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
   }


   updateProfile(username: string){
     this.username = username;
   }


}
