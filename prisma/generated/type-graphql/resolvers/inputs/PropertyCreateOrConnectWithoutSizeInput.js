"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyCreateOrConnectWithoutSizeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyCreateWithoutSizeInput_1 = require("../inputs/PropertyCreateWithoutSizeInput");
const PropertyWhereUniqueInput_1 = require("../inputs/PropertyWhereUniqueInput");
let PropertyCreateOrConnectWithoutSizeInput = class PropertyCreateOrConnectWithoutSizeInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyWhereUniqueInput_1.PropertyWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PropertyWhereUniqueInput_1.PropertyWhereUniqueInput)
], PropertyCreateOrConnectWithoutSizeInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateWithoutSizeInput_1.PropertyCreateWithoutSizeInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateWithoutSizeInput_1.PropertyCreateWithoutSizeInput)
], PropertyCreateOrConnectWithoutSizeInput.prototype, "create", void 0);
PropertyCreateOrConnectWithoutSizeInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PropertyCreateOrConnectWithoutSizeInput", {
        isAbstract: true
    })
], PropertyCreateOrConnectWithoutSizeInput);
exports.PropertyCreateOrConnectWithoutSizeInput = PropertyCreateOrConnectWithoutSizeInput;
