(self["webpackChunkTeLlevoAPP"] = self["webpackChunkTeLlevoAPP"] || []).push([["src_app_pages_conductor_conductor_module_ts"],{

/***/ 2565:
/*!*************************************************************!*\
  !*** ./src/app/pages/conductor/conductor-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConductorPageRoutingModule": () => (/* binding */ ConductorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _conductor_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conductor.page */ 3120);




const routes = [
    {
        path: '',
        component: _conductor_page__WEBPACK_IMPORTED_MODULE_0__.ConductorPage
    }
];
let ConductorPageRoutingModule = class ConductorPageRoutingModule {
};
ConductorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConductorPageRoutingModule);



/***/ }),

/***/ 3908:
/*!*****************************************************!*\
  !*** ./src/app/pages/conductor/conductor.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConductorPageModule": () => (/* binding */ ConductorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _conductor_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conductor-routing.module */ 2565);
/* harmony import */ var _conductor_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conductor.page */ 3120);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 5642);








let ConductorPageModule = class ConductorPageModule {
};
ConductorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _conductor_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConductorPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_conductor_page__WEBPACK_IMPORTED_MODULE_1__.ConductorPage]
    })
], ConductorPageModule);



/***/ }),

/***/ 3120:
/*!***************************************************!*\
  !*** ./src/app/pages/conductor/conductor.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConductorPage": () => (/* binding */ ConductorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_conductor_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./conductor.page.html */ 7006);
/* harmony import */ var _conductor_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conductor.page.scss */ 2041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);






let ConductorPage = class ConductorPage {
    constructor(router, alertController) {
        this.router = router;
        this.alertController = alertController;
    }
    ngOnInit() {
    }
    navegar(page) {
        this.router.navigate(page);
    }
    salirSesion() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: '¿Seguro deseas salir?',
                buttons: [{
                        text: 'Cancelar'
                    }, {
                        text: 'Aceptar',
                        handler: () => { this.router.navigate(['/login']); }
                    }]
            });
            yield alert.present();
        });
    }
    generaViaje() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: 'Viaje generado!',
                buttons: [{
                        text: 'Aceptar',
                        handler: () => { this.router.navigate(['/home']); }
                    }]
            });
            yield alert.present();
        });
    }
};
ConductorPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
ConductorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-conductor',
        template: _raw_loader_conductor_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_conductor_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ConductorPage);



/***/ }),

/***/ 2041:
/*!*****************************************************!*\
  !*** ./src/app/pages/conductor/conductor.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".set-icon-exit {\n  font-size: 30px;\n  margin-right: 10px;\n  margin-top: 20px;\n  cursor: pointer;\n}\n\n.setButton {\n  margin-top: 30px;\n  margin-left: 30px;\n  margin-right: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmR1Y3Rvci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6ImNvbmR1Y3Rvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0LWljb24tZXhpdHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2V0QnV0dG9ue1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG59Il19 */");

/***/ }),

/***/ 7006:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/conductor/conductor.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-toolbar>\r\n  <ion-icon class=\"set-icon-exit slot\" slot=\"end\" (click)=\"salirSesion()\" name=\"exit-outline\"></ion-icon>\r\n  <app-header></app-header>\r\n</ion-toolbar>\r\n\r\n<ion-content>\r\n\r\n  <app-logo></app-logo>\r\n\r\n  <app-maps></app-maps>\r\n \r\n  <ion-button  class=\"setButton\" (click)=\"generaViaje()\" size=\"large\" expand=\"block\">GENERAR VIAJE</ion-button> \r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_conductor_conductor_module_ts.js.map