import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../../services/movie-service.service';
import { Router,ActivatedRoute,Params } from '@angular/router'; 
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
	movies:any[];
	id:string;
	movie = {
		movieTitle:'',
		movieDescription:'',
		movieImage:'',
		cast:[]
	};
	cast=[{
		id: new Date().valueOf(),
		name:'',
		image:''
	}]
  $key:string;
  categories:any[];
  constructor(
  	public movieServiceService:MovieServiceService,
  	public router:Router,
  	public route:ActivatedRoute,
  	public flashMessagesService:FlashMessagesService

  	) { }

  ngOnInit() {
    this.$key = this.route.snapshot.params['id'];
    this.movieServiceService.getCategory().subscribe(data=>{
      // this.movies = data;
      console.log(data);
        let i = []
      Object.keys(data).forEach( key => {
        if(key !== "$key"){
      data[key].$key = key;
        i.push(data[key]) 
        }   
         // console.log(key);
      });
        console.log(i)  
      this.categories= i;
    })

  	this.id = this.route.snapshot.params['id'];
  	this.movieServiceService.getMovies().subscribe(data=>{
  		// this.movies = data;
  		console.log(data);
        let x = []
  		Object.keys(data).forEach( key => {
  			if(key !== "$key"){
			data[key].$key = key;
  			x.push(data[key]) 
  			}   
     		console.log(key);
			});
  			console.log(x)	
  		this.movies = x;
  	})
  }
  onDeleteMovie(m){debugger
  	if(confirm('Are you sure?')){
  	this.movieServiceService.deleteMovie(m);
  	this.flashMessagesService.show('Movie deleted',{cssClass:'alert-success',timeout:1000});
  	this.router.navigate(['/admin-dashboard']);
  }
}
 openNav() {
  document.getElementById("moviesCataegories").style.width = "250px";
    
}

closeNav() {
  document.getElementById("moviesCataegories").style.width = "0";
   
}


}
