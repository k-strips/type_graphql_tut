"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyUpsertWithoutSizeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyCreateWithoutSizeInput_1 = require("../inputs/PropertyCreateWithoutSizeInput");
const PropertyUpdateWithoutSizeInput_1 = require("../inputs/PropertyUpdateWithoutSizeInput");
let PropertyUpsertWithoutSizeInput = class PropertyUpsertWithoutSizeInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyUpdateWithoutSizeInput_1.PropertyUpdateWithoutSizeInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PropertyUpdateWithoutSizeInput_1.PropertyUpdateWithoutSizeInput)
], PropertyUpsertWithoutSizeInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateWithoutSizeInput_1.PropertyCreateWithoutSizeInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateWithoutSizeInput_1.PropertyCreateWithoutSizeInput)
], PropertyUpsertWithoutSizeInput.prototype, "create", void 0);
PropertyUpsertWithoutSizeInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PropertyUpsertWithoutSizeInput", {
        isAbstract: true
    })
], PropertyUpsertWithoutSizeInput);
exports.PropertyUpsertWithoutSizeInput = PropertyUpsertWithoutSizeInput;
