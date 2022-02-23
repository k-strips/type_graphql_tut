"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyProperty_RequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Property_RequestUpdateManyMutationInput_1 = require("../../../inputs/Property_RequestUpdateManyMutationInput");
const Property_RequestWhereInput_1 = require("../../../inputs/Property_RequestWhereInput");
let UpdateManyProperty_RequestArgs = class UpdateManyProperty_RequestArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestUpdateManyMutationInput_1.Property_RequestUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestUpdateManyMutationInput_1.Property_RequestUpdateManyMutationInput)
], UpdateManyProperty_RequestArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestWhereInput_1.Property_RequestWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestWhereInput_1.Property_RequestWhereInput)
], UpdateManyProperty_RequestArgs.prototype, "where", void 0);
UpdateManyProperty_RequestArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateManyProperty_RequestArgs);
exports.UpdateManyProperty_RequestArgs = UpdateManyProperty_RequestArgs;
