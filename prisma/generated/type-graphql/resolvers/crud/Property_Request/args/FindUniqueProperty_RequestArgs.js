"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueProperty_RequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Property_RequestWhereUniqueInput_1 = require("../../../inputs/Property_RequestWhereUniqueInput");
let FindUniqueProperty_RequestArgs = class FindUniqueProperty_RequestArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestWhereUniqueInput_1.Property_RequestWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestWhereUniqueInput_1.Property_RequestWhereUniqueInput)
], FindUniqueProperty_RequestArgs.prototype, "where", void 0);
FindUniqueProperty_RequestArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindUniqueProperty_RequestArgs);
exports.FindUniqueProperty_RequestArgs = FindUniqueProperty_RequestArgs;
