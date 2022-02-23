"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyCreateNestedOneWithoutLikesInput_1 = require("../inputs/PropertyCreateNestedOneWithoutLikesInput");
const UserCreateNestedOneWithoutSavesInput_1 = require("../inputs/UserCreateNestedOneWithoutSavesInput");
let SaveCreateInput = class SaveCreateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SaveCreateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], SaveCreateInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutSavesInput_1.UserCreateNestedOneWithoutSavesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateNestedOneWithoutSavesInput_1.UserCreateNestedOneWithoutSavesInput)
], SaveCreateInput.prototype, "User", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateNestedOneWithoutLikesInput_1.PropertyCreateNestedOneWithoutLikesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateNestedOneWithoutLikesInput_1.PropertyCreateNestedOneWithoutLikesInput)
], SaveCreateInput.prototype, "Property", void 0);
SaveCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SaveCreateInput", {
        isAbstract: true
    })
], SaveCreateInput);
exports.SaveCreateInput = SaveCreateInput;
