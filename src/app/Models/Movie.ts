export interface Movie{
	$key?:string;
	// movieName?:string;
	movieTitle?:string;
	movieDescription?:string;
	movieCastName?:string;
	movieImage?:string;
	movieCastImage?:string;
	id?:string;
	email?:string;
	comments?:any[];
	cast?:{}[];

}