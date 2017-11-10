webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/SignUp/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <button type=\"button\" name=\"button\" class=\"btn btn-success pull-right\" >Sign up</button>\r\n      <button type=\"button\" class=\"btn btn-primary pull-right\" (click)=\"staticModal.show()\" style=\"margin-right:10px;\">Sign in</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #staticModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title text-center\">Sign in</h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"staticModal.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n        <form>\r\n          <div class=\"form-group\">\r\n            <label for=\"email\">Email</label>\r\n            <input type=\"email\" id=\"name\" class=\"form-control \" required minlength=\"4\" maxlength=\"24\" name=\"name\" ngModel #name=\"ngModel\">\r\n            <div *ngIf=\"name.errors && (name.dirty || name.touched)\" class=\"alert alert-danger\">\r\n              <div [hidden]=\"!name.errors.required\">Name is required</div>\r\n              <div [hidden]=\"!name.errors.minlength\">Username has at least 4 characters</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"pwd\" >Password</label>\r\n            <input type=\"password\" class=\"form-control \" id=\"pwd\" #password>\r\n          </div>\r\n          <div class=\"checkbox\">\r\n            <label><input type=\"checkbox\"> Remember me</label>\r\n          </div>\r\n          <div class=\"alert alert-danger\" [hidden]=\"message==''\">{{message}}</div>\r\n          <button type=\"submit\" class=\"btn btn-default\" (click)=\"vadidateForm(name.value, password.value)\">Submit</button>\r\n        </form>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/SignUp/sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignUpComponent = (function () {
    function SignUpComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.ten = 'a';
        this.users = [
            { username: 'admin', password: '123' },
            { username: 'admin1', password: '1234' },
        ];
        this.message = '';
    }
    SignUpComponent.prototype.vadidateForm = function (name, password) {
        for (var i in this.users) {
            if (name == this.users[i].username && password == this.users[i].password) {
                localStorage.setItem("username", this.users[i].username);
                //this.username = name;
                this.loginService.setLogin(true);
                this.router.navigate(['/my-farm']);
            }
            else
                this.message = 'Either Username or Password is wrong';
        }
    };
    return SignUpComponent;
}());
SignUpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'sign-up',
        template: __webpack_require__("../../../../../src/app/SignUp/sign-up.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */]) === "function" && _b || Object])
], SignUpComponent);

