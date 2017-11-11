import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth} from 'angularfire2/auth';
import {AuthServiceService } from '../../services/auth-service.service';
import { FlashMessagesService} from 'angular2-flash-messages';
import { NgForm } from '@angular/forms';
import { Router,ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
	email:string;
	password:string;
  isLogedinUser:string;
	
  constructor(
  	public authServiceService:AuthServiceService,
  	public angularFireAuth:AngularFireAuth,
  	public flashMessagesService:FlashMessagesService,
  	public router:Router,
    public route:ActivatedRoute
  	) { 
    this.authServiceService.getAuth().subscribe(auth=>{
        // firebase.auth().currentUser;

        this.isLogedinUser=auth.email;
        console.log(this.isLogedinUser);
        });
  }

  ngOnInit() {

  }
  onChangeUserPassword(f:NgForm){debugger
  let newPassword=f.value.newPassword;
    let user = firebase.auth().currentUser;

   firebase.auth().currentUser.reauthenticateWithCredential(firebase.auth.EmailAuthProvider.credential(firebase.auth().currentUser.email,f.value.password))
    .then((res)=>{debugger
      console.log(f.value.password,firebase.auth().currentUser.email)

    user.updatePassword(newPassword).then((res)=> {debugger
     
      console.log(newPassword);
    this.flashMessagesService.show('Password Updated',{cssClass:'alert-success',timeout:1500});
   this.router.navigate(['']);

    }).catch((err)=> {
      this.flashMessagesService.show(err.message,{cssClass:'alert-danger', timeout:2000});
    })
   })
   .catch((err)=>{
      this.flashMessagesService.show('You have Entered a wrong Password please try again',{cssClass:'alert-danger', timeout:3000});
      
    });
}
}
