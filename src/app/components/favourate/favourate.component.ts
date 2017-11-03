import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../../services/movie-service.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';
import _ from 'lodash';

@Component({
  selector: 'app-favourate',
  templateUrl: './favourate.component.html',
  styleUrls: ['./favourate.component.css']
})
export class FavourateComponent implements OnInit {
	movies:any[];
	id:string;
	movie={};
  constructor(
  	public movieServiceServices:MovieServiceService,
  	public flashMessagesService:FlashMessagesService,
  	public authServiceService:AuthServiceService,
  	public router:Router,
  	public route:ActivatedRoute) { }

  ngOnInit() {
    	this.id=this.route.snapshot.params['id'];
    	  this.authServiceService.getAuth().subscribe(auth=>{
    	    this.movieServiceServices.getUserFavourite(auth.uid).valueChanges().subscribe(data=>{
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
            console.log('hello');
        }else{
            this.movie = {};
        }
        })
     });

  }
  onRemoveFavourate(mov){
  	if(confirm('Are you sure?')){
  	this.authServiceService.getAuth().subscribe(auth=>{
  	this.movieServiceServices.removeMovieAsfavourate(auth.uid,mov);
  	})
    this.router.navigate(['/favourate']);
    this.flashMessagesService.show('Removed as Favourite',{cssClass:'alert-success',timeout:1500});

  		
  	}
  	
  }


}