var _a, _b;
//# sourceMappingURL=sign-up.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".square {\r\n  float: left;\r\n  line-height: 16vh;\r\n  height: 19vh;\r\n  width: 18%;\r\n  margin-right: 10px;\r\n  text-align: center;\r\n  border: 1px solid #CCCCCC;\r\n}\r\n\r\n.user {\r\n  display: inline-block;\r\n    padding: 0 25px;\r\n    height: 50px;\r\n    font-size: 16px;\r\n    line-height: 50px;\r\n    border-radius: 25px;\r\n    background-color: #f1f1f1;\r\n}\r\n.user img {\r\n  float: left;\r\n    margin: 0 10px 0 -25px;\r\n    height: 50px;\r\n    width: 50px;\r\n}\r\n.level {\r\n  height: 50px;\r\n}\r\n.level p{\r\n  box-shadow: inset 0 1px 2px rgba(0,0,0,.1);\r\n  background: #D9EDF7;\r\n  color: #31708F;\r\n  line-height: 35px;\r\n  text-align: center;\r\n  margin-top: 7px;\r\n  width: 35px;\r\n  height: 35px;\r\n  border:  none;\r\n  border-radius: 50%;\r\n  float: left;\r\n}\r\n.level progressbar {\r\n  position: absolute;\r\n  z-index: -1;\r\n  left: 28px;\r\n  bottom: -5px;\r\n  width: 80%; \r\n}\r\n.level progressbar span{\r\n  position: absolute;\r\n    display: block;\r\n    width: 100%;\r\n}\r\n.dnd-drag-start {\r\n  -webkit-transform: scale(0.8);\r\n  transform: scale(0.8);\r\n  opacity: 0.7;\r\n  border: 2px dashed #000;\r\n}\r\n\r\n.dnd-drag-enter {\r\n  opacity: 0.7;\r\n  border: 2px dashed #000;\r\n}\r\n\r\n.dnd-drag-over {\r\n  border: 2px dashed #000;\r\n}\r\n\r\n.dnd-sortable-drag {\r\n  -webkit-transform: scale(0.9);\r\n  transform: scale(0.9);\r\n  opacity: 0.7;\r\n  border: 1px dashed #000;\r\n}\r\n\r\n.theGround {\r\n  height: 80vh;\r\n}\r\n\r\n.glyphicon-grain {\r\n  color: green;\r\n}\r\n\r\n.product {\r\n  width: auto;\r\n  height: auto;\r\n  border: 1px solid green;\r\n  border-radius: 10px;\r\n  padding: 10px 10px;\r\n  text-align: center;\r\n  display: inline-block;\r\n}\r\n\r\n.product_name,\r\n.product_price,\r\n.product_quantity {\r\n  margin-top: 15px;\r\n}\r\n\r\n.btn-shop {\r\n  background: #FFC107;\r\n  color: black;\r\n  border: #FFC107;\r\n}\r\n\r\n.product_price {\r\n  border-bottom: 1px solid rgba(136, 136, 136, .6);\r\n  display: inline-block;\r\n}\r\n\r\n.modal-content {\r\n  height: auto;\r\n}\r\n\r\n.pagination {\r\n  position: absolute;\r\n  bottom: -20px;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n\r\n.pagination:hover {\r\n  cursor: pointer\r\n}\r\n\r\n.warehouse {\r\n  position: relative;\r\n  height: 96vh;\r\n}\r\n\r\n.filter-input {\r\n  display: block;\r\n  margin: 0 auto 10px auto;\r\n  border: none;\r\n  border-bottom: 1px solid #DDDDDD;\r\n  outline: none;\r\n}\r\n\r\ngroup_input_filter {\r\n  position: relative;\r\n}\r\n\r\n.bar {\r\n  display: block;\r\n  margin: 0 auto;\r\n  position: relative;\r\n  display: block;\r\n  width: 190px;\r\n  top: -9.5px;\r\n}\r\n\r\n.bar:before,\r\n.bar:after {\r\n  content: '';\r\n  height: 2px;\r\n  width: 0;\r\n  bottom: 1px;\r\n  position: absolute;\r\n  background: #3C763D;\r\n  transition: 0.2s ease all;\r\n  -moz-transition: 0.2s ease all;\r\n  -webkit-transition: 0.2s ease all;\r\n}\r\n\r\n.bar:before {\r\n  left: 50%;\r\n}\r\n\r\n.bar:after {\r\n  right: 50%;\r\n}\r\n\r\n\r\n/* active state */\r\n\r\n.filter-input:focus~.bar:before,\r\ninput:focus~.bar:after {\r\n  width: 50%;\r\n}\r\n\r\n.form-shop {\r\n  padding-top: 15px;\r\n  padding-bottom: 15px;\r\n}\r\n\r\n.red {\r\n  color: red;\r\n}\r\n\r\n:host >>> .popover {\r\n  background-color: #009688;\r\n  color: #fff;\r\n}\r\n:host >>> .popover>.arrow:after {\r\n  border-top-color: #009688;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"\"></a>\r\n<router-outlet></router-outlet>\r\n\r\n<!-- <my-farm></my-farm> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dnd__ = __webpack_require__("../../../../ng2-dnd/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__farm_component__ = __webpack_require__("../../../../../src/app/farm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__test_component__ = __webpack_require__("../../../../../src/app/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__SignUp_sign_up_component__ = __webpack_require__("../../../../../src/app/SignUp/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__level_user_level_component__ = __webpack_require__("../../../../../src/app/level-user/level.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shop_shop_component__ = __webpack_require__("../../../../../src/app/shop/shop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__money_money_component__ = __webpack_require__("../../../../../src/app/money/money.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_app_service__ = __webpack_require__("../../../../../src/app/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__guards_check_login_guard__ = __webpack_require__("../../../../../src/app/guards/check-login.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_pagination_service__ = __webpack_require__("../../../../../src/app/services/pagination.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pipes_filter_pipe__ = __webpack_require__("../../../../../src/app/pipes/filter.pipe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__SignUp_sign_up_component__["a" /* SignUpComponent */] },
    { path: 'my-farm', component: __WEBPACK_IMPORTED_MODULE_9__farm_component__["a" /* FarmComponent */], },
];
// canActivate: [CheckLogin]
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__farm_component__["a" /* FarmComponent */],
            __WEBPACK_IMPORTED_MODULE_10__test_component__["a" /* RecycleMultiSortableComponent */],
            __WEBPACK_IMPORTED_MODULE_11__SignUp_sign_up_component__["a" /* SignUpComponent */],
            __WEBPACK_IMPORTED_MODULE_12__level_user_level_component__["a" /* LevelUserComponent */], __WEBPACK_IMPORTED_MODULE_13__shop_shop_component__["a" /* ShopComponent */], __WEBPACK_IMPORTED_MODULE_14__money_money_component__["a" /* MoneyComponent */], __WEBPACK_IMPORTED_MODULE_19__pipes_filter_pipe__["a" /* FilterPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ng2_dnd__["a" /* DndModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* ButtonsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["b" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["c" /* ProgressbarModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MdInputModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MdProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["d" /* PopoverModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["e" /* TooltipModule */].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_16__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_17__guards_check_login_guard__["a" /* CheckLogin */], __WEBPACK_IMPORTED_MODULE_15__services_app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_18__services_pagination_service__["a" /* PagerService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/farm.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n      <div class=\"panel panel-success warehouse\">\r\n        <div class=\"panel-heading\">Available products</div>\r\n        <div class=\"panel-body\">\r\n          <div class=\"group_input_filter\">\r\n            <input type=\"text\" name=\"filterValue\" [(ngModel)]=\"filterValue\" class=\"filter-input\" placeholder=\"Search\">\r\n            <span class=\"bar\"></span>\r\n          </div>\r\n\r\n          <div *ngFor=\"let product of pageFruits | filter:filterValue\" class=\"panel panel-default \" dnd-draggable [dragEnabled]=\"product.quantity>0\"\r\n            [dragData]=\"product\" (onDragSuccess)=\"orderedProduct($event)\" [dropZones]=\"['demo1']\">\r\n            <div class=\"panel-body\">\r\n              <div [hidden]=\"product.quantity===0\">\r\n                <img src=\"assets/fruits/{{product.name}}.png\" alt=\"\" width=\"65px\" height=\"68px\" popover=\"{{product.name | uppercase}}\" triggers=\"mouseenter:mouseleave\"> (available: {{product.quantity}})\r\n              </div>\r\n              <div [hidden]=\"product.quantity>0\" [ngStyle]=\"{'color': 'red', 'cursor': 'no-drop'}\">\r\n                <img src=\"assets/fruits/{{product.name}}.png\" alt=\"\" width=\"65px\" height=\"68px\">(NOT available)</div>\r\n            </div>\r\n          </div>\r\n          <!-- pager -->\r\n          <div>\r\n            <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\r\n              <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n                <a (click)=\"setPage(page)\">{{page}}</a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-8\">\r\n          <level-user #level></level-user>\r\n\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <money #money></money>\r\n        </div>\r\n      </div>\r\n      <div class=\"panel panel-info theGround\">\r\n        <div class=\"panel-heading\">The Ground\r\n          <br>(total: {{total()}})</div>\r\n        <div class=\"panel-body\">\r\n          <!-- ô 1 -->\r\n          <div class=\"panel panel-default square\" [dropZones]=\"['demo1']\" dnd-droppable (onDropSuccess)=\"addToBasket($event, n = 0, isPlanted[0] = false)\"\r\n            [dropEnabled]=\"isPlanted[0]\">\r\n            <div *ngFor=\"let product of shoppingBasket; let i = index\" [ngClass]=\"{animated:true, tada:true}\">\r\n              <span *ngIf=\"product.location === 0\" class=\"glyphicon glyphicon-trash\" style=\"float:right;margin:5px;\" (click)=\"destroyaPlant(i, product.location)\"></span>\r\n              <span *ngIf=\"product.location === 0\" (click)=\"money.updateYourMoney(product.reward); destroyaPlant(i, product.location); level.AddPercents(product.exp)\">\r\n                <img src=\"assets/img/scythe.png\" alt=\"\" style=\"float:left;margin:5px;\">\r\n              </span>\r\n              <div class=\"panel-body\" *ngIf=\"product.location === 0\">\r\n                <img src=\"{{product.img}}\" alt=\"\" width=\"65px\" height=\"68px\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- ô 2 -->\r\n          <div class=\"panel panel-default square\" [dropZones]=\"['demo1']\" dnd-droppable (onDropSuccess)=\"addToBasket($event, n = 1, isPlanted[1] = false)\"\r\n            [dropEnabled]=\"isPlanted[1]\">\r\n            <div *ngFor=\"let product of shoppingBasket; let i = index\" [ngClass]=\"{animated:true, tada:true}\">\r\n              <span *ngIf=\"product.location === 1\" class=\"glyphicon glyphicon-trash\" style=\"float:right;margin:5px;\" (click)=\"destroyaPlant(i, product.location)\"></span>\r\n              <span *ngIf=\"product.location === 1\" (click)=\"money.updateYourMoney(product.reward); destroyaPlant(i, product.location); level.AddPercents(product.exp)\">\r\n                <img src=\"assets/img/scythe.png\" alt=\"\" style=\"float:left;margin:5px;\">\r\n              </span>\r\n              <div class=\"panel-body\" *ngIf=\"product.location === 1\">\r\n                <img src=\"{{product.img}}\" alt=\"\" width=\"65px\" height=\"68px\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- ô 3 -->\r\n          <div class=\"panel panel-default square\" [dropZones]=\"['demo1']\" dnd-droppable (onDropSuccess)=\"addToBasket($event, n = 2, isPlanted[2] = false)\"\r\n            [dropEnabled]=\"isPlanted[2]\">\r\n            <div *ngFor=\"let product of shoppingBasket; let i = index\" [ngClass]=\"{animated:true, tada:true}\">\r\n              <span *ngIf=\"product.location === 2\" class=\"glyphicon glyphicon-trash\" style=\"float:right;margin:5px;\" (click)=\"destroyaPlant(i, product.location)\"></span>\r\n              <span *ngIf=\"product.location === 2\" (click)=\"money.updateYourMoney(product.reward); destroyaPlant(i, product.location); level.AddPercents(product.exp)\">\r\n                <img src=\"assets/img/scythe.png\" alt=\"\" style=\"float:left;margin:5px;\">\r\n              </span>\r\n              <div class=\"panel-body\" *ngIf=\"product.location === 2\">\r\n                <img src=\"{{product.img}}\" alt=\"\" width=\"65px\" height=\"68px\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- ô 4 -->\r\n          <div class=\"panel panel-default square\" [dropZones]=\"['demo1']\" dnd-droppable (onDropSuccess)=\"addToBasket($event, n = 3, isPlanted[3] = false)\"\r\n            [dropEnabled]=\"isPlanted[3]\">\r\n            <div *ngFor=\"let product of shoppingBasket; let i = index\" [ngClass]=\"{animated:true, tada:true}\">\r\n              <span *ngIf=\"product.location === 3\" class=\"glyphicon glyphicon-trash\" style=\"float:right;margin:5px;\" (click)=\"destroyaPlant(i, product.location)\"></span>\r\n              <span *ngIf=\"product.location === 3\" (click)=\"money.updateYourMoney(product.reward); destroyaPlant(i, product.location); level.AddPercents(product.exp)\">\r\n                <img src=\"assets/img/scythe.png\" alt=\"\" style=\"float:left;margin:5px;\">\r\n              </span>\r\n              <div class=\"panel-body\" *ngIf=\"product.location === 3\">\r\n                <img src=\"{{product.img}}\" alt=\"\" width=\"65px\" height=\"68px\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- ô 5 -->\r\n          <div class=\"panel panel-default square\" [dropZones]=\"['demo1']\" dnd-droppable (onDropSuccess)=\"addToBasket($event, n = 4, isPlanted[4] = false)\"\r\n            [dropEnabled]=\"isPlanted[4]\">\r\n            <div *ngFor=\"let product of shoppingBasket; let i = index\" [ngClass]=\"{animated:true, tada:true}\">\r\n              <span *ngIf=\"product.location === 4\" class=\"glyphicon glyphicon-trash\" style=\"float:right;margin:5px;\" (click)=\"destroyaPlant(i, product.location)\"></span>\r\n              <span *ngIf=\"product.location === 4\" (click)=\"money.updateYourMoney(product.reward); destroyaPlant(i, product.location); level.AddPercents(product.exp)\">\r\n                <img src=\"assets/img/scythe.png\" alt=\"\" style=\"float:left;margin:5px;\">\r\n              </span>\r\n              <div class=\"panel-body\" *ngIf=\"product.location === 4\">\r\n                <img src=\"{{product.img}}\" alt=\"\" width=\"65px\" height=\"68px\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--mở ô đất 1/ ô 6 -->\r\n          <div class=\"panel panel-default square \" [dropZones]=\"['demo1']\" dnd-droppable (onDropSuccess)=\"addToBasket($event, n = 5, isPlanted[5] = false)\"\r\n            [dropEnabled]=\"isPlanted[5]\">\r\n            <button class=\"btn btn-success hvr-grow-rotate\" *ngIf=\"maxTreesAllowedToGrow <= 5\" alt=\"\" width=\"100px\" height=\"89px\"\r\n              (click)=\"staticModal.show()\" popover=\"Unlock the land\" triggers=\"mouseenter:mouseleave\" [disabled]=\"!(maxTreesAllowedToGrow == 5)\">Unlock</button>\r\n            <div class=\"modal fade\" bsModal #staticModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n              aria-hidden=\"true\">\r\n              <div class=\"modal-dialog modal-sm\">\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                    <h4 class=\"modal-title pull-left\">500$ to unlock this land?</h4>\r\n                    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"staticModal.hide()\">\r\n                      <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                  </div>\r\n                  <div class=\"modal-body\">\r\n                    <button class=\"btn btn-primary\" (click)=\"unlockTheLand(); staticModal.hide()\">OK</button>\r\n                    <button class=\"btn btn-danger\" (click)=\"staticModal.hide()\">Cancel</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div [hidden]=\"!(maxTreesAllowedToGrow >= 6)\" *ngFor=\"let product of shoppingBasket; let i = index\" [ngClass]=\"{animated:true, tada:true}\">\r\n              <span *ngIf=\"product.location === 5\" class=\"glyphicon glyphicon-trash\" style=\"float:right;margin:5px;\" (click)=\"destroyaPlant(i, product.location)\"></span>\r\n              <span *ngIf=\"product.location === 5\" (click)=\"money.updateYourMoney(product.reward); destroyaPlant(i, product.location); level.AddPercents(product.exp)\">\r\n                <img src=\"assets/img/scythe.png\" alt=\"\" style=\"float:left;margin:5px;\">\r\n              </span>\r\n              <div class=\"panel-body\" *ngIf=\"product.location === 5\">\r\n                <img src=\"{{product.img}}\" alt=\"\" width=\"65px\" height=\"68px\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--mở ô đất 2/ ô 7 -->\r\n          <div class=\"panel panel-default square \" [dropZones]=\"['demo1']\" dnd-droppable (onDropSuccess)=\"addToBasket($event, n = 6, isPlanted[6] = false)\"\r\n            [dropEnabled]=\"isPlanted[6]\">\r\n            <button class=\"btn btn-success hvr-grow-rotate\" *ngIf=\"maxTreesAllowedToGrow <= 6\" alt=\"\" width=\"100px\" height=\"89px\"\r\n              (click)=\"staticModal.show()\" popover=\"Unlock the land\" triggers=\"mouseenter:mouseleave\" [disabled]=\"!(maxTreesAllowedToGrow == 6)\">Unlock</button>\r\n            <div class=\"modal fade\" bsModal #staticModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n              aria-hidden=\"true\">\r\n              <div class=\"modal-dialog modal-sm\">\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                    <h4 class=\"modal-title pull-left\">500$ to unlock this land?</h4>\r\n                    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"staticModal.hide()\">\r\n                      <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                  </div>\r\n                  <div class=\"modal-body\">\r\n                    <button class=\"btn btn-primary\" (click)=\"unlockTheLand(); staticModal.hide()\">OK</button>\r\n                    <button class=\"btn btn-danger\" (click)=\"staticModal.hide()\">Cancel</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div [hidden]=\"!(maxTreesAllowedToGrow >= 7)\" *ngFor=\"let product of shoppingBasket; let i = index\" [ngClass]=\"{animated:true, tada:true}\">\r\n              <span *ngIf=\"product.location === 6\" class=\"glyphicon glyphicon-trash\" style=\"float:right;margin:5px;\" (click)=\"destroyaPlant(i, product.location)\"></span>\r\n              <span *ngIf=\"product.location === 6\" (click)=\"money.updateYourMoney(product.reward); destroyaPlant(i, product.location); level.AddPercents(product.exp)\">\r\n                <img src=\"assets/img/scythe.png\" alt=\"\" style=\"float:left;margin:5px;\">\r\n              </span>\r\n              <div class=\"panel-body\" *ngIf=\"product.location === 6\">\r\n                <img src=\"{{product.img}}\" alt=\"\" width=\"65px\" height=\"68px\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--mở ô đất 3/ ô 8-->\r\n          <div class=\"panel panel-default square \" [dropZones]=\"['demo1']\" dnd-droppable (onDropSuccess)=\"addToBasket($event, n = 7, isPlanted[7] = false)\"\r\n            [dropEnabled]=\"isPlanted[7]\">\r\n            <button class=\"btn btn-success hvr-grow-rotate\" *ngIf=\"maxTreesAllowedToGrow <= 7\" alt=\"\" width=\"100px\" height=\"89px\"\r\n            (click)=\"staticModal.show()\" popover=\"Unlock the land\" triggers=\"mouseenter:mouseleave\" [disabled]=\"!(maxTreesAllowedToGrow == 7)\">Unlock</button>\r\n            <div class=\"modal fade\" bsModal #staticModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n              aria-hidden=\"true\">\r\n              <div class=\"modal-dialog modal-sm\">\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                    <h4 class=\"modal-title pull-left\">500$ to unlock this land?</h4>\r\n                    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"staticModal.hide()\">\r\n                      <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                  </div>\r\n                  <div class=\"modal-body\">\r\n                    <button class=\"btn btn-primary\" (click)=\"unlockTheLand(); staticModal.hide()\">OK</button>\r\n                    <button class=\"btn btn-danger\" (click)=\"staticModal.hide()\">Cancel</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div [hidden]=\"!(maxTreesAllowedToGrow >= 8)\" *ngFor=\"let product of shoppingBasket; let i = index\" [ngClass]=\"{animated:true, tada:true}\">\r\n              <span *ngIf=\"product.location === 7\" class=\"glyphicon glyphicon-trash\" style=\"float:right;margin:5px;\" (click)=\"destroyaPlant(i, product.location)\"></span>\r\n              <span *ngIf=\"product.location === 7\" (click)=\"money.updateYourMoney(product.reward); destroyaPlant(i, product.location); level.AddPercents(product.exp)\">\r\n                <img src=\"assets/img/scythe.png\" alt=\"\" style=\"float:left;margin:5px;\">\r\n              </span>\r\n              <div class=\"panel-body\" *ngIf=\"product.location === 7\">\r\n                <img src=\"{{product.img}}\" alt=\"\" width=\"65px\" height=\"68px\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--mở ô đất 4/ ô 9-->\r\n          <div class=\"panel panel-default square \" [dropZones]=\"['demo1']\" dnd-droppable (onDropSuccess)=\"addToBasket($event, n = 8, isPlanted[8] = false)\"\r\n          [dropEnabled]=\"isPlanted[8]\">\r\n          <button class=\"btn btn-success hvr-grow-rotate\" *ngIf=\"maxTreesAllowedToGrow <= 8\" alt=\"\" width=\"100px\" height=\"89px\"\r\n          (click)=\"staticModal.show()\" popover=\"Unlock the land\" triggers=\"mouseenter:mouseleave\" [disabled]=\"!(maxTreesAllowedToGrow == 8)\">Unlock</button>\r\n          <div class=\"modal fade\" bsModal #staticModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n            aria-hidden=\"true\">\r\n            <div class=\"modal-dialog modal-sm\">\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <h4 class=\"modal-title pull-left\">500$ to unlock this land?</h4>\r\n                  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"staticModal.hide()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                  </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                  <button class=\"btn btn-primary\" (click)=\"unlockTheLand(); staticModal.hide()\">OK</button>\r\n                  <button class=\"btn btn-danger\" (click)=\"staticModal.hide()\">Cancel</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div [hidden]=\"!(maxTreesAllowedToGrow >= 9)\" *ngFor=\"let product of shoppingBasket; let i = index\" [ngClass]=\"{animated:true, tada:true}\">\r\n            <span *ngIf=\"product.location === 8\" class=\"glyphicon glyphicon-trash\" style=\"float:right;margin:5px;\" (click)=\"destroyaPlant(i, product.location)\"></span>\r\n            <span *ngIf=\"product.location === 8\" (click)=\"money.updateYourMoney(product.reward); destroyaPlant(i, product.location); level.AddPercents(product.exp)\">\r\n              <img src=\"assets/img/scythe.png\" alt=\"\" style=\"float:left;margin:5px;\">\r\n            </span>\r\n            <div class=\"panel-body\" *ngIf=\"product.location === 8\">\r\n              <img src=\"{{product.img}}\" alt=\"\" width=\"65px\" height=\"68px\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n          <!--mở ô đất 5/ ô 10-->\r\n          <div class=\"panel panel-default square \" [dropZones]=\"['demo1']\" dnd-droppable (onDropSuccess)=\"addToBasket($event, n = 9, isPlanted[9] = false)\"\r\n          [dropEnabled]=\"isPlanted[9]\">\r\n          <button class=\"btn btn-success hvr-grow-rotate\" *ngIf=\"maxTreesAllowedToGrow <= 9\" alt=\"\" width=\"100px\" height=\"89px\"\r\n          (click)=\"staticModal.show()\" popover=\"Unlock the land\" triggers=\"mouseenter:mouseleave\" [disabled]=\"!(maxTreesAllowedToGrow == 9)\">Unlock</button>\r\n          <div class=\"modal fade\" bsModal #staticModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n            aria-hidden=\"true\">\r\n            <div class=\"modal-dialog modal-sm\">\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <h4 class=\"modal-title pull-left\">500$ to unlock this land?</h4>\r\n                  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"staticModal.hide()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                  </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                  <button class=\"btn btn-primary\" (click)=\"unlockTheLand(); staticModal.hide()\">OK</button>\r\n                  <button class=\"btn btn-danger\" (click)=\"staticModal.hide()\">Cancel</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div [hidden]=\"!(maxTreesAllowedToGrow >= 10)\" *ngFor=\"let product of shoppingBasket; let i = index\" [ngClass]=\"{animated:true, tada:true}\">\r\n            <span *ngIf=\"product.location === 9\" class=\"glyphicon glyphicon-trash\" style=\"float:right;margin:5px;\" (click)=\"destroyaPlant(i, product.location)\"></span>\r\n            <span *ngIf=\"product.location === 9\" (click)=\"money.updateYourMoney(product.reward); destroyaPlant(i, product.location); level.AddPercents(product.exp)\">\r\n              <img src=\"assets/img/scythe.png\" alt=\"\" style=\"float:left;margin:5px;\">\r\n            </span>\r\n            <div class=\"panel-body\" *ngIf=\"product.location === 9\">\r\n              <img src=\"{{product.img}}\" alt=\"\" width=\"65px\" height=\"68px\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-1\">\r\n      <button type=\"button\" name=\"button\" class=\"btn btn-success\" (click)=\"logOut()\">Log out</button>\r\n      <br>\r\n      <br>\r\n      <br>\r\n      <br>\r\n      <!--<img dnd-draggable src=\"assets/img/sprinkler.png\" alt=\"\">-->\r\n      <my-shop (outputShop)=\"getValueFromShop($event)\"></my-shop>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/farm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_app_service__ = __webpack_require__("../../../../../src/app/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_pagination_service__ = __webpack_require__("../../../../../src/app/services/pagination.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FarmComponent; });
/* unused harmony export Product */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FarmComponent = (function () {
    function FarmComponent(router, loginService, _appservice, pagerService) {
        var _this = this;
        this.router = router;
        this.loginService = loginService;
        this._appservice = _appservice;
        this.pagerService = pagerService;
        this.reward = 0;
        this.priceALand = 500;
        this.availableProducts = [];
        this.shoppingBasket = [];
        this.maxTreesAllowedToGrow = 5;
        this.pager = {};
        this.locked = true;
        this.check1 = true;
        this.isPlanted = [true, true, true, true, true, false, false, false, false, false,];
        this.exp = 0;
        this.checkModalShop = true;
        this.availableProducts.push(new Product(0, 'apple', 15, '', 15, 20, '', 0, 'assets/fruits/apple.png'));
        this.availableProducts.push(new Product(1, 'orange', 1, '', 20, 15, '', 0, 'assets/fruits/orange.png'));
        this.availableProducts.push(new Product(2, 'banana', 5, '', 30, 30, '', 0, 'assets/fruits/banana.png'));
        this.availableProducts.push(new Product(3, 'grapes', 4, '', 30, 5, '', 0, 'assets/fruits/grapes.png'));
        this.availableProducts.push(new Product(3, 'cherry', 4, '', 30, 5, '', 0, 'assets/fruits/cherry.png'));
        this.availableProducts.push(new Product(3, 'eggplant', 4, '', 30, 5, '', 0, 'assets/fruits/eggplant.png'));
        this.availableProducts.push(new Product(3, 'pear', 4, '', 30, 5, '', 0, 'assets/fruits/pear.png'));
        this.availableProducts.push(new Product(3, 'strawberry', 4, '', 30, 5, '', 0, 'assets/fruits/strawberry.png'));
        this.availableProducts.push(new Product(3, 'tomato', 4, '', 30, 5, '', 0, 'assets/fruits/tomato.png'));
        // this.availableProducts.push(new Product(3, 'CHERRY', 4, '', 30, 100, ''));
        //nhan data khi ng choi mua 1 square tu 'shop' component
        _appservice.money$.subscribe(function (data) {
            _this.money = data;
        });
    }
    FarmComponent.prototype.ngOnInit = function () {
        // xuất ra màn hình những cái đã lưu trữ stogate
        // if(localStorage.getItem("planted-storage") != null)
        //   {this.shoppingBasket = JSON.parse(localStorage.getItem("planted-storage"));}
        // if(localStorage.getItem("plants-storage") != null)
        //   this.availableProducts = JSON.parse(localStorage.getItem("plants-storage"));
        // this.dem = Number(localStorage.getItem('count-planted'));
        // if(this.dem > 14) { this.check =false}
        this.setPage(1);
    };
    FarmComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.availableProducts.length, page);
        // get current page of items
        this.pageFruits = this.availableProducts.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    FarmComponent.prototype.orderedProduct = function ($event) {
        var orderedProduct = $event.dragData;
        orderedProduct.quantity--;
        // localStorage.setItem("plants-storage", JSON.stringify(this.availableProducts));
    };
    FarmComponent.prototype.addToBasket = function ($event, location, a) {
        var _this = this;
        var newProduct = $event.dragData;
        newProduct.date = new Date();
        newProduct.location = location;
        this.shoppingBasket.push(new Product(newProduct.id, newProduct.name, 1, newProduct.date, newProduct.exp, newProduct.reward, newProduct.state, newProduct.location, newProduct.img));
        //stogate cây đã trồng
        // localStorage.setItem("planted-storage", JSON.stringify(this.shoppingBasket));                
        //nếu trồng được 10 cây thì sẽ disable 'drop'
        this.shoppingBasket.map(function (tree) {
            if (tree.location)
                _this.isPlanted[tree.location] = false;
        });
        // this.treePlanted = this.treePlanted + 1;
        // if (this.treePlanted >= this.maxTreesAllowedToGrow) { this.check = false }
        // localStorage.setItem("count-planted", this.dem.toString());
    };
    FarmComponent.prototype.total = function () {
        var count = 0;
        for (var indx in this.shoppingBasket) {
            count += 1;
        }
        return count;
    };
    FarmComponent.prototype.destroyaPlant = function (index, location) {
        // this.treePlanted--;
        // if (this.treePlanted < this.maxTreesAllowedToGrow) this.check = true;
        //this.exp = this.shoppingBasket[index].exp;
        //console.log(this.exp);
        this.isPlanted[location] = true;
        this.shoppingBasket.splice(index, 1);
    };
    FarmComponent.prototype.logOut = function () {
        this.router.navigate(['/']);
        this.loginService.setLogin(false);
        localStorage.removeItem("username");
    };
    FarmComponent.prototype.getValueFromShop = function (event) {
        this.checkModalShop = false;
        this.availableProducts[0].quantity += Number(event.numberOfApples);
        this.availableProducts[1].quantity += Number(event.numberOfOranges);
        this.availableProducts[2].quantity += Number(event.numberOfLemons);
        this.availableProducts[3].quantity += Number(event.numberOfDragons);
    };
    FarmComponent.prototype.unlockTheLand = function () {
        if (this.money >= this.priceALand) {
            this.money -= this.priceALand;
            this.maxTreesAllowedToGrow++;
            if (this.maxTreesAllowedToGrow >= 6)
                this.isPlanted[5] = true;
            if (this.maxTreesAllowedToGrow >= 7)
                this.isPlanted[6] = true;
            if (this.maxTreesAllowedToGrow >= 8)
                this.isPlanted[7] = true;
            if (this.maxTreesAllowedToGrow >= 9)
                this.isPlanted[8] = true;
            if (this.maxTreesAllowedToGrow >= 10)
                this.isPlanted[9] = true;
            this._appservice.shopData(this.money);
        }
        else {
            alert("k du tien");
        }
    };
    return FarmComponent;
}());
FarmComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'my-farm',
        template: __webpack_require__("../../../../../src/app/farm.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_app_service__["a" /* AppService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_pagination_service__["a" /* PagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_pagination_service__["a" /* PagerService */]) === "function" && _d || Object])
], FarmComponent);

