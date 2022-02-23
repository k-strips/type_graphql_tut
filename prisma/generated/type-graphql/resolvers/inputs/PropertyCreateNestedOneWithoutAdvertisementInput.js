"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyCreateNestedOneWithoutAdvertisementInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyCreateOrConnectWithoutAdvertisementInput_1 = require("../inputs/PropertyCreateOrConnectWithoutAdvertisementInput");
const PropertyCreateWithoutAdvertisementInput_1 = require("../inputs/PropertyCreateWithoutAdvertisementInput");
const PropertyWhereUniqueInput_1 = require("../inputs/PropertyWhereUniqueInput");
let PropertyCreateNestedOneWithoutAdvertisementInput = class PropertyCreateNestedOneWithoutAdvertisementInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateWithoutAdvertisementInput_1.PropertyCreateWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateWithoutAdvertisementInput_1.PropertyCreateWithoutAdvertisementInput)
], PropertyCreateNestedOneWithoutAdvertisementInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateOrConnectWithoutAdvertisementInput_1.PropertyCreateOrConnectWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateOrConnectWithoutAdvertisementInput_1.PropertyCreateOrConnectWithoutAdvertisementInput)
], PropertyCreateNestedOneWithoutAdvertisementInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyWhereUniqueInput_1.PropertyWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyWhereUniqueInput_1.PropertyWhereUniqueInput)
], PropertyCreateNestedOneWithoutAdvertisementInput.prototype, "connect", void 0);
PropertyCreateNestedOneWithoutAdvertisementInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PropertyCreateNestedOneWithoutAdvertisementInput", {
        isAbstract: true
    })
], PropertyCreateNestedOneWithoutAdvertisementInput);
exports.PropertyCreateNestedOneWithoutAdvertisementInput = PropertyCreateNestedOneWithoutAdvertisementInput;
