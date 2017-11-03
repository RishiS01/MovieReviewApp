import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../../services/movie-service.service';
import { Router,ActivatedRoute,Params} from '@angular/router';


@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
	movies:any[];
	// movies:any[];
 $key:string;
 id:string;
 movie:any;
 cast=[{
    id: new Date().valueOf(),
    name:'',
    image:''
  }]
	categories:any[];
	category = {
	name:'',
	// id:''
	}
	
	name: string;
	
  constructor(
  	public movieServiceService:MovieServiceService,
  	public router:Router,
  	private route:ActivatedRoute) { }

  ngOnInit() {
  	
  	this.route.params.subscribe( params=>{
  		// const id = params['id'];
  		this.name=params['name'];
  		this.movieServiceService.getMoviesByGenre().subscribe(data=>{
     	console.log(data);
     	let m =[]
     	Object.keys(data).forEach( k => {
  			if(k !== "$key"){
  				data[k].$key = k;
  			
			 // data[k].movieGenre;
  			if(this.name === data[k].movieGenre){
  				m.push(data[k]) 
  				console.log(m)
 				this.movie=m;
 				console.log(this.movie)
  			}
  			}   
			});
      	});
    })

 }
}