var Product = (function () {
    function Product(id, name, quantity, date, exp, reward, state, location, img) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.date = date;
        this.exp = exp;
        this.reward = reward;
        this.state = state;
        this.location = location;
        this.img = img;
    }
    return Product;
}());

var _a, _b, _c, _d;
//# sourceMappingURL=farm.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/check-login.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckLogin; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckLogin = (function () {
    function CheckLogin(loginService) {
        this.loginService = loginService;
    }
    CheckLogin.prototype.canActivate = function () {
        return this.loginService.isLogin();
    };
    return CheckLogin;
}());
CheckLogin = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */]) === "function" && _a || Object])
], CheckLogin);

var _a;
//# sourceMappingURL=check-login.guard.js.map

/***/ }),

/***/ "../../../../../src/app/level-user/level.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"user\">\r\n      <img src=\"assets/img/farmer.png\" alt=\"\"> {{username}}\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"level\">\r\n      <p>{{level}}</p>\r\n      <progressbar [type]=\"type\" [animate]=\"true\" [max]=\"max\" [value]=\"dynamic\" type=\"success\"><span style=\"color:#222831; white-space:nowrap;\">{{dynamic}} / {{max}}</span></progressbar>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!--(change)=\"AddPercents()\"-->\r\n\r\n<!--<button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"random()\">Randomize</button>-->\r\n\r\n<!--<small><em>Object (changes type based on value)</em></small>\r\n<progressbar class=\"progress-striped active\" [value]=\"dynamic\" [type]=\"type\">\r\n  {{type}} <i *ngIf=\"showWarning\">!!!Watch out !!!</i>\r\n</progressbar>\r\n<progressbar [max]=\"max\" [value]=\"dynamic\">\r\n  <span style=\"color:white; white-space:nowrap;\">{{dynamic}} / {{max}}</span>\r\n</progressbar>-->\r\n"

