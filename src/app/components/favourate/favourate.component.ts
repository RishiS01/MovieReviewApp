import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../../services/movie-service.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';
import _ from 'lodash';
import { User } from 'firebase/app';

@Component({
  selector: 'app-favourate',
  templateUrl: './favourate.component.html',
  styleUrls: ['./favourate.component.css']
})
export class FavourateComponent implements OnInit {
	movies:any[];
	id:string;
	movie={};
  Authuser:User;
  constructor(
  	public movieServiceServices:MovieServiceService,
  	public flashMessagesService:FlashMessagesService,
  	public authServiceService:AuthServiceService,
  	public router:Router,
  	public route:ActivatedRoute) { 

    this.authServiceService.getAuth().subscribe(auth=>{
      this.Authuser=auth;
    })

  }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.movieServiceServices.getUserFavourite(this.Authuser.uid).valueChanges().subscribe(data=>{
    	console.log(data);
      if(!_.isEmpty(data)){
        let i = []
        Object.keys(data).forEach( key => {
          if(key !== "$key"){
            data[key].$key = key;
            i.push(data[key]) 
          }  
        });
        console.log(i)
        this.movie= i  ;
      }else{
          this.movie = {};
        }
    })
  }
  onRemoveFavourate(mov){
    if(confirm('Are you sure?')){
    	this.movieServiceServices.removeMovieAsfavourate(this.Authuser.uid,mov);
      this.router.navigate(['/favourate']);
      this.flashMessagesService.show('Removed as Favourite',{cssClass:'alert-success',timeout:1500});
    }
  }
}
