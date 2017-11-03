import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthServiceService } from '../../services/auth-service.service';
import { FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	isLoggedIn:boolean;
	isloggedInUser:string;

	
  constructor(
  	private authServiceService:AuthServiceService,
  	private router:Router,
  	private flashMessagesService:FlashMessagesService
  	) { }

  ngOnInit() {
  	this.authServiceService.getAuth().subscribe(auth =>{
  		if(auth){
  			this.isLoggedIn = true;
  			// this.isloggedInUser = auth.displayName;
        this.isloggedInUser = auth.email;
      
  		}else{
  			this.isLoggedIn = false;
  		}
  	});

  }
  onLogout(){
		this.authServiceService.logout();
		this.flashMessagesService.show('Loged out',{cssClass:'alert-success',timeout:1500});
		this.router.navigate(['/']);	

	}
  
}
