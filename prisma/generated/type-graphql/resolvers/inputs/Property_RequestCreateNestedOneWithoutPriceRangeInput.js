"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property_RequestCreateNestedOneWithoutPriceRangeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Property_RequestCreateOrConnectWithoutPriceRangeInput_1 = require("../inputs/Property_RequestCreateOrConnectWithoutPriceRangeInput");
const Property_RequestCreateWithoutPriceRangeInput_1 = require("../inputs/Property_RequestCreateWithoutPriceRangeInput");
const Property_RequestWhereUniqueInput_1 = require("../inputs/Property_RequestWhereUniqueInput");
let Property_RequestCreateNestedOneWithoutPriceRangeInput = class Property_RequestCreateNestedOneWithoutPriceRangeInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestCreateWithoutPriceRangeInput_1.Property_RequestCreateWithoutPriceRangeInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestCreateWithoutPriceRangeInput_1.Property_RequestCreateWithoutPriceRangeInput)
], Property_RequestCreateNestedOneWithoutPriceRangeInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestCreateOrConnectWithoutPriceRangeInput_1.Property_RequestCreateOrConnectWithoutPriceRangeInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestCreateOrConnectWithoutPriceRangeInput_1.Property_RequestCreateOrConnectWithoutPriceRangeInput)
], Property_RequestCreateNestedOneWithoutPriceRangeInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestWhereUniqueInput_1.Property_RequestWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestWhereUniqueInput_1.Property_RequestWhereUniqueInput)
], Property_RequestCreateNestedOneWithoutPriceRangeInput.prototype, "connect", void 0);
Property_RequestCreateNestedOneWithoutPriceRangeInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Property_RequestCreateNestedOneWithoutPriceRangeInput", {
        isAbstract: true
    })
], Property_RequestCreateNestedOneWithoutPriceRangeInput);
exports.Property_RequestCreateNestedOneWithoutPriceRangeInput = Property_RequestCreateNestedOneWithoutPriceRangeInput;
