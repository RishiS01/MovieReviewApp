webpackJsonp([1],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<!-- <app-side-bar ></app-side-bar> -->\n\n<div class=\"container\">\n\t<flash-messages></flash-messages>\n  \t<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_add_movie_add_movie_component__ = __webpack_require__("../../../../../src/app/components/add-movie/add-movie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_admin_dashboard_admin_dashboard_component__ = __webpack_require__("../../../../../src/app/components/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_admin_login_admin_login_component__ = __webpack_require__("../../../../../src/app/components/admin-login/admin-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_change_password_change_password_component__ = __webpack_require__("../../../../../src/app/components/change-password/change-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_edit_movie_edit_movie_component__ = __webpack_require__("../../../../../src/app/components/edit-movie/edit-movie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_favourate_favourate_component__ = __webpack_require__("../../../../../src/app/components/favourate/favourate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_movie_detail_movie_detail_component__ = __webpack_require__("../../../../../src/app/components/movie-detail/movie-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_side_bar_side_bar_component__ = __webpack_require__("../../../../../src/app/components/side-bar/side-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_user_dashboard_user_dashboard_component__ = __webpack_require__("../../../../../src/app/components/user-dashboard/user-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_user_login_user_login_component__ = __webpack_require__("../../../../../src/app/components/user-login/user-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/components/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_categories_categories_component__ = __webpack_require__("../../../../../src/app/components/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_genres_genres_component__ = __webpack_require__("../../../../../src/app/components/genres/genres.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_auth_service_service__ = __webpack_require__("../../../../../src/app/services/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_movie_service_service__ = __webpack_require__("../../../../../src/app/services/movie-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ngx_dropzone_wrapper__ = __webpack_require__("../../../../ngx-dropzone-wrapper/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ngx_dropzone_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_ngx_dropzone_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__youtube_pipe__ = __webpack_require__("../../../../../src/app/youtube.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_16__components_user_dashboard_user_dashboard_component__["a" /* UserDashboardComponent */] },
    { path: 'movie-detail/:id', component: __WEBPACK_IMPORTED_MODULE_13__components_movie_detail_movie_detail_component__["a" /* MovieDetailComponent */] },
    { path: 'add-movie', component: __WEBPACK_IMPORTED_MODULE_6__components_add_movie_add_movie_component__["a" /* AddMovieComponent */] },
    { path: 'user-login', component: __WEBPACK_IMPORTED_MODULE_17__components_user_login_user_login_component__["a" /* UserLoginComponent */] },
    { path: 'user-profile', component: __WEBPACK_IMPORTED_MODULE_18__components_user_profile_user_profile_component__["a" /* UserProfileComponent */] },
    { path: 'change-password', component: __WEBPACK_IMPORTED_MODULE_9__components_change_password_change_password_component__["a" /* ChangePasswordComponent */] },
    { path: 'favourate', component: __WEBPACK_IMPORTED_MODULE_11__components_favourate_favourate_component__["a" /* FavourateComponent */] },
    { path: 'admin-login', component: __WEBPACK_IMPORTED_MODULE_8__components_admin_login_admin_login_component__["a" /* AdminLoginComponent */] },
    { path: 'edit-movie/:id', component: __WEBPACK_IMPORTED_MODULE_10__components_edit_movie_edit_movie_component__["a" /* EditMovieComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'admin-dashboard', component: __WEBPACK_IMPORTED_MODULE_7__components_admin_dashboard_admin_dashboard_component__["a" /* AdminDashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'add-category', component: __WEBPACK_IMPORTED_MODULE_19__components_categories_categories_component__["a" /* CategoriesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'genre/:name', component: __WEBPACK_IMPORTED_MODULE_20__components_genres_genres_component__["a" /* GenresComponent */] }
];
var dropzone_config = {
    url: 'https://httpbin.org/post',
    maxFilesize: 5,
    maxFiles: 1,
    acceptedFiles: 'image/*',
    addRemoveLinks: true,
    uploadMultiple: true,
};
var firebaseConfig = {
    apiKey: "AIzaSyDxl15I2FjlSOF00peBeAqVGGtdAnxwEKg",
    authDomain: "movie-review-app-6df64.firebaseapp.com",
    databaseURL: "https://movie-review-app-6df64.firebaseio.com",
    projectId: "movie-review-app-6df64",
    storageBucket: "movie-review-app-6df64.appspot.com",
    messagingSenderId: "805510772115"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_add_movie_add_movie_component__["a" /* AddMovieComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_admin_dashboard_admin_dashboard_component__["a" /* AdminDashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_admin_login_admin_login_component__["a" /* AdminLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_change_password_change_password_component__["a" /* ChangePasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_edit_movie_edit_movie_component__["a" /* EditMovieComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_favourate_favourate_component__["a" /* FavourateComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_movie_detail_movie_detail_component__["a" /* MovieDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_side_bar_side_bar_component__["a" /* SideBarComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_user_dashboard_user_dashboard_component__["a" /* UserDashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_user_login_user_login_component__["a" /* UserLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_user_profile_user_profile_component__["a" /* UserProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_categories_categories_component__["a" /* CategoriesComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_genres_genres_component__["a" /* GenresComponent */],
            __WEBPACK_IMPORTED_MODULE_28__youtube_pipe__["a" /* YoutubePipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_25_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_24_ngx_dropzone_wrapper__["DropzoneModule"].forRoot(dropzone_config),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesModule"],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_21__services_auth_service_service__["a" /* AuthServiceService */],
            __WEBPACK_IMPORTED_MODULE_27_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_26_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_22__services_movie_service_service__["a" /* MovieServiceService */],
            __WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/add-movie/add-movie.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image-container{\n    height: 250px;\n    width: 250px;\n    display: -ms-grid;\n    display: grid;\n    margin:0px 100px 0px 40px;\n    position: relative;\n}\n.remove{\n    color: red;\n    position: absolute;\n    right: 0;\n    text-decoration: none;\n    padding-top: 25px;\n   \n}\n.dropzone-div{\n\tbackground-color: #f2f2f2;\n\theight: 100px;\n    width: 200px;\n    position: relative;\n    border: 1px dotted black;\n    margin-top: 30px;\n}\n.dropzone-text{\n\t\n\tmargin: 0;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-right: -50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%)\n}\n.castDiv{\n    background-color: #f2f2f2;\n    height: 100px;\n    width: 150px;\n    position: relative;\n    border: 1px dotted black;\n    margin-top: inherit;\n}\n.castSpan{\n    margin: 0;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-right: -50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%)\n}\n.cast{\n    margin-top: 20px;\n}\n.addCast{\n   /* position: relative;*/\n    left: 155px;\n    bottom:100px;\n}\n.castName{\n    margin-bottom: 5px;\n}\n.removeCastImage{\n    color: red;\n    position: absolute;\n    right: 0;\n    text-decoration: none;\n    padding-top: 25px;\n}\n.castImage-container{\n    height: 250px;\n    width: 250px;\n    display: -ms-grid;\n    display: grid;\n    margin:0px 100px 0px -25px;\n    position: relative;\n}\nimg{\n    max-width: 80%\n}\n.req{\n    color: red;\n}\n.movieTrailer{\n    margin-top: 25px;\n}\nh6{\n    color: red;\n}\n.loader{\n\n  position: absolute;\n  left: 170%;\n  top: 220%;\n  z-index: 1;\n  width: 100px;\n  height: 100px;\n  margin: -75px 0 0 -75px;\n  border: 6px solid white;\n  border-radius: 50%;\n  border-top: 6px solid black;\n  border-bottom: 6px solid black;\n  \n  width: 120px;\n  height: 120px;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 1s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% { -webkit-transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); }\n}\n/*.loader-cast{\n   position: absolute;\n  left: 19%;\n  top: 48%;\n  z-index: 1;\n  width: 100px;\n  height: 100px;\n  margin: -75px 0 0 -75px;\n  border: 5px solid white;\n  border-radius: 50%;\n  border-top: 5px solid black;\n  border-bottom: 5px solid black;\n  \n  width: 50px;\n  height: 50px;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 1s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% { -webkit-transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); }\n}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-movie/add-movie.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t\n\t<div class=\"panel panel-primary\">\n\t\t<div class=\"panel-heading\">Add Movie</div>\n\t\t<div class=\"panel-body\">\n\t\t\t<form #f = \"ngForm\" (ngSubmit) = \"onAddMovie(f)\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<div [dropzone]=\"config\" (error)=\"onUploadError($event)\" (processing)='onUploadProgress($event)' (success)=\"onUploadSuccess($event)\" *ngIf='!movie.movieImage'>\n\t\t\t\t\t\t\t<div class=\"dz-message\" data-dz-message>\n\t\t\t\t\t\t\t\t<div class=\"dropzone-div\"><span class=\"dropzone-text\">Add Movie Poster</span></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div action=\"/file-upload\" class=\"dropzone\" id=\"my-awesome-dropzone\"></div>\n\t\t\t\t\t\t<div class=\"container image-container \" *ngIf = \"movie.movieImage\">\n\t\t\t\t\t\t\t<a class=\"glyphicon glyphicon-remove remove\" (click) = \"deleteMovieImage()\"></a>\n\t\t\t\t\t\t\t<img src=\"{{movie.movieImage}}\" >\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"loader\" *ngIf= \"loader\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<br>\n\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"title\">Movie Title:</label>\n\t\t\t\t\t\t\t<input type=\"text\" name=\"movieTitle\" class=\"form-control\"  [(ngModel)]='movie.movieTitle' required=\"movieTitle\" #movieTitle='ngModel' placeholder=\"Movie Title\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf = \"movieTitle?.errors?.required && movieTitle?.touched\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\tName Required\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"summery\">Summary:</label>\n\t\t\t\t\t\t\t<textarea class=\"form-control\" rows=\"2\" name=\"movieDescription\" [(ngModel)]='movie.movieDescription' required=\"movieDescription\" #movieDescription='ngModel' placeholder=\"description..\"></textarea>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf = \"movieDescription?.errors?.required && movieDescription?.touched\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\tRequired\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"genres\">Genres list (select one):</label>\n      \t\t\t\t\t\t<select class=\"form-control\" id=\"genres\" [(ngModel)]='movie.movieGenre' required=\"movieGenre\" name=\"movieGenre\" #movieGenre='ngModel'>\n        \t\t\t\t\t\t<option *ngFor='let cat of categories'>{{cat.name}}</option>\n     \t\t\t\t\t\t</select>\n  \t\t\t\t\t\t</div>\n  \t\t\t\t\t\t<!-- <div *ngIf='movieGenre?.errors?.required && movieGenre?.touched' class=\"alert alert-danger\">\n  \t\t\t\t\t\t\tRequired\n  \t\t\t\t\t\t</div> -->\n\n\t\t\t\t\t\t<div class=\"form-group cast\" *ngFor='let c of cast ;let i = index '>\n\t\t\t\t\t\t\t<label for=\"cast\">Cast:</label>\n\t\t\t\t\t\t\t<div class=\"castName\">\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"name\" [value]='c.name' (input)= \"c.name= $event.target.value\" required=\"name\"  placeholder=\"Cast Name\" >\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngIf = \"name?.errors?.required && name?.touched\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\tCast Name Required\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div [dropzone]=\"config\" (error)=\"onUploadError($event)\" (processing)='onUploadProgress($event)' (success)=\"onUploadCastImage($event,i)\" name = \"image\" *ngIf = \"!c.image\">\n\t\t\t\t\t\t\t\t<div class=\"dz-message \" data-dz-message>\n\t\t\t\t\t\t\t\t\t<div class=\"dropzone-div castDiv\"><span class=\"dropzone-text castSpan\">Add cast Pic</span></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div action=\"/file-upload\" class=\"dropzone\" id=\"my-awesome-dropzone\"></div>\n\t\t\t\t\t\t\t<div class=\"container castImage-container \" *ngIf = \"c.image\">\n\t\t\t\t\t\t\t\t<a class=\"glyphicon glyphicon-remove removeCastImage\" (click) = \"deleteCastImage(image,i)\"></a>\n\t\t\t\t\t\t\t\t<img src=\"{{c.image}}\" >\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- <div class=\"loader-cast\" *ngIf= \"loader-cast && !c.image\"></div> -->\n\t\t\t\t\t\t\t<a  class=\"btn btn-danger btn-sm \"  (click)=\"removeCast(cast,i)\" >Delete</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"addCastDiv\">\n\t\t\t\t\t\t\t<a class=\"btn btn-warning btn-sm addCast\" (click)='onAddCast()'>Add Cast</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"form-group movieTrailer\">\n\t\t\t\t\t\t\t<label for=\"movieTrailer\">Movie Trailer:<h6>*paste youtube embeded code here</h6></label>\n\n\t\t\t\t\t\t\t<input type=\"text\" name=\"trailer\" class=\"form-control\" [(ngModel)]='trailer' required=\"trailer\" placeholder=\"Movie Trailer\">\n\t\t\t\t\t\t\t<!-- <span  class=\"btn btn-warning btn-sm col-md-2\" (click)='onAddVideoSource(trailer)'>Add Source</span> -->\n\t\t\t\t\t\t\t<div class=\"col-md-12 movieTrailer\">\n\t\t\t\t\t\t\t<iframe width=\"560\" height=\"315\" [src]=\"trailer | youtube\" frameborder=\"0\" allowfullscreen *ngIf='trailer'></iframe>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<button  type=\"submit\" class=\"btn btn-primary pull-right\" [disabled]='f.invalid'>Add Movie</button>\n\t\t\t</form>\n\t\t\t\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/add-movie/add-movie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMovieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_movie_service_service__ = __webpack_require__("../../../../../src/app/services/movie-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { Movie } from '../../Models/Movie';
var AddMovieComponent = (function () {
    function AddMovieComponent(movieServiceService, router, flashMessagesService, satitizer) {
        this.movieServiceService = movieServiceService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
        this.satitizer = satitizer;
        this.movie = {
            movieTitle: '',
            movieDescription: '',
            movieImage: '',
            movieGenre: '',
            cast: [],
            trailer: []
        };
        this.cast = [{
                id: new Date().valueOf(),
                name: '',
                image: ''
            }];
        this.loader = false;
    }
    AddMovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movieServiceService.getCategory().subscribe(function (data) {
            // this.movies = data;
            console.log(data);
            var i = [];
            Object.keys(data).forEach(function (key) {
                if (key !== "$key") {
                    data[key].$key = key;
                    i.push(data[key]);
                }
                console.log(key);
            });
            console.log(i);
            _this.categories = i;
        });
    };
    AddMovieComponent.prototype.onAddMovie = function (f) {
        debugger;
        // let $this=this
        this.movie.movieTitle = f.value.movieTitle;
        // this.movie.movieCastName = f.value.movieCastName;
        this.movie.movieDescription = f.value.movieDescription;
        this.movie.movieGenre = f.value.movieGenre;
        this.movie.cast = this.cast;
        this.movie.trailer = f.value.trailer;
        console.log(f.value);
        this.movieServiceService.newMovie(this.movie);
        this.flashMessagesService.show('Movie added', { cssClass: 'alert-success', timeout: 1500 });
        this.router.navigate(['/admin-dashboard']);
    };
    //   YouTubeGetID(url){debugger
    //   let ID = '';
    //   url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    //   if(url[2] !== undefined) {
    //     ID = url[2].split(/[^0-9a-z_\-]/i);
    //     ID = ID[0];
    //   }
    //   else {
    //     ID = url;
    //   }
    //      return ID;
    //    // this.getEmbededUrl(ID)
    // }
    //   onAddVideoSource(abc){debugger
    //    this.video=abc
    //    this.YouTubeGetID(abc)
    //   }
    // getEmbededUrl(a){
    //   if(!_.isEmpty(a)){
    //     console.log(a);
    //     return this.satitizer.bypassSecurityTrustResourceUrl( a);  
    //   }else{
    //     return false;
    //   }
    // }
    AddMovieComponent.prototype.onAddCast = function () {
        this.cast.push({
            id: new Date().valueOf(),
            name: '',
            image: ''
        });
        console.log(name);
    };
    AddMovieComponent.prototype.removeCast = function (cast, i) {
        cast = this.cast.length - 1;
        if (confirm('Are you sure')) {
            if (cast !== 0) {
                this.cast.splice(i, 1);
            }
        }
    };
    AddMovieComponent.prototype.deleteCastImage = function (image, i) {
        if (confirm('are you sure')) {
            var image_1 = this.cast[i].image;
            delete this.cast[i].image;
        }
    };
    AddMovieComponent.prototype.deleteMovieImage = function () {
        if (confirm('are you sure')) {
            var movieImage = this.movie.movieImage;
            delete this.movie.movieImage;
        }
    };
    AddMovieComponent.prototype.onUploadSuccess = function ($event) {
        console.log($event);
        this.movie.movieImage = $event[0].dataURL;
        this.loader = false;
        console.log(this.movie.movieImage);
    };
    AddMovieComponent.prototype.onUploadCastImage = function ($event, i) {
        console.log($event);
        this.cast[i].image = $event[0].dataURL;
        // this.loader=false;
        console.log(this.cast[i].image);
    };
    AddMovieComponent.prototype.onUploadProgress = function ($event) {
        debugger;
        this.loader = true;
    };
    return AddMovieComponent;
}());
AddMovieComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-movie',
        template: __webpack_require__("../../../../../src/app/components/add-movie/add-movie.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/add-movie/add-movie.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_movie_service_service__["a" /* MovieServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_movie_service_service__["a" /* MovieServiceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _d || Object])
], AddMovieComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=add-movie.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin-dashboard/admin-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li{\n\tlist-style: none;\n}\nimg{\n\tmax-width: 100%;\n\t/*height: 200px;*/\n\tmargin: 0 auto;\n}\n.image-container{\n\theight: 300px;\n\twidth: 300px;\n\tdisplay: -ms-grid;\n\tdisplay: grid;\n\tmargin: 0 auto;\n}\nh4{\n    color: white;\n    text-align: center;\n}\nh5{\n\ttext-align: center;\n}\n.delete{\n    color: red;\n}\n.add-cat{\n    text-align: center;\n}\n.cataegory {\n    height: 100%;\n    width: 0;\n    position: fixed;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    background-color: #111;\n    overflow-x: hidden;\n    transition: 0.5s;\n    padding-top: 60px;\n}\n\n.cataegory a {\n    padding: 8px 8px 8px 32px;\n    text-decoration: none;\n    font-size: 25px;\n    color: #818181;\n    display: block;\n    transition: 0.3s;\n}\n\n.cataegory a:hover {\n    color: #f1f1f1;\n}\n\n.cataegory .closebtn {\n    position: absolute;\n    top: 0;\n    right: 25px;\n    font-size: 36px;\n    margin-left: 50px;\n}\n.sidebar{\n    font-size:30px;\n    cursor:pointer;\n    \n   /* width: 260px;\n    height: 700px;*/\n    margin-left: -300px;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-dashboard/admin-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"moviesCataegories\" class=\"cataegory\">\n\t<a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\n\t<div class=\"add-cat\">\n\t\t<h4><b>Movies Category</b></h4>\n\t\t<span class=\"btn btn-success btn-sm cat\" routerLink =\"/add-category\" >Add Category</span>\n\t</div>\n\t<a href=\"\" *ngFor='let cat of categories' [routerLink] = \"['/genre/'+cat.name]\"><li><h5>{{cat.name}}</h5></li></a>\n</div>\n\n<span class=\"sidebar\" (click)=\"openNav()\">&#9776;Movie Categories</span>\n\n<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-3 pull-right\">\n\t\t\t<div>\n\t\t\t\t<a href=\"#\" routerLink =\"/add-movie\" class=\"btn btn-success pull-right\"> <span class=\"glyphicon glyphicon-plus\"></span> Add Movie</a>\n\t\t\t</div>\n\t\t</div>\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\t<div>\n\t\t\t<ul>\n\t\t\t\t<li *ngFor=\"let m of movies\" class=\"col-md-4 col-xs-12\">\n\t\t\t\t\t<div class=\"panel panel-warning\">\n\t\t\t\t\t\t<!-- <div class=\"panel-heading\">{{m.movieTitle}}</div> -->\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t<div><a  data-toggle=\"tooltip\" data-placement=\"top\" title=\"Delete Movie\"class=\"glyphicon glyphicon-remove pull-right delete\" (click)= \"onDeleteMovie(m)\"></a></div>\n\t\t\t\t\t\t\t<div class=\"container image-container\">\n\t\t\t\t\t\t\t\t<img  src=\"{{m.movieImage}}\" >\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<span><h5>{{m.movieTitle}}</h5></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-footer\">\n\t\t\t\t\t\t\t<a href=\"\" [routerLink] =\"['/edit-movie/'+m.$key]\" ><i class=\"glyphicon glyphicon-pencil\"></i> Edit Movie</a> \t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/admin-dashboard/admin-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_movie_service_service__ = __webpack_require__("../../../../../src/app/services/movie-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminDashboardComponent = (function () {
    function AdminDashboardComponent(movieServiceService, router, route, flashMessagesService) {
        this.movieServiceService = movieServiceService;
        this.router = router;
        this.route = route;
        this.flashMessagesService = flashMessagesService;
        this.movie = {
            movieTitle: '',
            movieDescription: '',
            movieImage: '',
            cast: []
        };
        this.cast = [{
                id: new Date().valueOf(),
                name: '',
                image: ''
            }];
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.$key = this.route.snapshot.params['id'];
        this.movieServiceService.getCategory().subscribe(function (data) {
            // this.movies = data;
            console.log(data);
            var i = [];
            Object.keys(data).forEach(function (key) {
                if (key !== "$key") {
                    data[key].$key = key;
                    i.push(data[key]);
                }
                // console.log(key);
            });
            console.log(i);
            _this.categories = i;
        });
        this.id = this.route.snapshot.params['id'];
        this.movieServiceService.getMovies().subscribe(function (data) {
            // this.movies = data;
            console.log(data);
            var x = [];
            Object.keys(data).forEach(function (key) {
                if (key !== "$key") {
                    data[key].$key = key;
                    x.push(data[key]);
                }
                console.log(key);
            });
            console.log(x);
            _this.movies = x;
        });
    };
    AdminDashboardComponent.prototype.onDeleteMovie = function (m) {
        debugger;
        if (confirm('Are you sure?')) {
            this.movieServiceService.deleteMovie(m);
            this.flashMessagesService.show('Movie deleted', { cssClass: 'alert-success', timeout: 1000 });
            this.router.navigate(['/admin-dashboard']);
        }
    };
    AdminDashboardComponent.prototype.openNav = function () {
        document.getElementById("moviesCataegories").style.width = "250px";
    };
    AdminDashboardComponent.prototype.closeNav = function () {
        document.getElementById("moviesCataegories").style.width = "0";
    };
    return AdminDashboardComponent;
}());
AdminDashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-dashboard',
        template: __webpack_require__("../../../../../src/app/components/admin-dashboard/admin-dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin-dashboard/admin-dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_movie_service_service__["a" /* MovieServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_movie_service_service__["a" /* MovieServiceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], AdminDashboardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=admin-dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin-login/admin-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel-group{\n\tmargin-top: 100px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-login/admin-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-md-6 col-md-offset-3\">\n\t\t<div class=\"panel panel-group\">\n\t\t\t<div class=\"panel-heading text-center\">\n\t\t\t\t\n\t\t\t\t<h2 class=\"text-center\">Admin Login</h2>\n\t\t\t</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<form (submit) = \"onAdminLogin()\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"email\" >Email:</label>\n\t\t\t\t\t\t<input type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" required placeholder=\"Email\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"password\" >Password:</label>\n\t\t\t\t\t\t<input type=\"password\" [(ngModel)]=\"password\" name=\"password\" required class=\"form-control\" placeholder=\"Password\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<button class=\"btn btn-primary btn-block\" type=\"submit\">Submit </button>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/admin-login/admin-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service_service__ = __webpack_require__("../../../../../src/app/services/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_movie_service_service__ = __webpack_require__("../../../../../src/app/services/movie-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminLoginComponent = (function () {
    function AdminLoginComponent(authServiceService, router, flashMessagesService, movieServiceService) {
        this.authServiceService = authServiceService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
        this.movieServiceService = movieServiceService;
        this.admin = false;
        this.authServiceService.getAuth().subscribe(function (auth) {
            // let aid=auth.uid ;Tu3hdIqMYqei8MOUmoNAcyaTfMT2
        });
    }
    AdminLoginComponent.prototype.ngOnInit = function () {
    };
    AdminLoginComponent.prototype.onAdminLogin = function () {
        var _this = this;
        debugger;
        this.authServiceService.onAdminLogin(this.email, this.password)
            .then(function (res) {
            debugger;
            _this.movieServiceService.getUsers().subscribe(function (data) {
                // data.map(obj=>{debugger
                console.log(data);
                if (res.uid === data.uid) {
                    debugger;
                    _this.flashMessagesService.show('You are Logged in', { cssClass: 'alert-success', timeout: 2000 });
                    _this.router.navigate(['/admin-dashboard']);
                }
            });
            // })
        })
            .catch(function (err) {
            _this.flashMessagesService.show(err.message, { cssClass: 'alert-danger', timeout: 2000 });
            _this.router.navigate(['/login']);
        });
        this.admin = true;
        console.log(this.admin);
    };
    return AdminLoginComponent;
}());
AdminLoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-login',
        template: __webpack_require__("../../../../../src/app/components/admin-login/admin-login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin-login/admin-login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service_service__["a" /* AuthServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service_service__["a" /* AuthServiceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_movie_service_service__["a" /* MovieServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_movie_service_service__["a" /* MovieServiceService */]) === "function" && _d || Object])
], AdminLoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=admin-login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/categories/categories.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a{\n\tcolor: blue;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/categories/categories.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<a href=\"admin-dashboard\" class=\"glyphicon glyphicon-arrow-left col-md-2\">Back to Dashboard</a>\n\t\t<div class=\"container\">\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<form #f='ngForm'(ngSubmit)=\"onAddCategory(f)\">\n\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t<label for=\"category\">Add category:</label>\n\t\t\t\t\t\t<input type=\"text\" name=\"name\" class=\"form-control\"  [(ngModel)]='category.name'  placeholder=\"Category\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<button class=\"btn btn-success\">Add Category</button>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/categories/categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_movie_service_service__ = __webpack_require__("../../../../../src/app/services/movie-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoriesComponent = (function () {
    function CategoriesComponent(movieServiceService, flashMessagesService, router, routes) {
        this.movieServiceService = movieServiceService;
        this.flashMessagesService = flashMessagesService;
        this.router = router;
        this.routes = routes;
        this.category = {
            name: '',
        };
    }
    CategoriesComponent.prototype.ngOnInit = function () {
    };
    CategoriesComponent.prototype.onAddCategory = function (f) {
        this.category.name = f.value.name;
        // this.category.id=f.value.id;	
        this.movieServiceService.addCategory(this.category);
        console.log(this.category.name);
        this.flashMessagesService.show('Category added', { cssClass: 'alert-success', timeout: 1500 });
        this.router.navigate(['admin-dashboard']);
    };
    return CategoriesComponent;
}());
CategoriesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-categories',
        template: __webpack_require__("../../../../../src/app/components/categories/categories.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/categories/categories.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_movie_service_service__["a" /* MovieServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_movie_service_service__["a" /* MovieServiceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], CategoriesComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=categories.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/change-password/change-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/change-password/change-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-6 col-md-offset-3\">\n\t\t\t<div>\n\t\t\t\t<h4>Please fill the fields To Continue</h4>\n\t\t\t</div>\n\t\t\t<form #f= 'ngForm' submit >\n\t\t\t\t\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"password\" >Old Password:</label>\n\t\t\t\t\t<input type=\"password\"  name=\"password\" required class=\"form-control\" placeholder=\"Old Password\" [(ngModel)]='password'>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"password\" >New Password:</label>\n\t\t\t\t\t<input type=\"password\"  name=\"newPassword\" required class=\"form-control\" minlength=\"6\" placeholder=\"New Password\" [(ngModel)]='newPassword'>\n\t\t\t\t</div>\n\t\t\t\t<button type=\"submit\" class=\"btn btn-success\" (click)='onChangeUserPassword(f)'>Update Password</button>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/change-password/change-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service_service__ = __webpack_require__("../../../../../src/app/services/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(authServiceService, angularFireAuth, flashMessagesService, router, route) {
        var _this = this;
        this.authServiceService = authServiceService;
        this.angularFireAuth = angularFireAuth;
        this.flashMessagesService = flashMessagesService;
        this.router = router;
        this.route = route;
        this.authServiceService.getAuth().subscribe(function (auth) {
            // firebase.auth().currentUser;
            _this.isLogedinUser = auth.email;
            console.log(_this.isLogedinUser);
        });
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordComponent.prototype.onChangeUserPassword = function (f) {
        var _this = this;
        debugger;
        var newPassword = f.value.newPassword;
        var user = __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().currentUser;
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().currentUser.reauthenticateWithCredential(__WEBPACK_IMPORTED_MODULE_1_firebase__["auth"].EmailAuthProvider.credential(__WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().currentUser.email, f.value.password))
            .then(function (res) {
            debugger;
            console.log(f.value.password, __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().currentUser.email);
            user.updatePassword(newPassword).then(function (res) {
                debugger;
                console.log(newPassword);
                _this.flashMessagesService.show('Password Updated', { cssClass: 'alert-success', timeout: 1500 });
                _this.router.navigate(['']);
            }).catch(function (err) {
                _this.flashMessagesService.show(err.message, { cssClass: 'alert-danger', timeout: 2000 });
            });
        })
            .catch(function (err) {
            _this.flashMessagesService.show('You have Entered a wrong Password please try again', { cssClass: 'alert-danger', timeout: 3000 });
        });
    };
    return ChangePasswordComponent;
}());
ChangePasswordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-change-password',
        template: __webpack_require__("../../../../../src/app/components/change-password/change-password.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/change-password/change-password.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service_service__["a" /* AuthServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service_service__["a" /* AuthServiceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object])
], ChangePasswordComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=change-password.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/edit-movie/edit-movie.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.image-container{\n    height: 250px;\n    width: 250px;\n    display: -ms-grid;\n    display: grid;\n    margin:0px 100px 0px 40px;\n    position: relative;\n}\n.remove{\n    color: red;\n    position: absolute;\n    right: 0;\n    text-decoration: none;\n    padding-top: 25px;\n   \n}\n.dropzone-div{\n\tbackground-color: #f2f2f2;\n\theight: 100px;\n    width: 200px;\n    position: relative;\n    border: 1px dotted black;\n    margin-top: 30px;\n}\n.dropzone-text{\n\t\n\tmargin: 0;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-right: -50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%)\n}\n.castDiv{\n    background-color: #f2f2f2;\n    height: 100px;\n    width: 150px;\n    position: relative;\n    border: 1px dotted black;\n    margin-top: inherit;\n}\n.castSpan{\n    margin: 0;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-right: -50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%)\n}\n.cast{\n    margin-top: 20px;\n    position: relative;\n}\n.addCast{\n   /* position: relative;*/\n    left: 155px;\n    bottom:100px;\n}\n.castName{\n    margin-bottom: 5px;\n}\n.removeCastImage{\n    color: red;\n    position: absolute;\n    right: 0;\n    text-decoration: none;\n    padding-top: 25px;\n}\n.castImage-container{\n    height: 300px;\n    width: 250px;\n    display: -ms-grid;\n    display: grid;\n    margin:0px 100px 0px -25px;\n    position: relative;\n}\nimg{\n    max-width: 80%;\n    \n}\n.deleteCast{\n    position: absolute;\n    left: 200px;\n    bottom: 100px;\n}\nh6{ color: red; } \nh4{\n  color: red;\n}\n.movieTrailer{\n  margin:10px;\n}\n\n.loader{\n\n  position: absolute;\n\n  left: 170%;\n  top: 230%;\n  z-index: 1;\n  width: 100px;\n  height: 100px;\n  margin: -75px 0 0 -75px;\n  border: 5px solid white;\n  border-radius: 50%;\n  border-top: 5px solid black;\n  border-bottom: 5px solid black;\n  \n  width: 85px;\n  height: 85px;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 1s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% { -webkit-transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); }\n}\n/*.loader-cast{\n   position: absolute;\n  left: 19%;\n  top: 48%;\n  z-index: 1;\n  width: 100px;\n  height: 100px;\n  margin: -75px 0 0 -75px;\n  border: 5px solid white;\n  border-radius: 50%;\n  border-top: 5px solid black;\n  border-bottom: 5px solid black;\n  \n  width: 50px;\n  height: 50px;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 1s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% { -webkit-transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); }\n}*/\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/edit-movie/edit-movie.component.html":
/***/ (function(module, exports) {

module.exports = "<div >\n\t<a href=\"#\" routerLink = '/admin-dashboard' class=\"btn btn-link\"><span class=\"glyphicon glyphicon-arrow-left\"></span> Back to Main Page</a>\n</div>\n<div class=\"container\">\n\t\n\t<div class=\"panel panel-primary\">\n\t\t<div class=\"panel-heading\">Edit Movie: {{movie.movieTitle}}</div>\n\t\t<div class=\"panel-body\">\n\t\t\t<form #f = \"ngForm\" (ngSubmit) = \"onUpdateMovie(f)\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<div [dropzone]=\"config\" (error)=\"onUploadError($event)\" (processing)='onUploadProgress($event)' (success)=\"onUploadSuccess($event)\" *ngIf='!movie.movieImage'>\n\t\t\t\t\t\t\t<div class=\"dz-message\" data-dz-message>\n\t\t\t\t\t\t\t\t<div class=\"dropzone-div\"><span class=\"dropzone-text\">Add Movie Poster</span></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div action=\"/file-upload\" class=\"dropzone\" id=\"my-awesome-dropzone\"></div>\n\n\t\t\t\t\t\t<div class=\"container image-container \" *ngIf = \"movie.movieImage\">\n\t\t\t\t\t\t\t<a class=\"glyphicon glyphicon-remove remove\" (click) = \"deleteMovieImageOnEdit()\"></a>\n\t\t\t\t\t\t\t<img src=\"{{movie.movieImage}}\" >\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- Loader -->\n\t\t\t\t\t\t<div class=\"loader\" *ngIf= \"loader\" ></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<br>\n\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"title\">Movie Title:</label>\n\t\t\t\t\t\t\t<input type=\"text\" name=\"movieTitle\" class=\"form-control\"  [(ngModel)]='movie.movieTitle' required=\"movieTitle\" #movieTitle='ngModel' placeholder=\"Movie Title\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf = \"movieTitle?.errors?.required && movieTitle?.touched\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\tName Required\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"summery\">Summary:</label>\n\t\t\t\t\t\t\t<textarea class=\"form-control\" rows=\"2\" name=\"movieDescription\" [(ngModel)]='movie.movieDescription' required=\"movieDescription\" #movieDescription='ngModel' placeholder=\"description..\"></textarea>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf = \"movieDescription?.errors?.required && movieDescription?.touched\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\tRequired\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"genres\">Genres list (select one):</label>\n      \t\t\t\t\t\t<select class=\"form-control\" id=\"genres\" [(ngModel)]='movie.movieGenre' required=\"movieGenre\" name=\"movieGenre\" #movieGenre='ngModel'>\n        \t\t\t\t\t\t<option *ngFor='let cat of categories' [value]='cat.name' (input)= \"cat.name= $event.target.value\">{{cat.name}}</option>\n        \t\t\t\t\t\t\n     \t\t\t\t\t\t</select>\n  \t\t\t\t\t\t</div>\n  \t\t\t\t\t\t<div *ngIf='movieGenre?.errors?.required && movieGenre?.touched' class=\"alert alert-danger\">\n  \t\t\t\t\t\t\tRequired\n  \t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group cast\" *ngFor='let c of movie.cast ;let i = index '>\n\t\t\t\t\t\t\t<label for=\"cast\">Cast:</label>\n\t\t\t\t\t\t\t<div class=\"castName\">\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"name\" [value]='c.name' (input)= \"c.name= $event.target.value\" required=\"name\"  placeholder=\"Cast Name\" >\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngIf = \"name?.errors?.required && name?.touched\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\tCast Name Required\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div [dropzone]=\"config\" (error)=\"onUploadError($event)\" (processing)='onUploadProgress($event)' (success)=\"onUploadCastImage($event,i)\" name = \"image\" *ngIf = \"!c.image\">\n\t\t\t\t\t\t\t\t<div class=\"dz-message \" data-dz-message>\n\t\t\t\t\t\t\t\t\t<div class=\"dropzone-div castDiv\"><span class=\"dropzone-text castSpan\">Add cast Pic</span></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div action=\"/file-upload\" class=\"dropzone\" id=\"my-awesome-dropzone\"></div>\n\t\t\t\t\t\t\t<div class=\"container castImage-container \" *ngIf = \"c.image\" required='image'>\n\t\t\t\t\t\t\t\t<a class=\"glyphicon glyphicon-remove removeCastImage\"  (click) = \"deleteCastImageOnEdit(image,i)\"></a>\n\t\t\t\t\t\t\t\t<img src=\"{{c.image}}\" class=\"img\">\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- <div class=\"loader-cast\" *ngIf= \"loader && !c.image\"></div> -->\n\t\t\t\t\t\t\t<a  class=\"btn btn-danger btn-sm pull-right deleteCast\"  (click)=\"removeCastOnEdit(cast,i)\" >Delete Cast</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"addCastDiv\">\n\t\t\t\t\t\t\t<a class=\"btn btn-warning btn-sm addCast\" (click)='onAddCastOnEdit()'>Add Cast</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"form-group movieTrailer\" >\n\t\t\t\t\t\t\t<label for=\"movieTrailer\">Movie Trailer:<h6>*paste youtube embeded code here</h6></label>\n\t\t\t\t\t\t\t<input type=\"text\" name=\"trailer\" class=\"form-control\" [(ngModel)]='movie.trailer' required=\"trailer\" placeholder=\"Movie Trailer\">\n\t\t\t\t\t\t\t<!-- <span  class=\"btn btn-warning btn-sm col-md-2\" (click)='onAddVideoSource(trailer)'>Add Source</span> -->\n\t\t\t\t\t\t\t<div class=\"col-md-12 movieTrailer\">\n\t\t\t\t\t\t\t<iframe width=\"560\" height=\"315\" [src]=\"movie.trailer | youtube\" frameborder=\"0\" allowfullscreen *ngIf='movie.trailer'></iframe>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<span  *ngIf='movie.trailer;else noTrailer'></span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<button  type=\"submit\" class=\"btn btn-primary pull-right\">Update</button>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>\n<ng-template #noTrailer>\n\t<h4 class=\"noTrailer\">No Trailer available now</h4>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/components/edit-movie/edit-movie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditMovieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_movie_service_service__ = __webpack_require__("../../../../../src/app/services/movie-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditMovieComponent = (function () {
    function EditMovieComponent(movieServiceService, router, route) {
        this.movieServiceService = movieServiceService;
        this.router = router;
        this.route = route;
        this.movie = {};
        // movie = {
        //   movieTitle:'',
        //   movieDescription:'',
        //   movieImage:'',
        //   cast:[]
        // };
        this.cast = [{
                id: new Date().valueOf(),
                name: '',
                image: ''
            }];
        this.loader = false;
    }
    EditMovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.$key = this.route.snapshot.params['id'];
        // this.movieServiceService.getMovies().subscribe(data=>{
        // 	this.movies=data;
        // })
        this.movieServiceService.getMovie(this.$key).valueChanges().subscribe(function (data) {
            console.log(data);
            _this.movie = data;
        });
        this.movieServiceService.getCategory().subscribe(function (data) {
            // this.movies = data;
            console.log(data);
            var i = [];
            Object.keys(data).forEach(function (key) {
                if (key !== "$key") {
                    data[key].$key = key;
                    i.push(data[key]);
                }
                console.log(key);
            });
            console.log(i);
            _this.categories = i;
        });
    };
    EditMovieComponent.prototype.onUpdateMovie = function (f) {
        debugger;
        // this.movie.trailer=f.value.trailer
        this.movieServiceService.updateMovie(this.$key, this.movie);
        this.router.navigate(['/admin-dashboard']);
    };
    EditMovieComponent.prototype.deleteMovieImageOnEdit = function () {
        if (confirm('Are you sure')) {
            var movieImage = this.movie.movieImage;
            delete this.movie.movieImage;
        }
    };
    EditMovieComponent.prototype.deleteCastImageOnEdit = function (image, i) {
        // this.cast.length-1;
        if (confirm('Are you sure?')) {
            var image_1 = this.movie.cast[i].image;
            delete this.movie.cast[i].image;
        }
    };
    EditMovieComponent.prototype.onAddCastOnEdit = function () {
        this.movie.cast.push({
            id: new Date().valueOf(),
            name: '',
            image: ''
        });
        console.log(name);
        console.log(this.movie.cast.image);
    };
    EditMovieComponent.prototype.removeCastOnEdit = function (cast, i) {
        this.movie.cast.length - 1;
        if (confirm('Are you sure?')) {
            if (this.movie.cast !== 0) {
                this.movie.cast.splice(i, 1);
            }
        }
        console.log(this.movie.cast[i]);
    };
    EditMovieComponent.prototype.onUploadCastImage = function ($event, i) {
        console.log($event);
        this.movie.cast[i].image = $event[0].dataURL;
        this.loader = false;
        console.log(this.movie.cast[i].image);
    };
    EditMovieComponent.prototype.onUploadSuccess = function ($event) {
        // this.loader=true;
        console.log($event);
        this.movie.movieImage = $event[0].dataURL;
        this.loader = false;
        console.log(this.movie.movieImage);
    };
    EditMovieComponent.prototype.onUploadProgress = function ($event) {
        this.loader = true;
    };
    return EditMovieComponent;
}());
EditMovieComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-movie',
        template: __webpack_require__("../../../../../src/app/components/edit-movie/edit-movie.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/edit-movie/edit-movie.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_movie_service_service__["a" /* MovieServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_movie_service_service__["a" /* MovieServiceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], EditMovieComponent);

var _a, _b, _c;
//# sourceMappingURL=edit-movie.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/favourate/favourate.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li{\n\tlist-style: none;\n}\nimg{\n\tmax-width: 100%;\n\t/*height: 200px;*/\n\tmargin: 0 auto;\n}\n.image-container{\n\theight: 300px;\n\twidth: 300px;\n\tdisplay: -ms-grid;\n\tdisplay: grid;\n\tmargin: 0 auto;\n}\nh5{\n\ttext-align: center;\n}\n.delete{\n\tcolor: red;\n\t\n}\nh4{\n\ttext-align: center;\n\tcolor:red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/favourate/favourate.component.html":
/***/ (function(module, exports) {

module.exports = "<div >\n\t<a href=\"#\" routerLink = '' class=\"btn btn-link\"><span class=\"glyphicon glyphicon-arrow-left\"></span> Back to Main Page</a>\n</div>\n<div class=\"container\">\n\t<div class=\"row\" *ngIf='movie?.length >0; else noMovie'>\n\t\t<div>\n\t\t\t<ul>\n\t\t\t\t<li *ngFor='let mov of movie' class=\"col-md-4 col-xs-12\">\n\t\t\t\t\t<div class=\"panel panel-primary\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t<div><a  data-toggle=\"tooltip\" data-placement=\"top\" title=\"Remove as Favourite\" class=\"glyphicon glyphicon-remove pull-right delete\" (click)= \"onRemoveFavourate(mov)\"></a></div>\n\t\t\t\t\t\t\t<div class=\"container image-container\">\n\t\t\t\t\t\t\t\t<img  src=\"{{mov.movieImage}}\" >\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<span><h5>{{mov.movieTitle}}</h5></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-footer\">\n\t\t\t\t\t\t\t<!-- <a href=\"\" [routerLink] =\"['/edit-movie/'+m.$key]\" ><i class=\"glyphicon glyphicon-pencil\"></i> Edit Movie</a> \t -->\n\t\t\t\t\t\t\t<a href=\"\" [routerLink] =\"['/movie-detail/'+mov.$key]\" >View Details...</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</div>\n<ng-template #noMovie>\n\t<h4>No favourites to show</h4>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/components/favourate/favourate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavourateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_movie_service_service__ = __webpack_require__("../../../../../src/app/services/movie-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service_service__ = __webpack_require__("../../../../../src/app/services/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FavourateComponent = (function () {
    function FavourateComponent(movieServiceServices, flashMessagesService, authServiceService, router, route) {
        this.movieServiceServices = movieServiceServices;
        this.flashMessagesService = flashMessagesService;
        this.authServiceService = authServiceService;
        this.router = router;
        this.route = route;
        this.movie = {};
    }
    FavourateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.authServiceService.getAuth().subscribe(function (auth) {
            _this.movieServiceServices.getUserFavourite(auth.uid).valueChanges().subscribe(function (data) {
                console.log(data);
                if (!__WEBPACK_IMPORTED_MODULE_5_lodash___default.a.isEmpty(data)) {
                    var i_1 = [];
                    Object.keys(data).forEach(function (key) {
                        if (key !== "$key") {
                            data[key].$key = key;
                            i_1.push(data[key]);
                        }
                    });
                    console.log(i_1);
                    _this.movie = i_1;
                    // console.log('hello');
                }
                else {
                    _this.movie = {};
                }
            });
        });
    };
    FavourateComponent.prototype.onRemoveFavourate = function (mov) {
        var _this = this;
        if (confirm('Are you sure?')) {
            this.authServiceService.getAuth().subscribe(function (auth) {
                _this.movieServiceServices.removeMovieAsfavourate(auth.uid, mov);
            });
            this.router.navigate(['/favourate']);
            this.flashMessagesService.show('Removed as Favourite', { cssClass: 'alert-success', timeout: 1500 });
        }
    };
    return FavourateComponent;
}());
FavourateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-favourate',
        template: __webpack_require__("../../../../../src/app/components/favourate/favourate.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/favourate/favourate.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_movie_service_service__["a" /* MovieServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_movie_service_service__["a" /* MovieServiceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service_service__["a" /* AuthServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service_service__["a" /* AuthServiceService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object])
], FavourateComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=favourate.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/genres/genres.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li{\n\tlist-style: none;\n}\nimg{\n\tmax-width: 100%;\n\tmargin: 0 auto;\n\n}\n.image-container{\n\theight: 300px;\n\twidth: 300px;\n\tdisplay: -ms-grid;\n\tdisplay: grid;\n\tmargin: 0 auto;\n\t/*padding: 0px;*/\n}\nh5,h3{\n\ttext-align: center;\n}\n.panel-body{\n\tpadding: 0px;\n}\nh4{\n\tcolor: red;\n\ttext-align: center;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/genres/genres.component.html":
/***/ (function(module, exports) {

module.exports = "<div >\n\t<a href=\"#\" routerLink = '' class=\"btn btn-link\"><span class=\"glyphicon glyphicon-arrow-left\"></span> Back to Main Page</a>\n</div>\n<div>\n\t<h3>{{name}}</h3>\n\t<div class=\"row\" *ngIf='movie?.length>0;else noMovie'>\n\t\t<ul>\n\t\t\t<li *ngFor=\"let mov of movie; let i = index; \" class=\"col-md-4\">\n\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t<!-- <div class=\"panel-heading\">{{m.movieTitle}}</div> -->\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<div class=\"container image-container\">\n\t\t\t\t\t\t\t<img src=\"{{mov.movieImage}}\" >\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<span><h5>{{mov.movieTitle}}</h5></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-footer\">\n\t\t\t\t\t\t<a href=\"\" [routerLink] =\"['/movie-detail/'+mov.$key]\" >View Details...</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</div>\n<ng-template #noMovie>\n\t<h4>No Movies in this Catageory</h4>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/components/genres/genres.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenresComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_movie_service_service__ = __webpack_require__("../../../../../src/app/services/movie-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GenresComponent = (function () {
    function GenresComponent(movieServiceService, router, route) {
        this.movieServiceService = movieServiceService;
        this.router = router;
        this.route = route;
        this.cast = [{
                id: new Date().valueOf(),
                name: '',
                image: ''
            }];
        this.category = {
            name: '',
        };
    }
    GenresComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            // const id = params['id'];
            _this.name = params['name'];
            _this.movieServiceService.getMoviesByGenre().subscribe(function (data) {
                console.log(data);
                var m = [];
                Object.keys(data).forEach(function (k) {
                    if (k !== "$key") {
                        data[k].$key = k;
                        // data[k].movieGenre;
                        if (_this.name === data[k].movieGenre) {
                            m.push(data[k]);
                            console.log(m);
                            _this.movie = m;
                            console.log(_this.movie);
                        }
                    }
                });
            });
        });
    };
    return GenresComponent;
}());
GenresComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-genres',
        template: __webpack_require__("../../../../../src/app/components/genres/genres.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/genres/genres.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_movie_service_service__["a" /* MovieServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_movie_service_service__["a" /* MovieServiceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], GenresComponent);

var _a, _b, _c;
//# sourceMappingURL=genres.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".adminLogin{\n\tfloat: right;\n    margin: 0 0 10px 10px;\n    font-weight: bold;\n\n}\n.google {\n    background-color: #dd4b39 !important;\n  }\n.facebook {\n    background-color: #006699 !important;\n  }\n.password{\n\t-ms-flex-item-align: center;\n\t    -ms-grid-row-align: center;\n\t    align-self: center;\n}\nh4{\n\ttext-align: center;\n\tmargin:5px;\n}\n.email{\n\tmargin-bottom: 6px;\n}\n.navTab{\n  padding: 0px;\n  \n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-6 col-md-offset-3\">\n\t\t\t<div class=\"col-md-12 navTab\">\n\t\t\t\t<ul class=\"nav nav-tabs nav-justified\">\n\t\t\t\t\t<li class=\"active\"><a data-toggle=\"tab\" href=\"#menu1\" >Login</a></li>\n\t\t\t\t\t<li ><a data-toggle=\"tab\" href=\"#home\" >Register</a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"tab-content \">\n\t\t\t\t<div id=\"menu1\" class=\"tab-pane fade in active\">\n\t\t\t\t\t<div class=\"panel panel-group\">\n\t\t\t\t\t\t<div class=\"col-md-6 col-md-offset-3\">\n\t\t\t\t\t\t\t<div class=\"panel-heading text-center\">\n\t\t\t\t\t\t\t\t<h2 class=\"text-center\">Login</h2>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<form >\n\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group email\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"email\" >Email:</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\"  name=\"email\" class=\"form-control\" required placeholder=\"Email\" [(ngModel)]='email'>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"password\" >Password:</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"password\"  name=\"password\" required class=\"form-control\" placeholder=\"Password\" [(ngModel)]='password'>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group email\">\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-block\" type=\"button\" (click)=\"signInWithEmail()\">\n\t\t\t\t\t\t\t\t\t\t\tLogin with Email\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<span><h4>-OR-</h4></span>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"buton\" class=\"btn btn-primary btn-block facebook\" (click)=\"signInWithFacebook()\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\tLogin with Facebook\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn google btn-block\" (click)=\"signInWithGoogle()\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-google\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\tLogin with Google\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div id=\"home\" class=\"tab-pane fade\">\n\t\t\t\t\t<div class=\"panel panel-group\">\n\t\t\t\t\t\t<div class=\"col-md-6 col-md-offset-3\">\n\t\t\t\t\t\t\t<div class=\"panel-heading text-center\">\n\t\t\t\t\t\t\t\t<h2 class=\"text-center\">User Register</h2>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<form (submit) = \"onRegisterSubmit()\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"email\" >Email:</label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"email\" [(ngModel)] = \"email\" name=\"email\" class=\"form-control\" required placeholder=\"Email\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"password\" >Password:</label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"password\" [(ngModel)] = \"password\" name=\"password\" required class=\"form-control\" minlength=\"6\" placeholder=\"Password\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success btn-block\" type=\"submit\">Register </button>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service_service__ = __webpack_require__("../../../../../src/app/services/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_movie_service_service__ = __webpack_require__("../../../../../src/app/services/movie-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(authServiceService, router, flashMessagesService, movieServiceService, angularFireAuth) {
        this.authServiceService = authServiceService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
        this.movieServiceService = movieServiceService;
        this.angularFireAuth = angularFireAuth;
        this.guest = false;
        this.profile = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.signInWithEmail = function () {
        var _this = this;
        this.authServiceService.userLogin(this.email, this.password)
            .then(function (res) {
            _this.flashMessagesService.show('Welcome to Movie Review', { cssClass: 'alert-success', timeout: 2000 });
            _this.router.navigate(['']);
        })
            .catch(function (err) {
            _this.flashMessagesService.show(err.message, { cssClass: 'alert-danger', timeout: 2000 });
            _this.router.navigate(['/login']);
        });
        this.guest = true;
        console.log(this.guest);
    };
    LoginComponent.prototype.signInWithFacebook = function () {
        var _this = this;
        this.authServiceService.signInWithFacebook()
            .then(function (res) {
            _this.router.navigate(['']);
            _this.flashMessagesService.show('Welcome to Movie Review', { cssClass: 'alert-success', timeout: 1500 });
        })
            .catch(function (err) { return console.log(err); });
    };
    LoginComponent.prototype.signInWithGoogle = function () {
        var _this = this;
        this.authServiceService.signInWithGoogle()
            .then(function (res) {
            _this.router.navigate(['']);
            _this.flashMessagesService.show('Welcome to Movie Review', { cssClass: 'alert-success', timeout: 1500 });
        })
            .catch(function (err) { return console.log(err); });
    };
    LoginComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.authServiceService.newUser(this.email, this.password)
            .then(function (res) {
            var profile = {};
            profile.role = 'guest';
            _this.authServiceService.getAuth().subscribe(function (auth) {
                _this.movieServiceService.newUserProfile(profile, auth.uid);
            });
            _this.flashMessagesService.show('Registered Successfully', { cssClass: 'alert-success', timeout: 1500 });
            _this.router.navigate(['']);
        })
            .catch(function (err) {
            _this.flashMessagesService.show(err.message, { cssClass: 'alert-danger', timeout: 1500 });
            _this.router.navigate(['/login']);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service_service__["a" /* AuthServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service_service__["a" /* AuthServiceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_movie_service_service__["a" /* MovieServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_movie_service_service__["a" /* MovieServiceService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _e || Object])
], LoginComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/movie-detail/movie-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".poster{\n\tfloat: left;\n\tmargin: 15px;\n\theight: 290px;\n\twidth: 380px;\n\toverflow: hidden;\n}\n.poster img{\n\tmargin: 0 auto;\n\tmax-width: 100%;\n\tbox-shadow: 5px 7px 9px grey;\n\tpadding: 0px;\n}\nli{\n\tlist-style: none;\n}\n.card{\n\n}\n.cast-image img{\n\tmax-width: 100%;\n\tmargin: 0 auto;\n\tmax-height: 100%;\n}\nh2{\n\ttext-align: center;\n}\nh3{\n\ttext-align: center;\n}\n.cast-image{\n\n\theight: 150px;\n\twidth: 150px;\n\tdisplay: -ms-grid;\n\tdisplay: grid;\n\tmargin: 0 auto;\n}\n.remove{\n\tcolor:red;\n}\n.userEmail{\n\tcolor: blue;\n}\n.fa-user{\n\tcolor: grey;\n}\n.noTrailer{\n\tcolor: red;\n\ttext-align: center;\n}\n.video{\n\tmargin-top: 40px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/movie-detail/movie-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div >\n\t<a href=\"#\" routerLink = '' class=\"btn btn-link\"><span class=\"glyphicon glyphicon-arrow-left\"></span> Back to Main Page</a>\n</div>\n<div class=\"well well-lg movie-detail\">\n\t\n\t\t<div class=\"row\">\n\t\t\t<div class=\"poster col-md-6\">\n\t\t\t\t<img src=\"{{movie.movieImage}}\" alt=\"Poster\" class=\"title panel-body img-responsive\" >\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div><h1>{{movie.movieTitle}}</h1></div>\n\t\t\t\t<div>\n\t\t\t\t\t{{movie.movieDescription}}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\n\t<div class=\"row \">\n\t\t<div><h2>Cast</h2></div>\n\t\t<div *ngFor='let c of cast' class=\"col-md-3 panel-body\">\n\t\t\t<div class=\"panel panel-warning\">\n\t\t\t\t<div><h3>{{c.name}}</h3></div>\n\t\t\t<div class=\"cast-image\">\n\t\t\t\t<img src=\"{{c.image}}\" alt=\"Cast1\" >\n\t\t\t</div>\n\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div>\n\t\t<div class=\"row\">\n\t<div class=\"col-md-8 col-md-offset-2\">\n\t\t\n\t\t<div class=\"video col-lg-offset-1\"  *ngIf='movie.trailer;else noTrailer'>\n\t\t\t<iframe width=\"560\" height=\"315\" [src]=\"movie.trailer | youtube\" frameborder=\"0\" allowfullscreen></iframe>\n\t\t</div>\n\t</div>\n</div>\n\t\t\n\t</div>\n\t\n</div>\n\n<div class=\"well well-sm\">\n\t<small>\n    \t<h4><a (click) = \"showCommentInput = !showCommentInput\"><i class=\"fa fa-comment\" aria-hidden=\"true\"></i> Comments:</a></h4>\n    </small>\n    <div>\n    \t<form  #f='ngForm'(ngSubmit)=onSubmitUserComments(f)>\n    \t\t<div class=\"form-group\">\n    \t\t\t<input type=\"text\" name=\"userComment\" class=\"form-control\" [(ngModel)]='userComment'>\n    \t\t</div>\n    \t\t<button class=\"btn btn-success btn-sm\">Comment</button>\n    \t</form>\n    </div>\n    <div >\n    \t<ul>\n    \t\t<li *ngFor='let com of c ; let i= index '> \n    \t\t\t<h5>\n    \t\t\t\t<p> <span class=\"userEmail\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i>  {{com.email}} : </span><span class=\"comment\">{{com.comment}}</span> \n    \t\t\t\t\t<span *ngIf='Authuser'><span *ngIf='Authuser.uid === c[i].id ' class=\"glyphicon glyphicon-remove pull-right remove\" (click)='onDeleteComment(com,i)'></span></span>\n    \t\t\t\t</p>\n    \t\t\t\t\t\n    \t\t\t</h5>\n    \t\t</li>\n    \t</ul>\n    </div>\n</div>\n\n\n<ng-template #noTrailer>\n\t<h4 class=\"noTrailer\">No Trailer available now</h4>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/components/movie-detail/movie-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_movie_service_service__ = __webpack_require__("../../../../../src/app/services/movie-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service_service__ = __webpack_require__("../../../../../src/app/services/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MovieDetailComponent = (function () {
    // movie = {
    //   movieTitle:'',
    //   movieDescription:'',
    //   movieImage:'',
    //   cast:[]
    // };
    function MovieDetailComponent(movieServiceService, authServiceServioce, router, route, flashMessagesService, sanitizer) {
        var _this = this;
        this.movieServiceService = movieServiceService;
        this.authServiceServioce = authServiceServioce;
        this.router = router;
        this.route = route;
        this.flashMessagesService = flashMessagesService;
        this.sanitizer = sanitizer;
        this.movie = {};
        this.showCommentInput = false;
        this.comment = [];
        this.c = [];
        this.authServiceServioce.getAuth().subscribe(function (auth) {
            _this.Authuser = auth;
            // this.user=auth.email;
        });
    }
    MovieDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.$key = this.route.snapshot.params['id'];
        this.movieServiceService.getMovie(this.$key).valueChanges().subscribe(function (data) {
            console.log(data);
            _this.movie = data;
            _this.cast = data.cast;
            if (typeof data.comments !== typeof undefined) {
                debugger;
                _this.refresh();
                Object.keys(data.comments).forEach(function (key) {
                    var $key = key;
                    var uid = data.comments[key].uid;
                    var cmt = data.comments[key].comment;
                    var email_id = data.comments[key].email;
                    _this.c.push({ id: uid, comment: cmt, email: email_id, $key: $key });
                    console.log(_this.c);
                });
            }
        });
    };
    MovieDetailComponent.prototype.onSubmitUserComments = function (f) {
        debugger;
        if (this.Authuser) {
            var comment = ({
                uid: this.Authuser.uid,
                comment: f.value.userComment,
                email: this.Authuser.email
            });
            console.log(comment);
            this.movieServiceService.userComment(this.Authuser.uid, this.$key, comment);
        }
        else {
            this.flashMessagesService.show('You need to Login first for this', { cssClass: 'alert-success', timeout: 3000 });
            this.router.navigate(['/login']);
        }
    };
    MovieDetailComponent.prototype.onDeleteComment = function (com, i) {
        if (confirm('Are you sure?')) {
            debugger;
            this.movieServiceService.deleteUserComment(this.$key, com.$key);
            this.flashMessagesService.show("You're comment is deleted", { cssClass: 'alert-success', timeout: 1500 });
            this.router.navigate(['/movie-detail/' + this.$key]);
            this.refresh();
        }
    };
    MovieDetailComponent.prototype.refresh = function () {
        this.movieServiceService.getMovie(this.$key);
        console.log(this.c);
        this.c = [];
    };
    return MovieDetailComponent;
}());
MovieDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-movie-detail',
        template: __webpack_require__("../../../../../src/app/components/movie-detail/movie-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/movie-detail/movie-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_movie_service_service__["a" /* MovieServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_movie_service_service__["a" /* MovieServiceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service_service__["a" /* AuthServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service_service__["a" /* AuthServiceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _f || Object])
], MovieDetailComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=movie-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.navbar-inverse{\n\tmargin: 0px;\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">Movie Review App</a>\n    </div>\n    <ul class=\"nav navbar-nav pull-right\">\n      <!-- <li><a href=\"\" routerLink = '/login'><i class=\"fa fa-sign-in\"></i> User Login</a></li> -->\n      \n      <li *ngIf=\"!isLoggedIn\"><a href=\"\" routerLink = '/login'><i class=\"fa fa-sign-in\"></i> Login</a></li>\n      \n      <li *ngIf = 'isLoggedIn ' class=\"dropdown\"><a href=\"\" class=\"dropdown-toggle\" data-toggle='dropdown'>{{isloggedInUser}}<span class=\"caret\"></span></a>\n\n        <ul class=\"dropdown-menu\">\n          \n          <li *ngIf = \"profile.role ==='guest'\"><a href=\"\" routerLink='/user-profile'>Profile</a></li>\n          <li *ngIf = \"profile.role ==='guest'\"><a href=\"\" routerLink='/favourate'>Favourates</a></li>\n          <li *ngIf = \"profile.role ==='guest'\"><a href=\"\" routerLink='/change-password'>Change Password</a></li>\n          <li *ngIf = 'isLoggedIn'><a href=\"#\" (click) = \"onLogout()\"><span class=\"glyphicon glyphicon glyphicon-off\"></span> Logout</a>\n        </ul>\n      </li>\n      <!-- <li *ngIf = 'isLoggedIn'><a href=\"#\" routerLink = \"/user-profile\" ><h4>{{isloggedInUser}}</h4></a></li> -->\n     <li *ngIf = \"profile.role !=='guest'\"><a href=\"\" routerLink='/admin-dashboard'>Dashboard</a></li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service_service__ = __webpack_require__("../../../../../src/app/services/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_movie_service_service__ = __webpack_require__("../../../../../src/app/services/movie-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = (function () {
    function NavbarComponent(authServiceService, router, flashMessagesService, movieServiceService) {
        this.authServiceService = authServiceService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
        this.movieServiceService = movieServiceService;
        this.guest = false;
        this.admin = false;
        this.profile = {};
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authServiceService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.isLoggedIn = true;
                // this.isloggedInUser = auth.displayName;
                _this.isloggedInUser = auth.email;
                _this.movieServiceService.getUserProfile(auth.uid).valueChanges().subscribe(function (data) {
                    console.log(data);
                    _this.profile = data || {};
                });
            }
            else {
                _this.isLoggedIn = false;
            }
            // this.movieServiceService.getUserProfile(auth.uid).valueChanges().subscribe(data=>{debugger
            //   console.log(data)
            //    this.profile=data || {} as Profile;
            // })
        });
    };
    NavbarComponent.prototype.onLogout = function () {
        this.authServiceService.logout();
        this.flashMessagesService.show('Loged out', { cssClass: 'alert-success', timeout: 1500 });
        this.router.navigate(['/']);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service_service__["a" /* AuthServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service_service__["a" /* AuthServiceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_movie_service_service__["a" /* MovieServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_movie_service_service__["a" /* MovieServiceService */]) === "function" && _d || Object])
], NavbarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/side-bar/side-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.category{\n\tbackground-color: #C0C0C0;\n\n}\n.nav{\n\tfloat: left;\n    width: 260px;\n    height: 700px;\n    margin: 0;\n   \n}\nh5{\n\t\n\ttext-align: center;\n}\n.cat{\n\ttext-align: center;\n}\nh5{\n    \n    padding: 5px;\n}\nh5:hover {\n    background: #A9A9A9;\n    padding: 5px;\n    \n}\na{\n\ttext-decoration: none;\n}\n*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/side-bar/side-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"nav container\">\n\t<div class=\"row\">\n\t\t<div>\n\t\t\t<nav class=\"navbar navbar-default sidebar\" role=\"navigation\" >\n\t\t\t\t<div class=\"navbar-header col-xs-12 col-sm-4 col-md-3 col-lg-2\">\n\t\t\t\t\t<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".category\">\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"collapse navbar-collapse category\" >\n\t\t\t\t\t<div class=\"panel-heading cat\"><h4><b>Movies Category</b></h4>\n\t\t\t\t\t\t<span class=\"btn btn-success btn-sm cat\" routerLink =\"/add-category\" >Add Category</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul class=\"nav nav-stacked\">\n\t\t\t\t\t\t<a href=\"\" *ngFor='let cat of categories' [routerLink] = \"['/genre/'+cat.name]\"><li><h5>{{cat.name}}</h5></li></a>\n\t\t\t\t\t\t\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</nav>\n\t\t</div>\n\t</div>\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/components/side-bar/side-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_movie_service_service__ = __webpack_require__("../../../../../src/app/services/movie-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SideBarComponent = (function () {
    function SideBarComponent(movieServiceService, router, route) {
        this.movieServiceService = movieServiceService;
        this.router = router;
        this.route = route;
    }
    SideBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.$key = this.route.snapshot.params['id'];
        this.movieServiceService.getCategory().subscribe(function (data) {
            // this.movies = data;
            console.log(data);
            var i = [];
            Object.keys(data).forEach(function (key) {
                if (key !== "$key") {
                    data[key].$key = key;
                    i.push(data[key]);
                }
                // console.log(key);
            });
            console.log(i);
            _this.categories = i;
        });
    };
    return SideBarComponent;
}());
SideBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-side-bar',
        template: __webpack_require__("../../../../../src/app/components/side-bar/side-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/side-bar/side-bar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_movie_service_service__["a" /* MovieServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_movie_service_service__["a" /* MovieServiceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], SideBarComponent);

var _a, _b, _c;
//# sourceMappingURL=side-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user-dashboard/user-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li{\n\tlist-style: none;\n}\nimg{\n\tmax-width: 100%;\n\tmargin: 0 auto;\n\n}\n.image-container{\n\theight: 300px;\n\twidth: 300px;\n\tdisplay: -ms-grid;\n\tdisplay: grid;\n\tmargin: 0 auto;\n\t/*padding: 0px;*/\n}\nh5 {\n\ttext-align: center;\n}\nh4{\n    text-align: center;\n    color: white;\n}\n.panel-body{\n\tpadding: 0px;\n}\n.favourite{\n\tmargin: 10px 10px 0 0;\n\tcolor: darkgrey;\n}\n.active{\n\tcolor: red;\n}\n\n.cataegory {\n    height: 100%;\n    width: 0;\n    position: fixed;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    background-color: #111;\n    overflow-x: hidden;\n    transition: 0.5s;\n    padding-top: 60px;\n}\n\n.cataegory a {\n    padding: 8px 8px 8px 32px;\n    text-decoration: none;\n    font-size: 25px;\n    color: #818181;\n    display: block;\n    transition: 0.3s;\n}\n\n.cataegory a:hover {\n    color: #f1f1f1;\n}\n\n.cataegory .closebtn {\n    position: absolute;\n    top: 0;\n    right: 25px;\n    font-size: 36px;\n    margin-left: 50px;\n}\n.sidebar{\n    font-size:30px;\n    cursor:pointer;\n    \n   /* width: 260px;\n    height: 700px;*/\n    margin-left: -300px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-dashboard/user-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"moviesCataegories\" class=\"cataegory\">\n\t<a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\n\t<div>\n\t\t<h4>Movies Category</h4>\n\t\t<a href=\"\" *ngFor='let cat of categories' [routerLink] = \"['/genre/'+cat.name]\"><li><h5>{{cat.name}}</h5></li></a>\n\t</div>\n</div>\n<div class=\"row\">\n\t<div class=\"col-md-3\">\n\t\t<span class=\"sidebar\" (click)=\"openNav()\">&#9776;Movie Categories</span>\n\t</div>\n</div>\n<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div>\n\t\t\t<ul>\n\t\t\t\t<li *ngFor=\"let m of movies let i = index \"  class=\" col-md-4\" [routerLink] =\"['/movie-detail/'+m.$key]\">\n\t\t\t\t\t<div class=\"panel panel-warning\" >\n\t\t\t\t\t\t<div (click) = 'activeIndex=i'>\n\t\t\t\t\t\t\t<span (click)='onAddUserFavourite(i)'><i class=\"glyphicon glyphicon-heart favourite pull-right\" [ngClass]=\"{active:activeIndex === i}\" (click)='favourite = !favourite'  ></i></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t<div class=\"container image-container\">\n\t\t\t\t\t\t\t\t<img src=\"{{m.movieImage}}\" >\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<span><h5>{{m.movieTitle}}</h5></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- <div class=\"panel-footer\">\n\t\t\t\t\t\t\t<a href=\"\" [routerLink] =\"['/movie-detail/'+m.$key]\" >View Details...</a>\n\t\t\t\t\t\t</div> -->\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user-dashboard/user-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_movie_service_service__ = __webpack_require__("../../../../../src/app/services/movie-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service_service__ = __webpack_require__("../../../../../src/app/services/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserDashboardComponent = (function () {
    function UserDashboardComponent(router, movieServiceService, authServiceService, flashMessagesService, route) {
        this.router = router;
        this.movieServiceService = movieServiceService;
        this.authServiceService = authServiceService;
        this.flashMessagesService = flashMessagesService;
        this.route = route;
        this.movies = [];
        this.favourite = false;
        // movie:any;
        this.favourites = {};
        this.movie = {
            movieTitle: '',
            movieDescription: '',
            movieImage: '',
            movieGenre: '',
            cast: []
        };
        this.cast = [{
                id: new Date().valueOf(),
                name: '',
                image: ''
            }];
    }
    UserDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.$key = this.route.snapshot.params['id'];
        this.movieServiceService.getCategory().subscribe(function (data) {
            // this.movies = data;
            console.log(data);
            var i = [];
            Object.keys(data).forEach(function (key) {
                if (key !== "$key") {
                    data[key].$key = key;
                    i.push(data[key]);
                }
                // console.log(key);
            });
            console.log(i);
            _this.categories = i;
        });
        this.movieServiceService.getMovies().subscribe(function (data) {
            // this.movies = data;
            console.log(data);
            var i = [];
            Object.keys(data).forEach(function (key) {
                if (key !== "$key") {
                    data[key].$key = key;
                    i.push(data[key]);
                }
                console.log(key);
            });
            console.log(i);
            _this.movies = i;
        });
    };
    UserDashboardComponent.prototype.onAddUserFavourite = function (i) {
        var _this = this;
        // this.favourite(movie){
        //   favourite.movie = this.movie[i]
        // };
        this.authServiceService.getAuth().subscribe(function (auth) {
            console.log(auth);
            if (auth === null) {
                _this.flashMessagesService.show('You Need to Login first for this', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                // const selectedMovie=this.movies[i];
                _this.movieServiceService.userFavouriteMovieList(auth.uid, _this.movies[i]);
            }
        });
    };
    UserDashboardComponent.prototype.openNav = function () {
        document.getElementById("moviesCataegories").style.width = "250px";
    };
    UserDashboardComponent.prototype.closeNav = function () {
        document.getElementById("moviesCataegories").style.width = "0";
    };
    return UserDashboardComponent;
}());
UserDashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-dashboard',
        template: __webpack_require__("../../../../../src/app/components/user-dashboard/user-dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user-dashboard/user-dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_movie_service_service__["a" /* MovieServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_movie_service_service__["a" /* MovieServiceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service_service__["a" /* AuthServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service_service__["a" /* AuthServiceService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object])
], UserDashboardComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=user-dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user-login/user-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-login/user-login.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  user-login works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/user-login/user-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserLoginComponent = (function () {
    function UserLoginComponent() {
    }
    UserLoginComponent.prototype.ngOnInit = function () {
    };
    return UserLoginComponent;
}());
UserLoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-login',
        template: __webpack_require__("../../../../../src/app/components/user-login/user-login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user-login/user-login.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserLoginComponent);

//# sourceMappingURL=user-login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user-profile/user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".side-nav {\n    height: 100%;\n    width: 0;\n    position: fixed;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    background-color: #111;\n    overflow-x: hidden;\n    transition: 0.5s;\n    padding-top: 60px;\n}\n\n.side-nav a {\n    padding: 8px 8px 8px 32px;\n    text-decoration: none;\n    font-size: 25px;\n    color: #818181;\n    display: block;\n    transition: 0.3s;\n}\n\n.side-nava:hover {\n    color: #f1f1f1;\n}\n\n.side-nav .closebtn {\n    position: absolute;\n    top: 0;\n    right: 25px;\n    font-size: 36px;\n    margin-left: 50px;\n}\n\n#main {\n    transition: margin-left .5s;\n    padding: 16px;\n}\n.side-nav a{\n    padding-top: 15px;\n   font-size: 18px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-6 col-md-offset-3\">\n\t\t\t<div>\n\t\t\t\t<h4>Hello:  {{isLoggedInUser}}</h4>\n\t\t\t</div>\n\t\t\t<div class=\"panel panel-primary\">\n\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t<form #f = 'ngForm' (submit) = \"createUserProfile(f)\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"firstName\" >First Name:</label>\n\t\t\t\t\t\t\t<input type=\"text\"  name=\"firstName\" class=\"form-control\" required placeholder=\"FirstName\" [(ngModel)]='profile.firstName'  minlength=\"3\" #firstName='ngModel'>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf='firstName?.errors?.required && firstName?.touched' class=\"alert-danger\">\n\t\t\t\t\t\t\tFirst name Required\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf='firstName?.errors?.minlength && firstName?.touched' class=\"alert-danger\">\n\t\t\t\t\t\t\tMust be minimum 3 characters\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"lastName\" >Last Name:</label>\n\t\t\t\t\t\t\t<input type=\"text\"  name=\"lastName\" class=\"form-control\" required placeholder=\"LastName\" [(ngModel)]='profile.lastName'  minlength=\"3\" #lastName='ngModel'>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf='lastName?.errors?.required && lastName?.touched' class=\"alert-danger\">\n\t\t\t\t\t\t\tLast name Required\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf='lastName?.errors?.minlength && lastName?.touched' class=\"alert-danger\">\n\t\t\t\t\t\t\tMust be minimum 3 characters\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"phone\" >Contact No:</label>\n\t\t\t\t\t\t\t<input type=\"text\"  name=\"phone\" class=\"form-control\" required placeholder=\"Contact Number\" [(ngModel)]='profile.phone'  minlength=\"10\" #phone='ngModel'>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf='phone?.errors?.minlength && phone?.touched' class=\"alert-danger\">\n\t\t\t\t\t\t\tPlease enter a valid Phone no.\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<button class=\"btn btn-success btn-block\" type=\"submit\" [disabled]=f.invalid>Update </button>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service_service__ = __webpack_require__("../../../../../src/app/services/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_movie_service_service__ = __webpack_require__("../../../../../src/app/services/movie-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserProfileComponent = (function () {
    function UserProfileComponent(authServiceService, movieServiceService, router, route, angularFireAuth) {
        this.authServiceService = authServiceService;
        this.movieServiceService = movieServiceService;
        this.router = router;
        this.route = route;
        this.angularFireAuth = angularFireAuth;
        this.profile = {};
        // profile={
        //   firstName:'',
        //   lastName:'',
        //   phone:''
        // }
        this.user = [];
        this.disableRole = false;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authServiceService.getAuth().subscribe(function (auth) {
            // if(auth){
            //   this.isLoggedIn = true;
            //   // this.isloggedInUser = auth.displayName;
            //   this.isLoggedInUser = auth.email;
            // }else{
            //   this.isLoggedIn = false;
            // }
            _this.movieServiceService.getUserProfile(auth.uid).valueChanges().subscribe(function (data) {
                _this.profile = data || {};
            });
        });
    };
    UserProfileComponent.prototype.createUserProfile = function (f) {
        var _this = this;
        debugger;
        var guest;
        var profile = {};
        profile.firstName = f.value.firstName;
        profile.lastName = f.value.lastName;
        profile.phone = f.value.phone;
        profile.role = 'guest';
        console.log(f.value);
        this.authServiceService.getAuth().subscribe(function (auth) {
            _this.movieServiceService.newUserProfile(profile, auth.uid);
        });
    };
    return UserProfileComponent;
}());
UserProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-profile',
        template: __webpack_require__("../../../../../src/app/components/user-profile/user-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user-profile/user-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service_service__["a" /* AuthServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service_service__["a" /* AuthServiceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_movie_service_service__["a" /* MovieServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_movie_service_service__["a" /* MovieServiceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _e || Object])
], UserProfileComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = (function () {
    function AuthGuard(router, angularFireAuth) {
        this.router = router;
        this.angularFireAuth = angularFireAuth;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return this.angularFireAuth.authState.map(function (auth) {
            if (!auth) {
                _this.router.navigate(['/login']);
                return false;
            }
            else {
                return true;
            }
        });
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__movie_service_service__ = __webpack_require__("../../../../../src/app/services/movie-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthServiceService = (function () {
    function AuthServiceService(angularFireAuth, router, flashMessagesService, movieServiceService) {
        this.angularFireAuth = angularFireAuth;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
        this.movieServiceService = movieServiceService;
        this.userDetails = null;
        this.guest = false;
        this.profile = {};
    }
    AuthServiceService.prototype.onAdminLogin = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    AuthServiceService.prototype.getAuth = function () {
        return this.angularFireAuth.authState;
    };
    AuthServiceService.prototype.logout = function () {
        this.angularFireAuth.auth.signOut();
    };
    // SignIn existing User
    AuthServiceService.prototype.userLogin = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    AuthServiceService.prototype.signInWithFacebook = function () {
        return this.angularFireAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].FacebookAuthProvider());
    };
    AuthServiceService.prototype.signInWithGoogle = function () {
        return this.angularFireAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider());
    };
    // Register a new User
    AuthServiceService.prototype.newUser = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            debugger;
            _this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
            // const profile={} as Profile;
            // profile.role='guest';
            // this.guest=true
        });
    };
    return AuthServiceService;
}());
AuthServiceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__movie_service_service__["a" /* MovieServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__movie_service_service__["a" /* MovieServiceService */]) === "function" && _d || Object])
], AuthServiceService);

