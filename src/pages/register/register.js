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
var ionic_angular_1 = require("ionic-angular");
var tabs_1 = require("../tabs/tabs");
var request_service_1 = require("../../app/services/request.service");
var RegisterPage = (function () {
    function RegisterPage(navCtrl, requestService) {
        this.navCtrl = navCtrl;
        this.requestService = requestService;
        this.username = "";
        this.email = "";
        this.avatar = "";
        this.password = "";
        this.incorrectPassword = false;
    }
    RegisterPage.prototype.registerSubmit = function () {
        var _this = this;
        console.log(this.password);
        console.log(this.passwordConfirm);
        var self = this;
        if (this.password === this.passwordConfirm) {
            var newUser = {
                username: this.username,
                email: this.email,
                password: this.password,
                avatar_url: this.avatar
            };
            var registerStatus = this.requestService.registerUser(newUser);
            registerStatus.subscribe(function (data) {
                console.log(data);
                var responseToken = JSON.parse(data["_body"]);
                console.log(responseToken);
                localStorage.setItem("token", responseToken.token);
                _this.navCtrl.push(tabs_1.TabsPage);
            }, function (error) {
                _this.incorrectPassword = true;
            });
        }
        else {
            this.incorrectPassword = true;
        }
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    core_1.Component({
        selector: 'page-register',
        templateUrl: 'register.html'
    }),
    __metadata("design:paramtypes", [ionic_angular_1.NavController, request_service_1.RequestService])
], RegisterPage);
exports.RegisterPage = RegisterPage;
