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
exports.DestinationController = void 0;
const common_1 = require("@nestjs/common");
const destination_service_1 = require("../Services/destination.service");
let DestinationController = class DestinationController {
    constructor(destinationService) {
        this.destinationService = destinationService;
    }
    async getAll() {
        return await this.destinationService.findAll();
    }
};
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DestinationController.prototype, "getAll", null);
DestinationController = __decorate([
    (0, common_1.Controller)('destination'),
    __metadata("design:paramtypes", [destination_service_1.DestinationService])
], DestinationController);
exports.DestinationController = DestinationController;
//# sourceMappingURL=destination.controller.js.map