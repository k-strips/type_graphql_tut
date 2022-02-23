"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyUpsertWithoutAdvertisementInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyCreateWithoutAdvertisementInput_1 = require("../inputs/PropertyCreateWithoutAdvertisementInput");
const PropertyUpdateWithoutAdvertisementInput_1 = require("../inputs/PropertyUpdateWithoutAdvertisementInput");
let PropertyUpsertWithoutAdvertisementInput = class PropertyUpsertWithoutAdvertisementInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyUpdateWithoutAdvertisementInput_1.PropertyUpdateWithoutAdvertisementInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PropertyUpdateWithoutAdvertisementInput_1.PropertyUpdateWithoutAdvertisementInput)
], PropertyUpsertWithoutAdvertisementInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateWithoutAdvertisementInput_1.PropertyCreateWithoutAdvertisementInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateWithoutAdvertisementInput_1.PropertyCreateWithoutAdvertisementInput)
], PropertyUpsertWithoutAdvertisementInput.prototype, "create", void 0);
PropertyUpsertWithoutAdvertisementInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PropertyUpsertWithoutAdvertisementInput", {
        isAbstract: true
    })
], PropertyUpsertWithoutAdvertisementInput);
exports.PropertyUpsertWithoutAdvertisementInput = PropertyUpsertWithoutAdvertisementInput;
