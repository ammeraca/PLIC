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
exports.RiddleController = void 0;
const common_1 = require("@nestjs/common");
const riddle_service_1 = require("../Services/riddle.service");
let RiddleController = class RiddleController {
    constructor(riddleService) {
        this.riddleService = riddleService;
    }
    async getAll() {
        return await this.riddleService.findAll();
    }
    async get_next_riddle(res, type) {
        if (type == null) {
            res.status(common_1.HttpStatus.BAD_REQUEST).json({
                status: 'BAD REQUEST',
                message: 'missing mandatory argument type',
            });
        }
        const result = await this.riddleService.findNextRiddle(type);
        if (result == null) {
            res.status(common_1.HttpStatus.NOT_FOUND).json({
                status: 'NOT FOUND',
                message: 'element not found in database',
            });
        }
        return result;
    }
};
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RiddleController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('next_riddle?'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __param(1, (0, common_1.Query)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], RiddleController.prototype, "get_next_riddle", null);
RiddleController = __decorate([
    (0, common_1.Controller)('riddle'),
    __metadata("design:paramtypes", [riddle_service_1.RiddleService])
], RiddleController);
exports.RiddleController = RiddleController;
//# sourceMappingURL=riddle.controller.js.map