import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { EnvironmentService} from '..environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public username: string;
  public apiKey: '2ca02deba1e11dc968562ca761ea7d516c1d4287';


  constructor(public http:HttpClient) {
    console.log("service is ready for use!");
    this.username = 'Libb521';
   }

   getProfileInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?access_tokens=2ca02deba1e11dc968562ca761ea7d516c1d4287")
   };

   getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?access_tokens=2ca02deba1e11dc968562ca761ea7d516c1d4287")
   }


   updateProfile(username: string){
     this.username = username;

   }


}
