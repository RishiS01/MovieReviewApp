import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../../services/movie-service.service';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from '../../services/auth-service.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { User } from 'firebase/app';
import { DomSanitizer } from '@angular/platform-browser';
import { YoutubePipe } from '../../youtube.pipe';


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
 showCommentInput:boolean=false;
 comment=[]
 c=[]
 Authuser:User;
 user:string;
 video:object;
 
  constructor(
  	public movieServiceService:MovieServiceService,
    public authServiceServioce:AuthServiceService,
  	public router:Router,
  	public route:ActivatedRoute,
    public flashMessagesService:FlashMessagesService,
    private sanitizer:DomSanitizer
  	) { 
    this.authServiceServioce.getAuth().subscribe(auth=>{
      this.Authuser=auth;
    })
  }

  ngOnInit() {
  	this.$key = this.route.snapshot.params['id'];
  	this.movieServiceService.getMovie(this.$key).valueChanges().subscribe((data:any)=>{
    console.log(data);
    this.movie = data;
    this.cast =data.cast;
    if(typeof data.comments !== typeof undefined){
      this.refresh()
      Object.keys(data.comments).forEach(key=>{
       const $key=key
       const uid=data.comments[key].uid
       const cmt=data.comments[key].comment
       const email_id=data.comments[key].email
        this.c.push({id:uid,comment:cmt,email:email_id,$key})
        console.log(this.c)
      });
    }
  });
}
  onSubmitUserComments(f:NgForm){
    if( this.Authuser){
      const comment = ({
        uid: this.Authuser.uid,
        comment:f.value.userComment,
        email:this.Authuser.email
      })
      console.log(comment)
      this.movieServiceService.userComment(this.Authuser.uid,this.$key,comment)
    }
    else{
      this.flashMessagesService.show('You need to Login first for this',{cssClass:'alert-success', timeout:3000});
      this.router.navigate(['/login']);
    }
  }
  onDeleteComment(com,i){
    if(confirm('Are you sure?')){
      this.movieServiceService.deleteUserComment(this.$key,com.$key);
      this.flashMessagesService.show("You're comment is deleted",{cssClass:'alert-success',timeout:1500}) ;
      this.router.navigate(['/movie-detail/'+ this.$key]);
      this.refresh();
    }
  } 
  refresh(){
    this.movieServiceService.getMovie(this.$key)
    console.log(this.c);
    this.c =[];
  }
}