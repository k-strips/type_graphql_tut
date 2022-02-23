"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyCreateOrConnectWithoutAdvertisementInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyCreateWithoutAdvertisementInput_1 = require("../inputs/PropertyCreateWithoutAdvertisementInput");
const PropertyWhereUniqueInput_1 = require("../inputs/PropertyWhereUniqueInput");
let PropertyCreateOrConnectWithoutAdvertisementInput = class PropertyCreateOrConnectWithoutAdvertisementInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyWhereUniqueInput_1.PropertyWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PropertyWhereUniqueInput_1.PropertyWhereUniqueInput)
], PropertyCreateOrConnectWithoutAdvertisementInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateWithoutAdvertisementInput_1.PropertyCreateWithoutAdvertisementInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateWithoutAdvertisementInput_1.PropertyCreateWithoutAdvertisementInput)
], PropertyCreateOrConnectWithoutAdvertisementInput.prototype, "create", void 0);
PropertyCreateOrConnectWithoutAdvertisementInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PropertyCreateOrConnectWithoutAdvertisementInput", {
        isAbstract: true
    })
], PropertyCreateOrConnectWithoutAdvertisementInput);
exports.PropertyCreateOrConnectWithoutAdvertisementInput = PropertyCreateOrConnectWithoutAdvertisementInput;
