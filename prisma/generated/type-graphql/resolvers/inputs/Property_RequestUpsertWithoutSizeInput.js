"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property_RequestUpsertWithoutSizeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Property_RequestCreateWithoutSizeInput_1 = require("../inputs/Property_RequestCreateWithoutSizeInput");
const Property_RequestUpdateWithoutSizeInput_1 = require("../inputs/Property_RequestUpdateWithoutSizeInput");
let Property_RequestUpsertWithoutSizeInput = class Property_RequestUpsertWithoutSizeInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestUpdateWithoutSizeInput_1.Property_RequestUpdateWithoutSizeInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestUpdateWithoutSizeInput_1.Property_RequestUpdateWithoutSizeInput)
], Property_RequestUpsertWithoutSizeInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestCreateWithoutSizeInput_1.Property_RequestCreateWithoutSizeInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestCreateWithoutSizeInput_1.Property_RequestCreateWithoutSizeInput)
], Property_RequestUpsertWithoutSizeInput.prototype, "create", void 0);
Property_RequestUpsertWithoutSizeInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Property_RequestUpsertWithoutSizeInput", {
        isAbstract: true
    })
], Property_RequestUpsertWithoutSizeInput);
exports.Property_RequestUpsertWithoutSizeInput = Property_RequestUpsertWithoutSizeInput;
