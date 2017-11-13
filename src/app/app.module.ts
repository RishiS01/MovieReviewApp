import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';


import { loadash } from 'lodash';

import { AppComponent } from './app.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';
import { FavourateComponent } from './components/favourate/favourate.component';
import { LoginComponent } from './components/login/login.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { GenresComponent } from './components/genres/genres.component';


import { AuthServiceService } from './services/auth-service.service';
import { MovieServiceService } from './services/movie-service.service';
import { AuthGuard } from './guards/auth.guard';


import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireAuthModule } from 'angularfire2/auth';



import { YoutubePipe } from './youtube.pipe';







const appRoutes:Routes = [
  { path:'',component:UserDashboardComponent },
  { path:'movie-detail/:id',component:MovieDetailComponent },
  { path:'add-movie',component:AddMovieComponent},
  { path:'user-login',component:UserLoginComponent},
  { path:'user-profile',component:UserProfileComponent},
  { path:'change-password',component:ChangePasswordComponent},
  { path:'favourate',component:FavourateComponent},
  { path:'admin-login',component:AdminLoginComponent},
  { path:'edit-movie/:id',component:EditMovieComponent,canActivate:[AuthGuard]},
  { path:'login',component:LoginComponent},
  { path:'admin-dashboard',component:AdminDashboardComponent,canActivate:[AuthGuard]},
  { path:'add-category',component:CategoriesComponent,canActivate:[AuthGuard]},
  { path:'genre/:name',component:GenresComponent}

]



const dropzone_config: DropzoneConfigInterface = {
  url: 'https://httpbin.org/post',
  maxFilesize: 5,
  maxFiles: 1,
  acceptedFiles: 'image/*',
  addRemoveLinks: true,
  uploadMultiple:true,
  
  

   // autoProcessQueue:false
};

export const firebaseConfig = {
    apiKey: "AIzaSyDxl15I2FjlSOF00peBeAqVGGtdAnxwEKg",
    authDomain: "movie-review-app-6df64.firebaseapp.com",
    databaseURL: "https://movie-review-app-6df64.firebaseio.com",
    projectId: "movie-review-app-6df64",
    storageBucket: "movie-review-app-6df64.appspot.com",
    messagingSenderId: "805510772115"
  };






@NgModule({
  declarations: [
    AppComponent,
    AddMovieComponent,
    AdminDashboardComponent,
    AdminLoginComponent,
    ChangePasswordComponent,
    EditMovieComponent,
    FavourateComponent,
    LoginComponent,
    MovieDetailComponent,
    NavbarComponent,
    SideBarComponent,
    UserDashboardComponent,
    UserLoginComponent,
    UserProfileComponent,
    CategoriesComponent,
    GenresComponent,
    YoutubePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    DropzoneModule.forRoot(dropzone_config),
    FormsModule,
    FlashMessagesModule,
    
  ],
  providers: [
    AuthServiceService,
    AngularFireAuth,
    AngularFireDatabase,
    MovieServiceService,
    AuthGuard

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
