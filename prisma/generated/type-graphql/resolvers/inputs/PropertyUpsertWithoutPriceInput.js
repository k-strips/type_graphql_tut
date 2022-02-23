"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyUpsertWithoutPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyCreateWithoutPriceInput_1 = require("../inputs/PropertyCreateWithoutPriceInput");
const PropertyUpdateWithoutPriceInput_1 = require("../inputs/PropertyUpdateWithoutPriceInput");
let PropertyUpsertWithoutPriceInput = class PropertyUpsertWithoutPriceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyUpdateWithoutPriceInput_1.PropertyUpdateWithoutPriceInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PropertyUpdateWithoutPriceInput_1.PropertyUpdateWithoutPriceInput)
], PropertyUpsertWithoutPriceInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateWithoutPriceInput_1.PropertyCreateWithoutPriceInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateWithoutPriceInput_1.PropertyCreateWithoutPriceInput)
], PropertyUpsertWithoutPriceInput.prototype, "create", void 0);
PropertyUpsertWithoutPriceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PropertyUpsertWithoutPriceInput", {
        isAbstract: true
    })
], PropertyUpsertWithoutPriceInput);
exports.PropertyUpsertWithoutPriceInput = PropertyUpsertWithoutPriceInput;
