"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyCreateOrConnectWithoutPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyCreateWithoutPriceInput_1 = require("../inputs/PropertyCreateWithoutPriceInput");
const PropertyWhereUniqueInput_1 = require("../inputs/PropertyWhereUniqueInput");
let PropertyCreateOrConnectWithoutPriceInput = class PropertyCreateOrConnectWithoutPriceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyWhereUniqueInput_1.PropertyWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PropertyWhereUniqueInput_1.PropertyWhereUniqueInput)
], PropertyCreateOrConnectWithoutPriceInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateWithoutPriceInput_1.PropertyCreateWithoutPriceInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateWithoutPriceInput_1.PropertyCreateWithoutPriceInput)
], PropertyCreateOrConnectWithoutPriceInput.prototype, "create", void 0);
PropertyCreateOrConnectWithoutPriceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PropertyCreateOrConnectWithoutPriceInput", {
        isAbstract: true
    })
], PropertyCreateOrConnectWithoutPriceInput);
exports.PropertyCreateOrConnectWithoutPriceInput = PropertyCreateOrConnectWithoutPriceInput;
