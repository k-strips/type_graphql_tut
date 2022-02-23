"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueUserArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserWhereUniqueInput_1 = require("../../../inputs/UserWhereUniqueInput");
let FindUniqueUserArgs = class FindUniqueUserArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], FindUniqueUserArgs.prototype, "where", void 0);
FindUniqueUserArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindUniqueUserArgs);
exports.FindUniqueUserArgs = FindUniqueUserArgs;
