"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiddleModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const authorization_module_1 = require("../authorization/authorization.module");
const riddle_controller_1 = require("../Controllers/riddle.controller");
const riddle_entity_1 = require("../Entity/riddle.entity");
const riddle_service_1 = require("../Services/riddle.service");
let RiddleModule = class RiddleModule {
};
RiddleModule = __decorate([
    (0, common_1.Module)({
        imports: [
            authorization_module_1.AuthorizationModule,
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forFeature([riddle_entity_1.Riddle]),
        ],
        providers: [riddle_service_1.RiddleService],
        controllers: [riddle_controller_1.RiddleController],
        exports: [riddle_service_1.RiddleService],
    })
], RiddleModule);
exports.RiddleModule = RiddleModule;
//# sourceMappingURL=riddle.module.js.map