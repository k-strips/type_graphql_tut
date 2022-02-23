"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyCreateNestedOneWithoutLikesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyCreateOrConnectWithoutLikesInput_1 = require("../inputs/PropertyCreateOrConnectWithoutLikesInput");
const PropertyCreateWithoutLikesInput_1 = require("../inputs/PropertyCreateWithoutLikesInput");
const PropertyWhereUniqueInput_1 = require("../inputs/PropertyWhereUniqueInput");
let PropertyCreateNestedOneWithoutLikesInput = class PropertyCreateNestedOneWithoutLikesInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateWithoutLikesInput_1.PropertyCreateWithoutLikesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateWithoutLikesInput_1.PropertyCreateWithoutLikesInput)
], PropertyCreateNestedOneWithoutLikesInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateOrConnectWithoutLikesInput_1.PropertyCreateOrConnectWithoutLikesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateOrConnectWithoutLikesInput_1.PropertyCreateOrConnectWithoutLikesInput)
], PropertyCreateNestedOneWithoutLikesInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyWhereUniqueInput_1.PropertyWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyWhereUniqueInput_1.PropertyWhereUniqueInput)
], PropertyCreateNestedOneWithoutLikesInput.prototype, "connect", void 0);
PropertyCreateNestedOneWithoutLikesInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PropertyCreateNestedOneWithoutLikesInput", {
        isAbstract: true
    })
], PropertyCreateNestedOneWithoutLikesInput);
exports.PropertyCreateNestedOneWithoutLikesInput = PropertyCreateNestedOneWithoutLikesInput;
