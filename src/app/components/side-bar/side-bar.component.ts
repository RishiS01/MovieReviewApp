import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../../services/movie-service.service';
import { Router,ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
	$key:string;
	categories:any[];

  constructor(
  	private movieServiceService:MovieServiceService,
  	private router:Router,
  	private route:ActivatedRoute) { }

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


  }

}
