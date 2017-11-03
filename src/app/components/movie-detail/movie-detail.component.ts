import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../../services/movie-service.service';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
 movies:any[];
 $key:string;
 id:string;
 movie= {}
 cast:any;
  // movie = {
  //   movieTitle:'',
  //   movieDescription:'',
  //   movieImage:'',
  //   cast:[]
  // };
  constructor(
  	public movieServiceService:MovieServiceService,
  	public router:Router,
  	public route:ActivatedRoute
  	) { }

  ngOnInit() {
  	this.$key = this.route.snapshot.params['id'];
  	  this.movieServiceService.getMovie(this.$key).valueChanges().subscribe((data:any)=>{
      console.log(data);
       this.movie = data;
       this.cast =data.cast;
    }); 
  }
 
  
}