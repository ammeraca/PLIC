"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const parcours_entity_1 = require("./Entity/parcours.entity");
const riddle_entity_1 = require("./Entity/riddle.entity");
const riddle_module_1 = require("./Modules/riddle.module");
const group_module_1 = require("./Modules/group.module");
const group_entity_1 = require("./Entity/group.entity");
const destination_entity_1 = require("./Entity/destination.entity");
const authorization_module_1 = require("./authorization/authorization.module");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            riddle_module_1.RiddleModule,
            group_module_1.GroupModule,
            authorization_module_1.AuthorizationModule,
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'password_poc',
                database: 'BalApp',
                entities: [riddle_entity_1.Riddle, parcours_entity_1.Parcours, group_entity_1.Group, destination_entity_1.Destination],
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map