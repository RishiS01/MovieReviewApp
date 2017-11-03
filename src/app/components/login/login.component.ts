import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';
import { FlashMessagesService} from 'angular2-flash-messages';
import { NgForm } from '@angular/forms';
import { MovieServiceService } from '../../services/movie-service.service';
import { AngularFireAuth,AUTH_PROVIDERS} from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	id:string;
	email:string;
	password:string;
	profile={
		displayName:'',
		email:''
	}
isloggedInUser:string;
isLoggedInUserEmail:string;
isLoggedIn:boolean;
  constructor(
  	private authServiceService:AuthServiceService,
  	private router:Router,
  	private flashMessagesService:FlashMessagesService,
  	private movieServiceService:MovieServiceService,
    private angularFireAuth:AngularFireAuth
  	) { }

  ngOnInit() {
  }
 
  signInWithEmail(){
  	this.authServiceService.userLogin(this.email,this.password)
  	.then((res) =>{
  	  this.flashMessagesService.show('You are Logged in',{cssClass:'alert-success',timeout:2000});
  		this.router.navigate(['']);
  	})
  	.catch((err) =>{
  		this.flashMessagesService.show(err.message,{cssClass:'alert-danger', timeout:2000});
  		this.router.navigate(['/login']);
  	})
  }
  
  signInWithFacebook() {
    this.authServiceService.signInWithFacebook()
    .then((res) => {
      this.router.navigate([''])
      this.flashMessagesService.show('Welcome to Movie Review',{cssClass:'alert-success',timeout:1500});
    })
    .catch((err) => console.log(err));
  }
    
  signInWithGoogle(){
    this.authServiceService.signInWithGoogle()
    .then((res) => { 
      this.router.navigate([''])
      this.flashMessagesService.show('Welcome to Movie Review',{cssClass:'alert-success',timeout:1500});
    })
    .catch((err) => console.log(err));
  }
    
  onRegisterSubmit(){
    this.authServiceService.newUser(this.email,this.password)
    .then((res)=>{
      this.flashMessagesService.show('Registered Successfully Login again to continue',{cssClass:'alert-success',timeout:1500});
      this.router.navigate(['']);
    })
    .catch((err)=>{
      this.flashMessagesService.show(err.message,{cssClass:'alert-danger',timeout:1500});
      this.router.navigate(['/login']);
    })
  }

  

}

