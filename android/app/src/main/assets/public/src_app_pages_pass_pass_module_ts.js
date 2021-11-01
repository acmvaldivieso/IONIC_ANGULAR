(self["webpackChunkTeLlevoAPP"] = self["webpackChunkTeLlevoAPP"] || []).push([["src_app_pages_pass_pass_module_ts"],{

/***/ 742:
/*!***************************************************!*\
  !*** ./src/app/pages/pass/pass-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PassPageRoutingModule": () => (/* binding */ PassPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _pass_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pass.page */ 9600);




const routes = [
    {
        path: '',
        component: _pass_page__WEBPACK_IMPORTED_MODULE_0__.PassPage
    }
];
let PassPageRoutingModule = class PassPageRoutingModule {
};
PassPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PassPageRoutingModule);



/***/ }),

/***/ 4478:
/*!*******************************************!*\
  !*** ./src/app/pages/pass/pass.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PassPageModule": () => (/* binding */ PassPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _pass_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pass-routing.module */ 742);
/* harmony import */ var _pass_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pass.page */ 9600);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 5642);








let PassPageModule = class PassPageModule {
};
PassPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _pass_routing_module__WEBPACK_IMPORTED_MODULE_0__.PassPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_pass_page__WEBPACK_IMPORTED_MODULE_1__.PassPage]
    })
], PassPageModule);



/***/ }),

/***/ 9600:
/*!*****************************************!*\
  !*** ./src/app/pages/pass/pass.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PassPage": () => (/* binding */ PassPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_pass_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./pass.page.html */ 9713);
/* harmony import */ var _pass_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pass.page.scss */ 5330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);






let PassPage = class PassPage {
    constructor(router, alertController) {
        this.router = router;
        this.alertController = alertController;
    }
    ngOnInit() {
    }
    navegar(page) {
        this.router.navigate(page);
    }
    /*Alerta para avisar que se envío la contraseña al correo */
    alertrecuperar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: 'Contraseña enviada',
                buttons: [{
                        text: 'Aceptar',
                        handler: () => { this.router.navigate(['/login']); }
                    }]
            });
            yield alert.present();
        });
    }
};
PassPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
PassPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-pass',
        template: _raw_loader_pass_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pass_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PassPage);



/***/ }),

/***/ 5330:
/*!*******************************************!*\
  !*** ./src/app/pages/pass/pass.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".set-icon-back {\n  font-size: 30px;\n  margin-left: 10px;\n  margin-top: 20px;\n  cursor: pointer;\n}\n\n.set-parrafo {\n  margin-left: 55px;\n  margin-right: 40px;\n  font-size: small;\n  color: gray;\n  text-align: center;\n}\n\n.setForm {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.setButton {\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0YiLCJmaWxlIjoicGFzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0LWljb24tYmFja3tcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zZXQtcGFycmFmb3tcclxuICBtYXJnaW4tbGVmdDogNTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICBjb2xvcjogZ3JheTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZXRGb3JtIHtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5zZXRCdXR0b257XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufSJdfQ== */");

/***/ }),

/***/ 9713:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pass/pass.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\r\n\r\n<ion-content>\r\n  <app-logo></app-logo>\r\n  \r\n  <p class=\"set-parrafo\">Ingrese el correo de la cuenta para recuperar la contraseña</p>\r\n\r\n  <div class=\"setForm\">\r\n    <form #formulario=\"ngForm\" (ngSubmit)=\"submit()\">\r\n  \r\n      <ion-item>\r\n        <ion-input type=\"email\"  \r\n                  placeholder=\"correo@correo.com\"\r\n                  name=\"email\"\r\n                  [(ngModel)]=\"correo\"\r\n                  pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\"\r\n                  required>\r\n        </ion-input>\r\n      </ion-item >\r\n  \r\n      <ion-button (click)=\"correoEnviado()\" \r\n                  type=\"submit\" \r\n                  expand=\"block\"\r\n                  [disabled]=\"formulario.invalid\"\r\n                  class=\"setButton\">\r\n        RECUPERAR\r\n      </ion-button>\r\n    </form>\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_pass_pass_module_ts.js.map