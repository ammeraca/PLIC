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
exports.Destination = void 0;
const typeorm_1 = require("typeorm");
const riddle_entity_1 = require("./riddle.entity");
let Destination = class Destination {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Destination.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Destination.prototype, "path", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Destination.prototype, "longitude", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Destination.prototype, "latitude", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => riddle_entity_1.Riddle, (riddle) => riddle.destination),
    __metadata("design:type", riddle_entity_1.Riddle)
], Destination.prototype, "riddle", void 0);
Destination = __decorate([
    (0, typeorm_1.Entity)()
], Destination);
exports.Destination = Destination;
//# sourceMappingURL=destination.entity.js.map