var _a, _b, _c, _d;
//# sourceMappingURL=auth-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/movie-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieServiceService = (function () {
    function MovieServiceService(angularFire, router) {
        this.angularFire = angularFire;
        this.router = router;
        this.movies = this.angularFire.list('/movies');
        this.categories = this.angularFire.list('/categories');
        this.user = this.angularFire.list('/user');
        this.favourites = this.angularFire.list('/favourite');
        // this.role=this.angularFire.list('/role');
    }
    MovieServiceService.prototype.newMovie = function (movie) {
        this.movies.push(movie);
    };
    MovieServiceService.prototype.getMovies = function () {
        return this.angularFire.object('/movies').snapshotChanges().map(function (action) {
            var $key = action.payload.key;
            var data = __assign({ $key: $key }, action.payload.val());
            return data;
        });
    };
    MovieServiceService.prototype.deleteMovie = function (m) {
        this.movies.remove(m.$key);
    };
    MovieServiceService.prototype.getMovie = function ($key) {
        return this.angularFire.object("/movies/" + $key);
    };
    MovieServiceService.prototype.updateMovie = function ($key, movie) {
        debugger;
        return this.movies.update($key, movie);
    };
    MovieServiceService.prototype.addCategory = function (category) {
        this.categories.push(category);
    };
    MovieServiceService.prototype.getCategory = function () {
        return this.angularFire.object('/categories').snapshotChanges().map(function (action) {
            var $key = action.payload.key;
            var data = __assign({ $key: $key }, action.payload.val());
            return data;
        });
    };
    MovieServiceService.prototype.getMoviesByGenre = function () {
        return this.angularFire.object("/movies").snapshotChanges().map(function (action) {
            var $key = action.payload.key;
            var data = __assign({ $key: $key }, action.payload.val());
            return data;
        });
    };
    MovieServiceService.prototype.newUserProfile = function (profile, uid) {
        debugger;
        // const afList = this.angularFire.list('user');
        // afList.push({ profile });
        // const listObservable = afList.snapshotChanges();
        // listObservable.subscribe();
        var p = this.angularFire.object("/user/" + uid + "/profile");
        p.set(profile);
        console.log(profile);
        console.log(uid);
        this.router.navigate(['']);
    };
    MovieServiceService.prototype.getUserProfile = function ($key) {
        // return this.angularFire.object('/profile').snapshotChanges().map(action => {
        //  		 const $key = action.payload.key;
        //   	const data = { $key, ...action.payload.val() };
        //   	return data;
        // 		});
        return this.angularFire.object("/user/" + $key + "/profile");
    };
    MovieServiceService.prototype.userFavouriteMovieList = function (id, i) {
        var list = this.angularFire.object("/user/" + id + "/favourites/" + i.$key);
        delete i.$key;
        list.set(__assign({}, i));
        console.log(i);
    };
    MovieServiceService.prototype.getUserFavourite = function ($key) {
        console.log($key);
        return this.angularFire.object("/user/" + $key + "/favourites");
    };
    MovieServiceService.prototype.removeMovieAsfavourate = function (id, mov) {
        var list = this.angularFire.object("/user/" + id + "/favourites/" + mov.$key).remove();
        console.log(mov.$key);
    };
    MovieServiceService.prototype.userComment = function (id, $key, comment) {
        console.log($key);
        var com = this.angularFire.list("/movies/" + $key + "/comments");
        com.push(__assign({}, comment));
    };
    MovieServiceService.prototype.deleteUserComment = function ($key, i) {
        console.log(i);
        console.log($key);
        return this.angularFire.list("/movies/" + $key + "/comments/" + i).remove();
        // this.route.navigate(['/movie-detail'+ $key])
    };
    MovieServiceService.prototype.getUsers = function () {
        return this.angularFire.object("/user")
            .snapshotChanges().map(function (action) {
            debugger;
            var $key = action.payload.key;
            var data = __assign({ $key: $key }, action.payload.val());
            return data;
        });
    };
    return MovieServiceService;
}());
MovieServiceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MovieServiceService);

var _a, _b;
//# sourceMappingURL=movie-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/youtube.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var YoutubePipe = (function () {
    function YoutubePipe(dom) {
        this.dom = dom;
    }
    YoutubePipe.prototype.transform = function (value, args) {
        return this.dom.bypassSecurityTrustResourceUrl(value);
    };
    return YoutubePipe;
}());
YoutubePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'youtube'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _a || Object])
], YoutubePipe);

var _a;
//# sourceMappingURL=youtube.pipe.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map