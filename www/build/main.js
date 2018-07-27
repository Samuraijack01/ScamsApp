webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PossibleProblemsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__results_results__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PossibleProblemsPage = /** @class */ (function () {
    function PossibleProblemsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.searchQuery = '';
        this.initializeItems();
    }
    PossibleProblemsPage.prototype.initializeItems = function () {
        this.items = [
            {
                icon: '<i class="fas fa-battery-three-quarters"></i>',
                title: 'Discharged Battery',
                preview: 'A discharged battery is when internal chemical reaction reduces the stored charge in a battery. ',
                pic: "assets/imgs/engine.jpg",
                cost: "the average cost is $238",
                desc: "The possible problems can lead to shortened battery life, Battery engine leak, and a reduced power of a battery.",
                id: "battery"
            },
            {
                icon: '<i class="fas fa-thermometer-three-quarters"></i>',
                title: 'Broken Thermostat',
                preview: 'A piece of a car between the engine and the radiator that reduces engine wear deposits and emissions.',
                pic: "assets/imgs/engine.jpg",
                cost: "the average cost is $204",
                desc: "The possible problems can lead to overheating, poor engine performance, and vibration when shifting gears.",
                id: "thermostat"
            },
            {
                icon: '<i class="fas fa-tint"></i>',
                title: 'Leaking Coolant System',
                preview: 'Green or orange liquid coming from a car may indicate a coolant leak',
                pic: "assets/imgs/engine.jpg",
                cost: "the average cost is $80",
                desc: "The possible problems can lead to overheating, excessive noise, and it will break your heater core.  ",
                id: "coolant"
            }
        ];
    };
    PossibleProblemsPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.id.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    PossibleProblemsPage.prototype.clickItem = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__results_results__["a" /* ResultsPage */], { id: id });
    };
    PossibleProblemsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-possible-problems',template:/*ion-inline-start:"/Users/txt-18/Desktop/ScamsApp-master 3/src/pages/possible-problems/possible-problems.html"*/'<!--\n  Generated template for the PossibleProblemsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Diagnostics</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  <ion-list>\n    <ion-item class="car-item" *ngFor="let item of items" (click)="clickItem(item.id)">\n      <div>\n        <div class="icon" [innerHtml]="item.icon">\n        </div>\n        <div class="title">\n          <p>{{item.title}}</p>\n        </div>\n        <div class="preview">\n          <p>{{item.preview}}</p>\n        </div>\n      </div>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/txt-18/Desktop/ScamsApp-master 3/src/pages/possible-problems/possible-problems.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], PossibleProblemsPage);
    return PossibleProblemsPage;
}());

