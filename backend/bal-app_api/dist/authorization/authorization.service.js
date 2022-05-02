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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
let AuthorizationService = class AuthorizationService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async getToken() {
        const headersRequest = {
            'Content-Type': 'application/json'
        };
        const body = {
            "client_id": "Mn4bNFTxfhbZkHLFvUX0j5AVbOuAlNqG",
            "client_secret": "fSoatfUS4fxkANV8Jt-LDtG8e0tAO01eQPkXraKKURHIMZhVCDj5MuUPw8AE9_Ff",
            "audience": "bal-app_api",
            "grant_type": "client_credentials"
        };
        const response = this.httpService.post('https://dev-2hywfoly.us.auth0.com/oauth/token', body, { headers: headersRequest }).pipe((0, rxjs_1.map)(response => response.data));
        return response;
    }
};
AuthorizationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], AuthorizationService);
exports.AuthorizationService = AuthorizationService;
//# sourceMappingURL=authorization.service.js.map