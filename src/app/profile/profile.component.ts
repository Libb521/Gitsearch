import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'gs-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any;
  repos: any;
  username: string;

  constructor(private profileService: ProfileService) {
    

    this.profileService.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });
    this.profileService.getProfileRepos().subscribe(repos=>{
      console.log(repos);
      this.repos = repos;
    })
   }

   findProfile(){
     this.profileService.updateProfile(this.username);
     
     this.profileService.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });
    this.profileService.getProfileRepos().subscribe(repos=>{
      console.log(repos);
      this.repos = repos;
    });
   }

  ngOnInit() {
    this.profileService.updateProfile('Libb521');
    this.profileService.getProfileInfo().subscribe(profile => this.profile =profile);
    this.profileService.getProfileRepos().subscribe(repos => this.repos =repos );
  }

}