//# sourceMappingURL=possible-problems.js.map

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/possible-problems/possible-problems.module": [
		272,
		1
	],
	"../pages/results/results.module": [
		271,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__possible_problems_possible_problems__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, alertCtrl, navController) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navController = navController;
        this.first = true;
        this.carBrand = 'honda';
        this.productionYear = 'b';
        this.carModel = 'Civic';
        this.models = ["Tacoma", "Corolla", "Prius", "Altima", "Sentra", "Murano", "Civic", "Accord", "CR-V",
            "C-Class", "G-Class", "E-Class", "Sonata", "Tucson", "Elantra"];
        this.carModels = ["model1", "model2", "model3"];
    }
    HomePage.prototype.movePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__possible_problems_possible_problems__["a" /* PossibleProblemsPage */]);
        console.log("page moved");
    };
    HomePage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Car Vin Number',
            subTitle: 'A vin is blah blah ',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    HomePage.prototype.onChange = function (e) {
        this.first = false;
        console.log(e);
        if (e == "toyota") {
            this.carModels[0] = this.models[0];
            this.carModels[1] = this.models[1];
            this.carModels[2] = this.models[2];
        }
        else if (e == "nissan") {
            this.carModels[0] = this.models[3];
            this.carModels[1] = this.models[4];
            this.carModels[2] = this.models[5];
        }
        else if (e == "honda") {
            this.carModels[0] = this.models[6];
            this.carModels[1] = this.models[7];
            this.carModels[2] = this.models[8];
        }
        else if (e == "mercedes") {
            this.carModels[0] = this.models[9];
            this.carModels[1] = this.models[10];
            this.carModels[2] = this.models[11];
        }
        else if (e == "hyundai") {
            this.carModels[0] = this.models[12];
            this.carModels[1] = this.models[13];
            this.carModels[2] = this.models[14];
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/txt-18/Desktop/ScamsApp-master 3/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <img id="logo" src="../assets/imgs/finalLogo.png">\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- <h1 id="title">Enter Vin Number</h1>\n  <form id="vin-form">\n    <ion-item>\n      <ion-input type="text" placeholder="34q8e857ef"></ion-input>\n\n    </ion-item>\n    <p class="definition">What is a <span class="definition" (click)="presentAlert()">vin</span>?</p>\n  </form>\n\n  <div id="divider">\n    <hr class="line">\n    <span>OR</span>\n    <hr class="line"> \n  </div> -->\n\n\n  <div id="select-options">\n    <ion-item>\n      <ion-label>Car Brand</ion-label>\n      <ion-select [(ngModel)]="carBrand" #C (ionChange)="onChange(C.value)">\n        <ion-option value="toyota">Toyota</ion-option>\n        <ion-option value="nissan" >Nissan</ion-option>\n        <ion-option value="honda" [selected]="honda === carBrand">Honda</ion-option>\n        <ion-option value="mercedes">Mercedes-Benz</ion-option>\n        <ion-option value="hyundai" >Hyundai</ion-option>\n\n\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Model of Car</ion-label>\n      <ion-select [(ngModel)]="carModel">\n        <ion-option *ngFor="let model of carModels" [value] = "model" > {{ model }} </ion-option>\n       <ion-option value="Civic" [selected]="model == carModel" *ngIf="first">Civic</ion-option>\n        <!-- <ion-option value="b">Accord</ion-option>\n        <ion-option value="c">CR-V</ion-option> --> -->\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Year of Production</ion-label>\n      <ion-select [(ngModel)]="productionYear" >\n        <ion-option value="a" >2015</ion-option>\n        <ion-option value="b" [selected]="b === productionYear" >2016</ion-option>\n        <ion-option value="c" >2017</ion-option>\n      </ion-select>\n    </ion-item>\n\n  </div>\n  <button id = "submit" ion-button (click)="movePage()"> Submit </button>\n</ion-content>'/*ion-inline-end:"/Users/txt-18/Desktop/ScamsApp-master 3/src/pages/home/home.html"*/,
            selector: 'page-home',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_possible_problems_possible_problems__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_results_results__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                /*comment these bottom two out to get it to work on the app*/
                __WEBPACK_IMPORTED_MODULE_7__pages_possible_problems_possible_problems__["a" /* PossibleProblemsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_results_results__["a" /* ResultsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/results/results.module#ResultsPageModule', name: 'ResultsPage', segment: 'results', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/possible-problems/possible-problems.module#PossibleProblemsPageModule', name: 'PossibleProblemsPage', segment: 'possible-problems', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_possible_problems_possible_problems__["a" /* PossibleProblemsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_results_results__["a" /* ResultsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/txt-18/Desktop/ScamsApp-master 3/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/txt-18/Desktop/ScamsApp-master 3/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResultsPage = /** @class */ (function () {
    function ResultsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [
            {
                icon: '<i class="fas fa-battery-three-quarters"></i>',
                title: 'Discharged Battery',
                preview: 'A discharged battery is when internal chemical reaction reduces the stord charge in a battery. ',
                pic: "assets/battery.jpg",
                cost: "The average cost is $238",
                desc: "The possible problems can lead to shortened battery life, battery engine leak, and a reduced power of battery.",
                id: "battery"
            },
            {
                icon: '<i class="fas fa-thermometer-three-quarters"></i>',
                title: 'Broken Thermostat',
                preview: 'A piece of a car between the engine and the radiator and it reduces engine war deposits and emissions',
                pic: "assets/thermostat.jpg",
                cost: "The average cost is $204",
                desc: "The possible problemscan lead to overheating, poor engine performance, and vibration when shifting gears.",
                id: "thermostat"
            },
            {
                icon: '<i class="fas fa-tint"></i>',
                title: 'Leaking Coolant System',
                preview: 'Green or orange liquid coming from a car may indicate a coolant leak',
                pic: "assets/coolant.jpg",
                cost: "The average cost is $80",
                desc: "The possible problems can lead to overheating, excessive noise, and it will break your heater core.  ",
                id: "coolant"
            }
        ];
        var id = this.navParams.get('id');
        if (id && id.trim() != '') {
            this.currentItem = this.items.filter(function (item) {
                if (item.id === id) {
                    return item;
                }
            });
            this.currentItem = this.currentItem[0];
        }
    }
    ResultsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-results',template:/*ion-inline-start:"/Users/txt-18/Desktop/ScamsApp-master 3/src/pages/results/results.html"*/'<!--\n  Generated template for the ResultsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{currentItem.title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="result-container">\n    <div class="img-container">\n      <img [src]="currentItem.pic" alt="">\n    </div>\n    <div class="title">\n      <p>{{currentItem.title}}</p>\n    </div>\n    <div class="avg-cost">\n      <h1>Average Cost:</h1>\n      <p>{{currentItem.cost}}</p>\n    </div>\n    <div class="desc">\n      <h1>The Problem:</h1>\n      <p>{{currentItem.desc}}</p>\n    </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/txt-18/Desktop/ScamsApp-master 3/src/pages/results/results.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ResultsPage);
    return ResultsPage;
}());

//# sourceMappingURL=results.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map