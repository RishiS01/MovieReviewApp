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
	
  constructor(
  	public authServiceService:AuthServiceService,
  	public angularFireAuth:AngularFireAuth,
  	public flashMessagesService:FlashMessagesService,
  	public router:Router,
    public route:ActivatedRoute
  	) { }

  ngOnInit() {

  }
  onChangeUserPassword(f:NgForm){debugger
  let newPassword=f.value.newPassword;

  // this.angularFireAuth.auth.signInWithEmailAndPassword(this.email,this.password)
  this.authServiceService.getAuth().subscribe(auth=>{
  
    let user = firebase.auth().currentUser;
    user.updatePassword(newPassword).then(function() {
      // Update successful.
      console.log(newPassword);
    }).catch(function(error) {debugger
      // An error happened.
  });
  this.flashMessagesService.show('Password Updated',{cssClass:'alert-success',timeout:1500});
  this.router.navigate(['']);
  })
}
}
