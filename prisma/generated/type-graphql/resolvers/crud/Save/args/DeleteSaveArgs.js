"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSaveArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SaveWhereUniqueInput_1 = require("../../../inputs/SaveWhereUniqueInput");
let DeleteSaveArgs = class DeleteSaveArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveWhereUniqueInput_1.SaveWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SaveWhereUniqueInput_1.SaveWhereUniqueInput)
], DeleteSaveArgs.prototype, "where", void 0);
DeleteSaveArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteSaveArgs);
exports.DeleteSaveArgs = DeleteSaveArgs;
