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
exports.AchivementController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const authorization_guard_1 = require("../authorization/authorization.guard");
const achivement_service_1 = require("../Services/achivement.service");
let AchivementController = class AchivementController {
    constructor(achivementService) {
        this.achivementService = achivementService;
    }
    async getAll() {
        return await this.achivementService.findAll();
    }
};
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(authorization_guard_1.AuthorizationGuard),
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AchivementController.prototype, "getAll", null);
AchivementController = __decorate([
    (0, common_1.Controller)('achivement'),
    __metadata("design:paramtypes", [achivement_service_1.AchivementService])
], AchivementController);
exports.AchivementController = AchivementController;
//# sourceMappingURL=achivement.controller.js.map