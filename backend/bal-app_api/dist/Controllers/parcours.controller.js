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
exports.ParcoursController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const authorization_guard_1 = require("../authorization/authorization.guard");
const parcours_service_1 = require("../Services/parcours.service");
let ParcoursController = class ParcoursController {
    constructor(parcoursService) {
        this.parcoursService = parcoursService;
    }
    async getAll() {
        return await this.parcoursService.findAll();
    }
};
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(authorization_guard_1.AuthorizationGuard),
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ParcoursController.prototype, "getAll", null);
ParcoursController = __decorate([
    (0, common_1.Controller)('parcours'),
    __metadata("design:paramtypes", [parcours_service_1.ParcoursService])
], ParcoursController);
exports.ParcoursController = ParcoursController;
//# sourceMappingURL=parcours.controller.js.map