/***/ }),

/***/ "../../../../../src/app/level-user/level.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LevelUserComponent = (function () {
    function LevelUserComponent() {
        this.max = 100;
        this.dynamic = 0;
        this.level = 0;
        this.username = localStorage.getItem("username");
    }
    LevelUserComponent.prototype.AddPercents = function (exp) {
        this.dynamic = this.dynamic + exp;
        var type;
        if (this.dynamic < this.max / 4) {
            type = 'danger';
        }
        else if (this.dynamic < this.max / 3) {
            type = 'warning';
        }
        else if (this.dynamic < this.max / 1.5) {
            type = 'success';
        }
        else {
            type = 'info';
        }
        if (this.dynamic > this.max) {
            this.dynamic = this.dynamic - this.max;
            this.level++;
            this.max = this.max + 50 * this.level;
            type = 'danger';
            alert("Congratulations! Level Up: " + this.level);
        }
        this.type = type;
    };
    return LevelUserComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Input */])(),
    __metadata("design:type", String)
], LevelUserComponent.prototype, "username", void 0);
LevelUserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'level-user',
        template: __webpack_require__("../../../../../src/app/level-user/level.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LevelUserComponent);

//# sourceMappingURL=level.component.js.map

/***/ }),

/***/ "../../../../../src/app/money/money.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_service__ = __webpack_require__("../../../../../src/app/services/app.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoneyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// declare var $: any;
var MoneyComponent = (function () {
    function MoneyComponent(_appService) {
        var _this = this;
        this._appService = _appService;
        this.your_money = 10000;
        this.checkClass = false;
        // Lắng nghe câu trả lời từ 'shop' component (service)
        _appService.shop$.subscribe(function (mess) {
            _this.your_money = mess;
            _this.checkClass = true;
            setTimeout(function () {
                _this.checkClass = false;
            }, 2000);
        });
        // Jquery trong angular
        // $(document).ready(function () {
        //   alert("Hello World");
        // });
    }
    MoneyComponent.prototype.ngOnInit = function () {
        //truyền số tiền hiện tại qua 'shop' component (service)
        this._appService.moneyData(this.your_money);
    };
    MoneyComponent.prototype.updateYourMoney = function (reward) {
        //Sau khi nhận thêm tiền từ việc thu hoạch, gửi số tiền hiện có qua 'Shop' component (service)
        this.your_money += reward;
        this._appService.moneyData(this.your_money);
        return this.your_money;
    };
    return MoneyComponent;
}());
MoneyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'money',
        template: "\n    <h4 [ngClass]=\"{animated: checkClass, flash: checkClass}\">{{your_money}}<span class=\"glyphicon glyphicon-gbp\"></span></h4>\n  ",
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* AppService */]) === "function" && _a || Object])
], MoneyComponent);

