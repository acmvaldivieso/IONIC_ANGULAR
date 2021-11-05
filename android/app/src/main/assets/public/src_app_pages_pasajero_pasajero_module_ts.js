(self["webpackChunkTeLlevoAPP"] = self["webpackChunkTeLlevoAPP"] || []).push([["src_app_pages_pasajero_pasajero_module_ts"],{

/***/ 7879:
/*!***********************************************************!*\
  !*** ./src/app/pages/pasajero/pasajero-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasajeroPageRoutingModule": () => (/* binding */ PasajeroPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _pasajero_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pasajero.page */ 3955);




const routes = [
    {
        path: '',
        component: _pasajero_page__WEBPACK_IMPORTED_MODULE_0__.PasajeroPage
    }
];
let PasajeroPageRoutingModule = class PasajeroPageRoutingModule {
};
PasajeroPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PasajeroPageRoutingModule);



/***/ }),

/***/ 6124:
/*!***************************************************!*\
  !*** ./src/app/pages/pasajero/pasajero.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasajeroPageModule": () => (/* binding */ PasajeroPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _pasajero_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pasajero-routing.module */ 7879);
/* harmony import */ var _pasajero_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pasajero.page */ 3955);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 5642);








let PasajeroPageModule = class PasajeroPageModule {
};
PasajeroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _pasajero_routing_module__WEBPACK_IMPORTED_MODULE_0__.PasajeroPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_pasajero_page__WEBPACK_IMPORTED_MODULE_1__.PasajeroPage]
    })
], PasajeroPageModule);



/***/ }),

/***/ 3955:
/*!*************************************************!*\
  !*** ./src/app/pages/pasajero/pasajero.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasajeroPage": () => (/* binding */ PasajeroPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_pasajero_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./pasajero.page.html */ 9654);
/* harmony import */ var _pasajero_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pasajero.page.scss */ 9716);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ 2468);







let PasajeroPage = class PasajeroPage {
    constructor(router, alertController, dataService) {
        this.router = router;
        this.alertController = alertController;
        this.dataService = dataService;
        this.viaje = [];
    }
    //Cargar el dato de la API al crear la PAGE de PASAJERO
    ngOnInit() {
        this.dataService.getAPI().subscribe(resp => {
            console.log(resp);
            this.viaje.push(...resp.viaje);
        });
        //this.datos = this.dataService.getAPI();
    }
    navegar(page) {
        this.router.navigate(page);
    }
    salirSesion() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: '¿Seguro deseas salir?',
                buttons: [{
                        text: 'Cancelar'
                    }, {
                        text: 'Aceptar',
                        handler: () => {
                            this.router.navigate(['/login']);
                            localStorage.removeItem("ingresado");
                        }
                    }]
            });
            yield alert.present();
        });
    }
    reservarViaje() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: 'Su viaje fue reservado con exito',
                buttons: [{
                        text: 'Aceptar',
                        handler: () => { this.router.navigate(['/home']); }
                    }]
            });
            yield alert.present();
        });
    }
};
PasajeroPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService }
];
PasajeroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-pasajero',
        template: _raw_loader_pasajero_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pasajero_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PasajeroPage);



/***/ }),

/***/ 2468:
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);



let DataService = class DataService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
        this.apiURL = 'http://Sebacaffi.github.io/data/db.json';
    }
    getAPI() {
        return this.http.get(this.apiURL);
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
DataService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ 9716:
/*!***************************************************!*\
  !*** ./src/app/pages/pasajero/pasajero.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".set-icon-exit {\n  font-size: 30px;\n  margin-right: 10px;\n  margin-top: 20px;\n  cursor: pointer;\n}\n\n.setButton {\n  margin-top: 30px;\n  margin-left: 150px;\n  margin-right: 150px;\n  font-size: small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc2FqZXJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsImZpbGUiOiJwYXNhamVyby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0LWljb24tZXhpdHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zZXRCdXR0b257XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBtYXJnaW4tbGVmdDogMTUwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNTBweDtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 9654:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pasajero/pasajero.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-toolbar>\r\n  <ion-icon class=\"set-icon-exit slot\" slot=\"end\" (click)=\"salirSesion()\" name=\"exit-outline\"></ion-icon>\r\n  <app-header></app-header>\r\n</ion-toolbar>\r\n\r\n<ion-content>\r\n  <app-logo></app-logo>\r\n\r\n  <ion-card *ngFor=\"let dato of viaje\">\r\n\r\n    <ion-card-header>\r\n      <ion-item>\r\n        <ion-avatar slot=\"end\">\r\n          <img [src]=\"dato.imagen\">\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <ion-card-subtitle>Carrera: {{dato.destino}}</ion-card-subtitle>\r\n         <ion-card-title >{{dato.conductor}}</ion-card-title>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-card-header>\r\n\r\n    <ion-card-content>\r\n      <ion-label>Destino: {{dato.destino}}</ion-label><br>\r\n      <ion-label>Ruta: {{dato.ruta}}</ion-label><br>\r\n      <ion-label>Patente: {{dato.patente}}</ion-label><br>\r\n      <ion-label>Valor: {{dato.valor}}</ion-label><br>\r\n      <br>\r\n      <ion-label>Sobre mi: {{dato.resumen}}</ion-label>\r\n    </ion-card-content>\r\n    \r\n    <ion-button class=\"setButton\" (click)=\"reservarViaje()\" size=\"large\" expand=\"block\">RESERVAR</ion-button>\r\n  </ion-card> \r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_pasajero_pasajero_module_ts.js.map