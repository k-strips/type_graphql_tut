"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyCreateNestedOneWithoutSizeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyCreateOrConnectWithoutSizeInput_1 = require("../inputs/PropertyCreateOrConnectWithoutSizeInput");
const PropertyCreateWithoutSizeInput_1 = require("../inputs/PropertyCreateWithoutSizeInput");
const PropertyWhereUniqueInput_1 = require("../inputs/PropertyWhereUniqueInput");
let PropertyCreateNestedOneWithoutSizeInput = class PropertyCreateNestedOneWithoutSizeInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateWithoutSizeInput_1.PropertyCreateWithoutSizeInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateWithoutSizeInput_1.PropertyCreateWithoutSizeInput)
], PropertyCreateNestedOneWithoutSizeInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateOrConnectWithoutSizeInput_1.PropertyCreateOrConnectWithoutSizeInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateOrConnectWithoutSizeInput_1.PropertyCreateOrConnectWithoutSizeInput)
], PropertyCreateNestedOneWithoutSizeInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyWhereUniqueInput_1.PropertyWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyWhereUniqueInput_1.PropertyWhereUniqueInput)
], PropertyCreateNestedOneWithoutSizeInput.prototype, "connect", void 0);
PropertyCreateNestedOneWithoutSizeInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PropertyCreateNestedOneWithoutSizeInput", {
        isAbstract: true
    })
], PropertyCreateNestedOneWithoutSizeInput);
exports.PropertyCreateNestedOneWithoutSizeInput = PropertyCreateNestedOneWithoutSizeInput;
