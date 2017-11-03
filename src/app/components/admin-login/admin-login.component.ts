import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';
import { FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

	email:string;
	password:string;
  constructor(
  	private authServiceService:AuthServiceService,
  	private router:Router,
  	private flashMessagesService:FlashMessagesService
  	) { }

  ngOnInit() {
  }
  onAdminLogin(){
  	this.authServiceService.onAdminLogin(this.email,this.password)
  		.then((res) =>{
  			this.flashMessagesService.show('You are Logged in',{cssClass:'alert-success',timeout:2000});
  			this.router.navigate(['/admin-dashboard']);
  		})
  		.catch((err) =>{
  			this.flashMessagesService.show(err.message,{cssClass:'alert-danger', timeout:2000});
  			this.router.navigate(['/login']);
  		})
  }
}
  