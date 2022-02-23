"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyCreateOrConnectWithoutLikesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyCreateWithoutLikesInput_1 = require("../inputs/PropertyCreateWithoutLikesInput");
const PropertyWhereUniqueInput_1 = require("../inputs/PropertyWhereUniqueInput");
let PropertyCreateOrConnectWithoutLikesInput = class PropertyCreateOrConnectWithoutLikesInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyWhereUniqueInput_1.PropertyWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PropertyWhereUniqueInput_1.PropertyWhereUniqueInput)
], PropertyCreateOrConnectWithoutLikesInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateWithoutLikesInput_1.PropertyCreateWithoutLikesInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateWithoutLikesInput_1.PropertyCreateWithoutLikesInput)
], PropertyCreateOrConnectWithoutLikesInput.prototype, "create", void 0);
PropertyCreateOrConnectWithoutLikesInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PropertyCreateOrConnectWithoutLikesInput", {
        isAbstract: true
    })
], PropertyCreateOrConnectWithoutLikesInput);
exports.PropertyCreateOrConnectWithoutLikesInput = PropertyCreateOrConnectWithoutLikesInput;
