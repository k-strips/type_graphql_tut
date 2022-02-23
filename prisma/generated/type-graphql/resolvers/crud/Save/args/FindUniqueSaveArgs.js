"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSaveArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SaveWhereUniqueInput_1 = require("../../../inputs/SaveWhereUniqueInput");
let FindUniqueSaveArgs = class FindUniqueSaveArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveWhereUniqueInput_1.SaveWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SaveWhereUniqueInput_1.SaveWhereUniqueInput)
], FindUniqueSaveArgs.prototype, "where", void 0);
FindUniqueSaveArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindUniqueSaveArgs);
exports.FindUniqueSaveArgs = FindUniqueSaveArgs;
