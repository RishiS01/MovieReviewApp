import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../../services/movie-service.service';
import { Router,ActivatedRoute,Params } from '@angular/router'; 
import { NgForm } from '@angular/forms';
import { YoutubePipe } from '../../youtube.pipe';
@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
	movies:any[];
  id:string;
  movie:any={};

 
  cast=[{
    id: new Date().valueOf(),
    name:'',
    image:''
  }]
  $key:string
  categories:any[];
  loader:boolean = false;
  
  trailer:any;
  constructor(
  	public movieServiceService:MovieServiceService,
  	public router:Router,
  	public route:ActivatedRoute
  	) { }

  ngOnInit() {
  	this.$key = this.route.snapshot.params['id'];
    this.movieServiceService.getMovie(this.$key).valueChanges().subscribe(data=>{
      console.log(data);
       this.movie = data;

    }); 
    this.movieServiceService.getCategory().subscribe(data=>{
     
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
  onUpdateMovie(f:NgForm){
    // this.movie.trailer=f.value.trailer
    this.movieServiceService.updateMovie(this.$key,this.movie);
    this.router.navigate(['/admin-dashboard']);
  }
  deleteMovieImageOnEdit(){
    if(confirm('Are you sure')){
      const movieImage = this.movie.movieImage;
      delete this.movie.movieImage;
    }
  }
  deleteCastImageOnEdit(image,i){
    
    if(confirm('Are you sure?')){
      const image = this.movie.cast[i].image;
      delete this.movie.cast[i].image
    }
  }
  onAddCastOnEdit(){
    this.movie.cast.push({
    id: new Date().valueOf(),
    name:'',
    image:''
  }) 
    console.log(name);
    console.log(this.movie.cast.image);
  }
  removeCastOnEdit(cast,i){
    this.movie.cast.length-1;
    if(confirm('Are you sure?')){
      if(this.movie.cast!==0){
        this.movie.cast.splice(i,1)
      }
    }
    console.log(this.movie.cast[i]);
  }
  onUploadCastImage($event,i){
    console.log($event)
    this.movie.cast[i].image = $event[0].dataURL;
    this.loader=false;
    console.log(this.movie.cast[i].image);
  }   
  onUploadSuccess($event){
    // this.loader=true;
    console.log($event)
    this.movie.movieImage = $event[0].dataURL;
    this.loader=false;
    console.log(this.movie.movieImage);
  }
  onUploadProgress($event){
    this.loader=true;

  }
 
}

