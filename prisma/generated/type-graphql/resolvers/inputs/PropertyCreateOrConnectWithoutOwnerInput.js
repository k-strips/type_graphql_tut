"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyCreateOrConnectWithoutOwnerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyCreateWithoutOwnerInput_1 = require("../inputs/PropertyCreateWithoutOwnerInput");
const PropertyWhereUniqueInput_1 = require("../inputs/PropertyWhereUniqueInput");
let PropertyCreateOrConnectWithoutOwnerInput = class PropertyCreateOrConnectWithoutOwnerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyWhereUniqueInput_1.PropertyWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PropertyWhereUniqueInput_1.PropertyWhereUniqueInput)
], PropertyCreateOrConnectWithoutOwnerInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateWithoutOwnerInput_1.PropertyCreateWithoutOwnerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateWithoutOwnerInput_1.PropertyCreateWithoutOwnerInput)
], PropertyCreateOrConnectWithoutOwnerInput.prototype, "create", void 0);
PropertyCreateOrConnectWithoutOwnerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PropertyCreateOrConnectWithoutOwnerInput", {
        isAbstract: true
    })
], PropertyCreateOrConnectWithoutOwnerInput);
exports.PropertyCreateOrConnectWithoutOwnerInput = PropertyCreateOrConnectWithoutOwnerInput;
