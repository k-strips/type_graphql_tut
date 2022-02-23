"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property_RequestUpsertWithoutPriceRangeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Property_RequestCreateWithoutPriceRangeInput_1 = require("../inputs/Property_RequestCreateWithoutPriceRangeInput");
const Property_RequestUpdateWithoutPriceRangeInput_1 = require("../inputs/Property_RequestUpdateWithoutPriceRangeInput");
let Property_RequestUpsertWithoutPriceRangeInput = class Property_RequestUpsertWithoutPriceRangeInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestUpdateWithoutPriceRangeInput_1.Property_RequestUpdateWithoutPriceRangeInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestUpdateWithoutPriceRangeInput_1.Property_RequestUpdateWithoutPriceRangeInput)
], Property_RequestUpsertWithoutPriceRangeInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestCreateWithoutPriceRangeInput_1.Property_RequestCreateWithoutPriceRangeInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestCreateWithoutPriceRangeInput_1.Property_RequestCreateWithoutPriceRangeInput)
], Property_RequestUpsertWithoutPriceRangeInput.prototype, "create", void 0);
Property_RequestUpsertWithoutPriceRangeInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Property_RequestUpsertWithoutPriceRangeInput", {
        isAbstract: true
    })
], Property_RequestUpsertWithoutPriceRangeInput);
exports.Property_RequestUpsertWithoutPriceRangeInput = Property_RequestUpsertWithoutPriceRangeInput;
