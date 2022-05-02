"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AchievementModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const achivement_entity_1 = require("../Entity/achivement.entity");
const achivement_service_1 = require("../Services/achivement.service");
let AchievementModule = class AchievementModule {
};
AchievementModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([achivement_entity_1.Achivement]), config_1.ConfigModule.forRoot()],
        providers: [achivement_service_1.AchivementService],
        controllers: [],
        exports: [achivement_service_1.AchivementService],
    })
], AchievementModule);
exports.AchievementModule = AchievementModule;
//# sourceMappingURL=achievement.module.js.map