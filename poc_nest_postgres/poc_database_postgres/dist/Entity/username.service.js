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
exports.UsernameService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const username_entity_1 = require("./username.entity");
let UsernameService = class UsernameService {
    constructor(usernameRepo) {
        this.usernameRepo = usernameRepo;
    }
    findAll() {
        return this.usernameRepo.find({
            order: {
                id: 'ASC',
            },
        });
    }
    create(newUsername) {
        this.usernameRepo.insert(newUsername);
    }
    update(usernametoUpdate) {
        this.usernameRepo.update(usernametoUpdate.id, usernametoUpdate);
    }
    delete(id) {
        this.usernameRepo.delete(id);
    }
};
UsernameService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(username_entity_1.Username)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UsernameService);
exports.UsernameService = UsernameService;
//# sourceMappingURL=username.service.js.map