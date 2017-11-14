import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'firebase/app';
import { AuthServiceService } from '../../services/auth-service.service';
import { FlashMessagesService} from 'angular2-flash-messages';
import { MovieServiceService } from '../../services/movie-service.service';
import { Profile } from '../../Models/Profile';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	isLoggedIn:boolean;
	isloggedInUser:string;
  adminLogin:boolean; 
  guest:boolean=false;
  admin:boolean=false;
  profile ={} as Profile;
  constructor(
  	private authServiceService:AuthServiceService,
  	private router:Router,
  	private flashMessagesService:FlashMessagesService,
    private movieServiceService:MovieServiceService
  	) { }

  ngOnInit() {
  	this.authServiceService.getAuth().subscribe(auth =>{
    if(auth){
  		this.isLoggedIn = true;
  		this.isloggedInUser = auth.email;
      this.movieServiceService.getUserProfile(auth.uid).valueChanges().subscribe(data=>{
      console.log(data)
      this.profile=data || {} as Profile;
    })
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
