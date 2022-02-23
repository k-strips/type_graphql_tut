"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyProperty_RequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Property_RequestWhereInput_1 = require("../../../inputs/Property_RequestWhereInput");
let DeleteManyProperty_RequestArgs = class DeleteManyProperty_RequestArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestWhereInput_1.Property_RequestWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestWhereInput_1.Property_RequestWhereInput)
], DeleteManyProperty_RequestArgs.prototype, "where", void 0);
DeleteManyProperty_RequestArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteManyProperty_RequestArgs);
exports.DeleteManyProperty_RequestArgs = DeleteManyProperty_RequestArgs;