var _a;
//# sourceMappingURL=money.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, term) {
        if (!items || !term) {
            return items;
        }
        //term = term.toUpperCase();
        // items.map(res => res.name = res.name.toLowerCase());
        return items.filter(function (item) { return item.name.indexOf(term) !== -1; });
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Pipe */])({
        name: 'filter'
    })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppService = (function () {
    function AppService() {
        this.shop_source = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.money_source = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.shop_source2 = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.shop$ = this.shop_source.asObservable(); //asObservable: ep kieu
        this.money$ = this.money_source.asObservable();
        this.quantitySquare_shop$ = this.shop_source2.asObservable();
    }
    AppService.prototype.shopData = function (message) {
        this.shop_source.next(message);
    };
    AppService.prototype.moneyData = function (message) {
        this.money_source.next(message);
    };
    AppService.prototype.quantitySquare_Shop = function (data) {
        this.shop_source2.next(data);
    };
    return AppService;
}());
AppService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], AppService);

//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoginService = (function () {
    function LoginService() {
        this._isLogin = false;
    }
    LoginService.prototype.isLogin = function () {
        return this._isLogin;
    };
    LoginService.prototype.setLogin = function (check) {
        this._isLogin = check;
    };
    return LoginService;
}());
LoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], LoginService);

