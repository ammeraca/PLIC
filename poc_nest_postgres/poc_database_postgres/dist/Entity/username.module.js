"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsernameModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const username_controller_1 = require("./username.controller");
const username_entity_1 = require("./username.entity");
const username_service_1 = require("./username.service");
let UsernameModule = class UsernameModule {
};
UsernameModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([username_entity_1.Username])],
        providers: [username_service_1.UsernameService],
        controllers: [username_controller_1.UsernameController],
        exports: [username_service_1.UsernameService],
    })
], UsernameModule);
exports.UsernameModule = UsernameModule;
//# sourceMappingURL=username.module.js.map