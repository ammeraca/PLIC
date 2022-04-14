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
exports.Parcours = void 0;
const typeorm_1 = require("typeorm");
const group_entity_1 = require("./group.entity");
const riddle_entity_1 = require("./riddle.entity");
let Parcours = class Parcours {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Parcours.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Parcours.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => riddle_entity_1.Riddle, (riddle) => riddle.parcours),
    __metadata("design:type", riddle_entity_1.Riddle)
], Parcours.prototype, "riddle", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => group_entity_1.Group, (group) => group.parcours),
    __metadata("design:type", group_entity_1.Group)
], Parcours.prototype, "group", void 0);
Parcours = __decorate([
    (0, typeorm_1.Entity)()
], Parcours);
exports.Parcours = Parcours;
//# sourceMappingURL=parcours.entity.js.map