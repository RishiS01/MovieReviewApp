import { Injectable } from '@angular/core';
import { AngularFireAuth,AUTH_PROVIDERS} from 'angularfire2/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { FlashMessagesService} from 'angular2-flash-messages';
import { MovieServiceService } from './movie-service.service';
import { Profile } from './../Models/Profile';
@Injectable()
export class AuthServiceService {
  private userDetails: firebase.User = null;
  private user: Observable<firebase.User>;
  guest:boolean=false;
  profile ={} as Profile;
  constructor( 
    public angularFireAuth:AngularFireAuth,
    private router:Router,
    private flashMessagesService:FlashMessagesService,
    private movieServiceService:MovieServiceService
    ) {
      

    }

  onAdminLogin(email:string, password:string){
    
    return new Promise((resolve, reject) =>{
    this.angularFireAuth.auth.signInWithEmailAndPassword(email,password)

    .then(userData => resolve(userData),
    err => reject(err))
  });

  

  }
  getAuth(){

  	return this.angularFireAuth.authState;

  }
  logout(){
  	this.angularFireAuth.auth.signOut();
  }
  
          // SignIn existing User
  userLogin(email:string,password:string){
    return new Promise((resolve, reject) =>{
    this.angularFireAuth.auth.signInWithEmailAndPassword(email,password)
    .then(userData => resolve(userData),
     
    err => reject(err))
   
    });
  }
    

  signInWithFacebook() {
    return this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());

  }
  signInWithGoogle() {
   return this.angularFireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

  }
         // Register a new User
  newUser(email:string,password:string){
    return new Promise((resolve,reject)=>{
      this.angularFireAuth.auth.createUserWithEmailAndPassword(email,password)

      .then(userData=>resolve(userData),
      err=>reject(err))  

    });
    
  }
}
