"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniquePropertyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyWhereUniqueInput_1 = require("../../../inputs/PropertyWhereUniqueInput");
let FindUniquePropertyArgs = class FindUniquePropertyArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyWhereUniqueInput_1.PropertyWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PropertyWhereUniqueInput_1.PropertyWhereUniqueInput)
], FindUniquePropertyArgs.prototype, "where", void 0);
FindUniquePropertyArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindUniquePropertyArgs);
exports.FindUniquePropertyArgs = FindUniquePropertyArgs;