//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/pagination.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagerService; });

var PagerService = (function () {
    function PagerService() {
    }
    PagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 4; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = __WEBPACK_IMPORTED_MODULE_0_underscore__["range"](startPage, endPage + 1);
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    return PagerService;
}());

//# sourceMappingURL=pagination.service.js.map

/***/ }),

/***/ "../../../../../src/app/shop/shop.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<img src=\"assets/img/stall.png\" alt=\"\" width=\"150px\" height=\"150px\" (click)=\"parentModal.show()\" [ngStyle]=\"{'cursor': 'pointer'}\" class=\"hvr-bounce-in\">\r\n\r\n<div class=\"modal fade animated bounceInLeft\" bsModal #parentModal=\"bs-modal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg \">\r\n    <div class=\"modal-content \">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title pull-left\">Shop</h4>\r\n\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"parentModal.hide()\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form #Form=\"ngForm\" (ngSubmit)=\"buy(Form)\" class=\"form-shop\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group product\">\r\n                <img src=\"assets/fruits/apple.png\" alt=\"\" width=\"70px\" height=\"74px\">\r\n                <!--<label for=\"usr\" class=\"product_name\">Apple</label>-->\r\n                <input type=\"number\" class=\"form-control product_quantity\" id=\"usr\" min=\"0\" max=\"5\" name=\"numberOfApples\" [(ngModel)]=\"quantity_Apples\">\r\n                <h4 class=\"product_price\">{{price_Apple * quantity_Apples}} <span class=\"glyphicon glyphicon-gbp\" style=\"color:#5CB85C;\"></span></h4>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group product\">\r\n                <img src=\"assets/fruits/orange.png\" alt=\"\" width=\"70px\" height=\"74px\">\r\n                <!--<label for=\"usr\" class=\"product_name\">Orange</label>-->\r\n                <input type=\"number\" class=\"form-control product_quantity\" id=\"usr\" min=\"0\" max=\"5\" name=\"numberOfOranges\" [(ngModel)]=\"quantity_Orange\">\r\n                <h4 class=\"product_price\">{{price_Orange * quantity_Orange}} <span class=\"glyphicon glyphicon-gbp\" style=\"color:#5CB85C;\"></span></h4>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group product\">\r\n                <img src=\"assets/fruits/banana.png\" alt=\"\" width=\"70px\" height=\"74px\">\r\n                <!--<label for=\"usr\" class=\"product_name\">Lemon</label>-->\r\n                <input type=\"number\" class=\"form-control product_quantity\" id=\"usr\" min=\"0\" max=\"5\" name=\"numberOfLemons\" [(ngModel)]=\"quantity_Lemon\">\r\n                <h4 class=\"product_price\">{{price_Lemon * quantity_Lemon}} <span class=\"glyphicon glyphicon-gbp\" style=\"color:#5CB85C;\"></span></h4>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group product\">\r\n                <img src=\"assets/fruits/grapes.png\" alt=\"\" width=\"70px\" height=\"74px\">\r\n                <!--<label for=\"usr\" class=\"product_name\">Dragon</label>-->\r\n                <input type=\"number\" class=\"form-control product_quantity\" id=\"usr\" min=\"0\" max=\"5\" name=\"numberOfDragons\" [(ngModel)]=\"quantity_Dragon\">\r\n                <h4 class=\"product_price\">{{price_Dragon * quantity_Dragon}} <span class=\"glyphicon glyphicon-gbp\" style=\"color:#5CB85C;\"></span></h4>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group product\">\r\n                <img src=\"assets/fruits/strawberry.png\" alt=\"\" width=\"70px\" height=\"74px\">\r\n                <!--<label for=\"usr\" class=\"product_name\">Coconut</label>-->\r\n                <input disabled type=\"number\" class=\"form-control product_quantity\" id=\"usr\" min=\"0\" max=\"5\" name=\"numberOfCoconuts\" [(ngModel)]=\"quantity_Coconut\">\r\n                <h4 class=\"product_price\">{{price_Coconut * quantity_Coconut}} <span class=\"glyphicon glyphicon-gbp\" style=\"color:#5CB85C;\"></span></h4>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group product\">\r\n                <img src=\"assets/fruits/cherry.png\" alt=\"\" width=\"70px\" height=\"74px\">\r\n                <!--<label for=\"usr\" class=\"product_name\">Coconut</label>-->\r\n                <input disabled type=\"number\" class=\"form-control product_quantity\" id=\"usr\" min=\"0\" max=\"5\" name=\"numberOfCoconuts\" [(ngModel)]=\"quantity_Coconut\">\r\n                <h4 class=\"product_price\">{{price_Coconut * quantity_Coconut}} <span class=\"glyphicon glyphicon-gbp\" style=\"color:#5CB85C;\"></span></h4>\r\n              </div>\r\n            </div>\r\n\r\n            <!--<div class=\"col-md-2\">\r\n              <div class=\"form-group product\">\r\n                <label for=\"usr\" class=\"product_name\">Square</label>\r\n                <input type=\"number\" class=\"form-control product_quantity\" id=\"usr\" min=\"0\" max=\"5\" name=\"numberOfKiwis\" [(ngModel)]=\"quantity_Square\">\r\n                <h4 class=\"product_price\">{{price_Square * quantity_Square}} <span class=\"glyphicon glyphicon-gbp\" style=\"color:#5CB85C;\"></span></h4>\r\n              </div>\r\n            </div>-->\r\n          </div>\r\n          <button class=\"btn btn-primary btn-lg\" type=\"submit\" (click)=\"parentModal.hide()\" style=\"display:block; margin:auto;\">Buy</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shop/shop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_service__ = __webpack_require__("../../../../../src/app/services/app.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShopComponent = (function () {
    function ShopComponent(appService) {
        var _this = this;
        this.appService = appService;
        this.outputShop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
        this.quantity_Apples = 0;
        this.quantity_Orange = 0;
        this.quantity_Lemon = 0;
        this.quantity_Dragon = 0;
        this.quantity_Coconut = 0;
        this.price_Apple = 5;
        this.price_Orange = 10;
        this.price_Lemon = 8;
        this.price_Dragon = 6;
        this.price_Coconut = 7;
        //lắng nghe câu trả lời từ 'money' component (service)
        appService.money$.subscribe(function (data) {
            _this.currentMoney = data;
        });
    }
    ShopComponent.prototype.buy = function (form) {
        this.sum = (this.quantity_Apples * this.price_Apple) + (this.quantity_Orange * this.price_Orange) +
            (this.quantity_Lemon * this.price_Lemon) + (this.quantity_Dragon * this.price_Dragon);
        // nếu số tiền để mua < số tiền hiện có => dữ liệu từ 'output' sẽ đc chuyển đi
        if (this.sum <= this.currentMoney) {
            this.currentMoney -= this.sum;
            //Sau khi thanh toán xong, truyền 'currentMoney' sang cho 'money' component (service)
            this.appService.shopData(this.currentMoney);
            //số lượng cây trồng sẽ chuyển qua 'farm' component để cập nhật số lượng cây trong kho (output)
            this.outputShop.emit(form.value);
        }
        else
            alert("You don't have enough money");
        this.quantity_Apples = 0;
        this.quantity_Dragon = 0;
        this.quantity_Lemon = 0;
        this.quantity_Orange = 0;
    };
    return ShopComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Output */])(),
    __metadata("design:type", Object)
], ShopComponent.prototype, "outputShop", void 0);
ShopComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'my-shop',
        template: __webpack_require__("../../../../../src/app/shop/shop.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* AppService */]) === "function" && _a || Object])
], ShopComponent);

