import { Component, OnInit } from '@angular/core';
import{ MovieServiceService } from '../../services/movie-service.service';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router,ActivatedRoute,Params} from '@angular/router';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

movies:any[];
category = {
	name:'',
	
}
  constructor(
  	public movieServiceService:MovieServiceService,
    public flashMessagesService:FlashMessagesService,
    public router:Router,
    public routes:ActivatedRoute) { }

  ngOnInit() {

  }
  onAddCategory(f:NgForm){
  	this.category.name = f.value.name;
  	// this.category.id=f.value.id;	
  	this.movieServiceService.addCategory(this.category);
  	console.log(this.category.name)
    this.flashMessagesService.show('Category added',{cssClass:'alert-success',timeout:1500});
    this.router.navigate(['admin-dashboard']);

  	}
}
