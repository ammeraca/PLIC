"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinationModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const destination_controller_1 = require("../Controllers/destination.controller");
const destination_entity_1 = require("../Entity/destination.entity");
const destination_service_1 = require("../Services/destination.service");
let DestinationModule = class DestinationModule {
};
DestinationModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([destination_entity_1.Destination]), config_1.ConfigModule.forRoot()],
        providers: [destination_service_1.DestinationService],
        controllers: [destination_controller_1.DestinationController],
        exports: [destination_service_1.DestinationService],
    })
], DestinationModule);
exports.DestinationModule = DestinationModule;
//# sourceMappingURL=destination.module.js.map