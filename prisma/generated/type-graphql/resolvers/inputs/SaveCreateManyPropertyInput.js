"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveCreateManyPropertyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let SaveCreateManyPropertyInput = class SaveCreateManyPropertyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SaveCreateManyPropertyInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], SaveCreateManyPropertyInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SaveCreateManyPropertyInput.prototype, "userId", void 0);
SaveCreateManyPropertyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SaveCreateManyPropertyInput", {
        isAbstract: true
    })
], SaveCreateManyPropertyInput);
exports.SaveCreateManyPropertyInput = SaveCreateManyPropertyInput;
