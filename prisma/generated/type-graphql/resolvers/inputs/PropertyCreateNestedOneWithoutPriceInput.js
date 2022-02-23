"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyCreateNestedOneWithoutPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyCreateOrConnectWithoutPriceInput_1 = require("../inputs/PropertyCreateOrConnectWithoutPriceInput");
const PropertyCreateWithoutPriceInput_1 = require("../inputs/PropertyCreateWithoutPriceInput");
const PropertyWhereUniqueInput_1 = require("../inputs/PropertyWhereUniqueInput");
let PropertyCreateNestedOneWithoutPriceInput = class PropertyCreateNestedOneWithoutPriceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateWithoutPriceInput_1.PropertyCreateWithoutPriceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateWithoutPriceInput_1.PropertyCreateWithoutPriceInput)
], PropertyCreateNestedOneWithoutPriceInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateOrConnectWithoutPriceInput_1.PropertyCreateOrConnectWithoutPriceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateOrConnectWithoutPriceInput_1.PropertyCreateOrConnectWithoutPriceInput)
], PropertyCreateNestedOneWithoutPriceInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyWhereUniqueInput_1.PropertyWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyWhereUniqueInput_1.PropertyWhereUniqueInput)
], PropertyCreateNestedOneWithoutPriceInput.prototype, "connect", void 0);
PropertyCreateNestedOneWithoutPriceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PropertyCreateNestedOneWithoutPriceInput", {
        isAbstract: true
    })
], PropertyCreateNestedOneWithoutPriceInput);
exports.PropertyCreateNestedOneWithoutPriceInput = PropertyCreateNestedOneWithoutPriceInput;