var _a;
//# sourceMappingURL=shop.component.js.map

/***/ }),

/***/ "../../../../../src/app/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecycleMultiSortableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RecycleMultiSortableComponent = (function () {
    function RecycleMultiSortableComponent() {
        this.listOne = ['Coffee', 'Orange Juice', 'Red Wine', 'Unhealty drink!', 'Water'];
        this.listRecycled = [];
    }
    return RecycleMultiSortableComponent;
}());
RecycleMultiSortableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'recycle-multi-sortable',
        template: "\n<h4>Simple sortable With Drop into recycle bin</h4>\n<div class=\"row\">\n    <div class=\"col-sm-3\">\n        <div class=\"panel panel-success\">\n            <div class=\"panel-heading\">\n                Favorite drinks\n            </div>\n            <div class=\"panel-body\" dnd-sortable-container [sortableData]=\"listOne\" [dropZones]=\"['delete-dropZone']\">\n                <ul class=\"list-group\">\n                    <li *ngFor=\"let item of listOne; let i = index\" class=\"list-group-item\"\n                    dnd-sortable [sortableIndex]=\"i\">{{item}}</li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-2\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-body\" dnd-sortable-container [dropZones]=\"['delete-dropZone']\" [sortableData]=\"listRecycled\">\n                <span class=\"glyphicon glyphicon-remove\"></span>\n            </div>\n        </div>\n        <div *ngIf=\"listRecycled.length\">\n        <b>Recycled:</b> <span>{{listRecycled.toString()}} </span>\n        </div>\n    </div>\n</div>"
    })
], RecycleMultiSortableComponent);

//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map