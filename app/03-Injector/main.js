"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require('@angular/http');
var share_module_1 = require("../share/share.module");
var User_1 = require("./Users/User/User");
var Users_1 = require("./Users/Users");
var App_1 = require('./App');
var UserProxy_1 = require("./Users/UserProxy");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [App_1.AppComponent, User_1.User, Users_1.Users],
            providers: [UserProxy_1.UserProxy],
            bootstrap: [App_1.AppComponent],
            imports: [
                http_1.HttpModule,
                platform_browser_1.BrowserModule,
                share_module_1.ShareModule
            ],
            exports: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
platform_browser_dynamic_1.platformBrowserDynamic()
    .bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map