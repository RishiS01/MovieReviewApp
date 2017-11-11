import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../../services/movie-service.service';
import { Router,ActivatedRoute,Params} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import _ from 'lodash';
import { YoutubePipe } from '../../youtube.pipe';
// import { Movie } from '../../Models/Movie';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
	movies:any[];
	$key:string;
  trailer:any;
  video:any;
	movie = {
		
		movieTitle:'',
		movieDescription:'',
		movieImage:'',
    movieGenre:'',
		cast:[],
    trailer:[]
	};
	cast=[{
		id: new Date().valueOf(),
		name:'',
		image:''
	}]
categories:any[];
loader:boolean = false;


  constructor(
  	public movieServiceService:MovieServiceService,
  	public router:Router,
  	public flashMessagesService:FlashMessagesService,
    private satitizer:DomSanitizer
  	) { }

  ngOnInit() {
    this.movieServiceService.getCategory().subscribe(data=>{
      // this.movies = data;
      console.log(data);
        let i = []
      Object.keys(data).forEach( key => {
        if(key !== "$key"){
      data[key].$key = key;
        i.push(data[key]) 
        }   
         console.log(key);
      });
        console.log(i)  
      this.categories= i;
    })
  }
  onAddMovie(f:NgForm){debugger
  	// let $this=this
  	this.movie.movieTitle = f.value.movieTitle;
  	// this.movie.movieCastName = f.value.movieCastName;
  	this.movie.movieDescription=f.value.movieDescription;
    this.movie.movieGenre=f.value.movieGenre;
  	this.movie.cast = this.cast;
    this.movie.trailer=f.value.trailer;
  	console.log(f.value);
  	this.movieServiceService.newMovie(this.movie);
  	this.flashMessagesService.show('Movie added',{cssClass:'alert-success',timeout:1500});
  	this.router.navigate(['/admin-dashboard']);
  }
//   YouTubeGetID(url){debugger
//   let ID = '';
//   url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
//   if(url[2] !== undefined) {
//     ID = url[2].split(/[^0-9a-z_\-]/i);
//     ID = ID[0];
//   }
//   else {
//     ID = url;
//   }
//      return ID;
//    // this.getEmbededUrl(ID)
// }
//   onAddVideoSource(abc){debugger
   
//    this.video=abc
//    this.YouTubeGetID(abc)

//   }
  // getEmbededUrl(a){
  //   if(!_.isEmpty(a)){
  //     console.log(a);
  //     return this.satitizer.bypassSecurityTrustResourceUrl( a);  
  //   }else{
  //     return false;
  //   }
  // }
  onAddCast(){
  	this.cast.push({
  	 id: new Date().valueOf(),
  		name:'',
  		image:''
  	})
  	console.log(name)
  }
  removeCast(cast,i){
  	cast =this.cast.length-1;
  	if(confirm('Are you sure')){
  		if(cast !==0){
  			this.cast.splice(i,1)
  		}
  	}
  }
  deleteCastImage(image,i){
  	if(confirm('are you sure')){
  		const image = this.cast[i].image;
  		delete this.cast[i].image;
  	}
  }
  deleteMovieImage(){
  	if(confirm('are you sure')){
  		const movieImage = this.movie.movieImage;
  		delete this.movie.movieImage
  	}
  }


  onUploadSuccess($event){
    console.log($event)
    this.movie.movieImage = $event[0].dataURL;
    this.loader=false;
    console.log(this.movie.movieImage);
  }
  onUploadCastImage($event,i){
  	console.log($event)
  	this.cast[i].image = $event[0].dataURL;
    this.loader=false;
    console.log(this.cast[i].image);
  }
  onUploadProgress($event){debugger
    this.loader=true;

  }
  
}
