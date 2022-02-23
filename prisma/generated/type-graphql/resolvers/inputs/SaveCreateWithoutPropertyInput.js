"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveCreateWithoutPropertyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateNestedOneWithoutSavesInput_1 = require("../inputs/UserCreateNestedOneWithoutSavesInput");
let SaveCreateWithoutPropertyInput = class SaveCreateWithoutPropertyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SaveCreateWithoutPropertyInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], SaveCreateWithoutPropertyInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutSavesInput_1.UserCreateNestedOneWithoutSavesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateNestedOneWithoutSavesInput_1.UserCreateNestedOneWithoutSavesInput)
], SaveCreateWithoutPropertyInput.prototype, "User", void 0);
SaveCreateWithoutPropertyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SaveCreateWithoutPropertyInput", {
        isAbstract: true
    })
], SaveCreateWithoutPropertyInput);
exports.SaveCreateWithoutPropertyInput = SaveCreateWithoutPropertyInput;
