"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProperty_RequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Property_RequestWhereUniqueInput_1 = require("../../../inputs/Property_RequestWhereUniqueInput");
let DeleteProperty_RequestArgs = class DeleteProperty_RequestArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestWhereUniqueInput_1.Property_RequestWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestWhereUniqueInput_1.Property_RequestWhereUniqueInput)
], DeleteProperty_RequestArgs.prototype, "where", void 0);
DeleteProperty_RequestArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteProperty_RequestArgs);
exports.DeleteProperty_RequestArgs = DeleteProperty_RequestArgs;
