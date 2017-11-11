import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';
import { FlashMessagesService} from 'angular2-flash-messages';
import { MovieServiceService } from '../../services/movie-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  admin:boolean=false;
	email:string;
	password:string;

  constructor(
  	private authServiceService:AuthServiceService,
  	private router:Router,
  	private flashMessagesService:FlashMessagesService,
    private movieServiceService:MovieServiceService
  	) {

   this.authServiceService.getAuth().subscribe(auth=>{
      // let aid=auth.uid ;Tu3hdIqMYqei8MOUmoNAcyaTfMT2
    });
  }

  ngOnInit() {
    
  }
  onAdminLogin(){debugger

  	this.authServiceService.onAdminLogin(this.email,this.password)
    .then((res:any) =>{debugger
      
      // this.movieServiceService.getUsers().map(data=>{debugger
      //   // data.map(obj=>{debugger
      //     console.log(data)
      //     if(res.uid === data.uid){
      //       this.flashMessagesService.show('You are Logged in',{cssClass:'alert-success',timeout:2000});
      //   this.router.navigate(['/admin-dashboard']);
      //     }
        // })
      // })
    })

  		.catch((err) =>{
  			this.flashMessagesService.show(err.message,{cssClass:'alert-danger', timeout:2000});
  			this.router.navigate(['/login']);
  		})
      this.admin=true;
      console.log(this.admin)
  }
 
  
}
  