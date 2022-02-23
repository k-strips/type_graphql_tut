"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property_RequestCreateOrConnectWithoutPriceRangeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Property_RequestCreateWithoutPriceRangeInput_1 = require("../inputs/Property_RequestCreateWithoutPriceRangeInput");
const Property_RequestWhereUniqueInput_1 = require("../inputs/Property_RequestWhereUniqueInput");
let Property_RequestCreateOrConnectWithoutPriceRangeInput = class Property_RequestCreateOrConnectWithoutPriceRangeInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestWhereUniqueInput_1.Property_RequestWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestWhereUniqueInput_1.Property_RequestWhereUniqueInput)
], Property_RequestCreateOrConnectWithoutPriceRangeInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestCreateWithoutPriceRangeInput_1.Property_RequestCreateWithoutPriceRangeInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestCreateWithoutPriceRangeInput_1.Property_RequestCreateWithoutPriceRangeInput)
], Property_RequestCreateOrConnectWithoutPriceRangeInput.prototype, "create", void 0);
Property_RequestCreateOrConnectWithoutPriceRangeInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Property_RequestCreateOrConnectWithoutPriceRangeInput", {
        isAbstract: true
    })
], Property_RequestCreateOrConnectWithoutPriceRangeInput);
exports.Property_RequestCreateOrConnectWithoutPriceRangeInput = Property_RequestCreateOrConnectWithoutPriceRangeInput;
