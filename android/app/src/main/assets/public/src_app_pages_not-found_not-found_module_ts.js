(self["webpackChunkTeLlevoAPP"] = self["webpackChunkTeLlevoAPP"] || []).push([["src_app_pages_not-found_not-found_module_ts"],{

/***/ 8578:
/*!*************************************************************!*\
  !*** ./src/app/pages/not-found/not-found-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundPageRoutingModule": () => (/* binding */ NotFoundPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _not_found_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found.page */ 5691);




const routes = [
    {
        path: '',
        component: _not_found_page__WEBPACK_IMPORTED_MODULE_0__.NotFoundPage
    }
];
let NotFoundPageRoutingModule = class NotFoundPageRoutingModule {
};
NotFoundPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NotFoundPageRoutingModule);



/***/ }),

/***/ 6470:
/*!*****************************************************!*\
  !*** ./src/app/pages/not-found/not-found.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundPageModule": () => (/* binding */ NotFoundPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _not_found_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found-routing.module */ 8578);
/* harmony import */ var _not_found_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found.page */ 5691);







let NotFoundPageModule = class NotFoundPageModule {
};
NotFoundPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _not_found_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotFoundPageRoutingModule
        ],
        declarations: [_not_found_page__WEBPACK_IMPORTED_MODULE_1__.NotFoundPage]
    })
], NotFoundPageModule);



/***/ }),

/***/ 5691:
/*!***************************************************!*\
  !*** ./src/app/pages/not-found/not-found.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundPage": () => (/* binding */ NotFoundPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_not_found_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./not-found.page.html */ 7303);
/* harmony import */ var _not_found_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found.page.scss */ 8522);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);






let NotFoundPage = class NotFoundPage {
    constructor(animationCtrl, router) {
        this.animationCtrl = animationCtrl;
        this.router = router;
    }
    ngAfterViewInit() {
        const animation = this.animationCtrl
            .create()
            .addElement(this.animar404.nativeElement)
            .duration(1000)
            .iterations(1)
            .fromTo('transform', 'translateY(0px)', 'translateY(-100px)')
            .fromTo('opacity', '0', '1')
            .fromTo('transform', 'translateY(-100px)', 'translateY(0px)');
        animation.play();
    }
    ngOnInit() {
    }
    navegar(page) {
        this.router.navigate(page);
    }
};
NotFoundPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AnimationController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
NotFoundPage.propDecorators = {
    animar404: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['animar404', { read: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef, static: true },] }]
};
NotFoundPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-not-found',
        template: _raw_loader_not_found_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_not_found_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NotFoundPage);



/***/ }),

/***/ 8522:
/*!*****************************************************!*\
  !*** ./src/app/pages/not-found/not-found.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-button {\n  margin-left: 80px;\n  margin-right: 80px;\n}\n\n.setGIF {\n  margin-left: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKIiwiZmlsZSI6Im5vdC1mb3VuZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDgwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbi5zZXRHSUZ7XHJcbiAgICBtYXJnaW4tbGVmdDogODBweDtcclxufSJdfQ== */");

/***/ }),

/***/ 7303:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/not-found/not-found.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Not Found</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n      <img src=\"\\assets\\404.jpg\" alt=\"\">\n  </ion-card>\n\n  <ion-card>\n      <img  class=\"setGIF\" #animar404 src=\"\\assets\\gif404.gif\" alt=\"\">\n  </ion-card>\n\n  <ion-button color=\"success\"(click)=\"navegar(['/home'])\" expand=\"block\">Volver Home</ion-button>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_not-found_not-found_module_ts.js.map