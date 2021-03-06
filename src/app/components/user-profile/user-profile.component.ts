import { Component, OnInit } from '@angular/core';
import { AuthServiceService  } from '../../services/auth-service.service';
import { MovieServiceService } from '../../services/movie-service.service';
import { Router,ActivatedRoute,Params } from '@angular/router';
import * as firebase from 'firebase/app';
import { NgForm } from '@angular/forms';
import { AngularFireAuth,AUTH_PROVIDERS} from 'angularfire2/auth';
import { Profile } from '../../Models/Profile';
import { User } from 'firebase/app';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
	$key:string;
	profile ={} as Profile;
  id:string;
  user:any=[];
  isloggedInUser:string;
  isLoggedInUser:string;
  isLoggedIn:boolean;
  disableRole:boolean=false;
  Authuser:User;
  constructor(
  	public authServiceService:AuthServiceService,
  	public movieServiceService:MovieServiceService,
  	public router:Router,
  	public route:ActivatedRoute,
    public angularFireAuth:AngularFireAuth,
  	) {
     
     }

  ngOnInit() {
     this.authServiceService.getAuth().subscribe(auth =>{
        
      
    this.movieServiceService.getUserProfile(auth.uid).valueChanges().subscribe(data=>{
      this.profile=data || {} as Profile;
    });
    })
  }
  createUserProfile(f:NgForm){debugger
    let guest
    const profile={} as Profile;
    profile.firstName=f.value.firstName;
    profile.lastName=f.value.lastName;
    profile.phone=f.value.phone;
    profile.role='guest';
   
   console.log(f.value);
   this.authServiceService.getAuth().subscribe(auth=>{
   this.movieServiceService.newUserProfile(profile,auth.uid)
   })
   
  }
}
