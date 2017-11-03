import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../../services/movie-service.service';
import { AuthServiceService  } from '../../services/auth-service.service';
import { Router,ActivatedRoute,Params} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  $key:string;
  categories:any[];
 movies=[];
 favourite:boolean=false;
 id:string;
 // movie:any;
 favourites={};
 movie = {
    
    movieTitle:'',
    movieDescription:'',
    movieImage:'',
    movieGenre:'',
    cast:[]
  };
  cast=[{
    id: new Date().valueOf(),
    name:'',
    image:''
  }]
  constructor(
  	public router:Router,
  	public movieServiceService:MovieServiceService,
    public authServiceService:AuthServiceService,
    public flashMessagesService:FlashMessagesService,
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

  	this.movieServiceService.getMovies().subscribe(data =>{
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
  		this.movies = i;
  	})

  }
  onAddUserFavourite(i){debugger
    // this.favourite(movie){
    //   favourite.movie = this.movie[i]
    // };
    this.authServiceService.getAuth().subscribe(auth=>{debugger
      console.log(auth)
        
       if(auth ===  null){
         this.flashMessagesService.show('You Need to Login first for this',{cssClass:'alert-success',timeout:3000});
        this.router.navigate(['/login']);
      }else{
      // const selectedMovie=this.movies[i];
      this.movieServiceService.userFavouriteMovieList(auth.uid,this.movies[i])
    }
      
    })
  }
  openNav() {
  document.getElementById("moviesCataegories").style.width = "250px";
    
}

closeNav() {
  document.getElementById("moviesCataegories").style.width = "0";
   
}
}
