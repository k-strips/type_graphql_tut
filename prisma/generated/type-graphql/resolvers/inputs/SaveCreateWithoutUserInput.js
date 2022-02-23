"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyCreateNestedOneWithoutLikesInput_1 = require("../inputs/PropertyCreateNestedOneWithoutLikesInput");
let SaveCreateWithoutUserInput = class SaveCreateWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SaveCreateWithoutUserInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], SaveCreateWithoutUserInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateNestedOneWithoutLikesInput_1.PropertyCreateNestedOneWithoutLikesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateNestedOneWithoutLikesInput_1.PropertyCreateNestedOneWithoutLikesInput)
], SaveCreateWithoutUserInput.prototype, "Property", void 0);
SaveCreateWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SaveCreateWithoutUserInput", {
        isAbstract: true
    })
], SaveCreateWithoutUserInput);
exports.SaveCreateWithoutUserInput = SaveCreateWithoutUserInput;
