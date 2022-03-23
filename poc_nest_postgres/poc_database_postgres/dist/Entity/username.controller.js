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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsernameController = void 0;
const common_1 = require("@nestjs/common");
const username_service_1 = require("./username.service");
let UsernameController = class UsernameController {
    constructor(usernameService) {
        this.usernameService = usernameService;
    }
    async getAll() {
        return await this.usernameService.findAll();
    }
    createEmployee(newUsername) {
        this.usernameService.create(newUsername);
    }
    updateEmployee(usernameToUpdate) {
        this.usernameService.update(usernameToUpdate);
    }
    deleteEmployee(id) {
        this.usernameService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsernameController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)('add'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsernameController.prototype, "createEmployee", null);
__decorate([
    (0, common_1.Post)('update'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsernameController.prototype, "updateEmployee", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsernameController.prototype, "deleteEmployee", null);
UsernameController = __decorate([
    (0, common_1.Controller)('username'),
    __metadata("design:paramtypes", [username_service_1.UsernameService])
], UsernameController);
exports.UsernameController = UsernameController;
//# sourceMappingURL=username.controller.js.map