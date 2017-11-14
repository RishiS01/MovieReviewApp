import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList,AngularFireObject } from 'angularfire2/database';
import { Movie } from '../Models/Movie';
import { Router } from '@angular/router';

@Injectable()
export class MovieServiceService {
	movies:AngularFireList<any[]>;
	movie:AngularFireObject<any[]>;
	categories:AngularFireList<any[]>;
	user:AngularFireList<any[]>;
	profile:AngularFireObject<any[]>;
	favourites:AngularFireList<any[]>;
	favourite:AngularFireObject<any[]>;
	comments:AngularFireList<any[]>;
	role:AngularFireObject<any[]>;



  constructor(
  	public angularFire: AngularFireDatabase,
  	public router:Router
  	) {
  		this.movies = this.angularFire.list('/movies');
  		this.categories=this.angularFire.list('/categories');
  		this.user = this.angularFire.list('/user');
  		this.favourites=this.angularFire.list('/favourite');
  		// this.role=this.angularFire.list('/role');


	 }
	 
	newMovie(movie){
		this.movies.push(movie);
	}
	getMovies(){
	return this.angularFire.object('/movies').snapshotChanges().map(action => {
   		const $key = action.payload.key;
    	const data = { $key, ...action.payload.val() };
    	return data;
  		});
	}
	deleteMovie(m){
		this.movies.remove(m.$key);
	}
	getMovie($key){
		return this.angularFire.object(`/movies/${$key}`)
	}
	updateMovie($key,movie){
		
		return this.movies.update($key,movie)
	}
	addCategory(category){
		this.categories.push(category);

	}
	getCategory(){
		return this.angularFire.object('/categories').snapshotChanges().map(action => {
   		 const $key = action.payload.key;
    	const data = { $key, ...action.payload.val() };
    	return data;
  		});
	}
	getMoviesByGenre(){
		return this.angularFire.object(`/movies`).snapshotChanges().map(action => {
   		 const $key = action.payload.key;
    	const data = { $key, ...action.payload.val() };
    	return data;
  		});
	}

	newUserProfile(profile,uid){
  		const p = this.angularFire.object(`/user/${uid}/profile`);
		p.set(profile);
  		console.log(profile);
  		console.log(uid);
  		this.router.navigate(['']);
	}
	getUserProfile($key){
  		return this.angularFire.object(`/user/${$key}/profile`);
	}
	userFavouriteMovieList(id,i){
		const list=this.angularFire.object(`/user/${id}/favourites/${i.$key}`);
		delete i.$key;
		list.set({...i})
		console.log(i);
	}
	getUserFavourite($key){
		console.log($key)
		return this.angularFire.object(`/user/${$key}/favourites`);
	}
	removeMovieAsfavourate(id,mov){
		const list=this.angularFire.object(`/user/${id}/favourites/${mov.$key}`).remove();
		console.log(mov.$key)
	}
	userComment(id,$key,comment){
		
		console.log($key)
		const com=this.angularFire.list(`/movies/${$key}/comments`);
		com.push({...comment})

	}
	deleteUserComment($key,i){
		console.log(i)
		console.log($key)
		return this.angularFire.list(`/movies/${$key}/comments/${i}`).remove();
		
	}
	
	getUsers(){
		return this.angularFire.object(`/user`)
		.snapshotChanges().map(action => {
   		 const $key = action.payload.key;
    	const data = { $key, ...action.payload.val() };
    	return data;
  		});
	}
}
