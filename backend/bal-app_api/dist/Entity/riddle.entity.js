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
exports.Riddle = void 0;
const typeorm_1 = require("typeorm");
const parcours_entity_1 = require("./parcours.entity");
const group_entity_1 = require("./group.entity");
const destination_entity_1 = require("./destination.entity");
let Riddle = class Riddle {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Riddle.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Riddle.prototype, "text", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Riddle.prototype, "parcoursId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Riddle.prototype, "destinationId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Riddle.prototype, "achievementId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => parcours_entity_1.Parcours, (parcours) => parcours.riddle),
    __metadata("design:type", parcours_entity_1.Parcours)
], Riddle.prototype, "parcours", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => group_entity_1.Group, (group) => group.riddle),
    __metadata("design:type", group_entity_1.Group)
], Riddle.prototype, "group", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => destination_entity_1.Destination, (destination) => destination.riddle),
    __metadata("design:type", destination_entity_1.Destination)
], Riddle.prototype, "destination", void 0);
Riddle = __decorate([
    (0, typeorm_1.Entity)()
], Riddle);
exports.Riddle = Riddle;
//# sourceMappingURL=riddle.entity.js.map