"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveCreateManyUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let SaveCreateManyUserInput = class SaveCreateManyUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SaveCreateManyUserInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], SaveCreateManyUserInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SaveCreateManyUserInput.prototype, "propertyId", void 0);
SaveCreateManyUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SaveCreateManyUserInput", {
        isAbstract: true
    })
], SaveCreateManyUserInput);
exports.SaveCreateManyUserInput = SaveCreateManyUserInput;
