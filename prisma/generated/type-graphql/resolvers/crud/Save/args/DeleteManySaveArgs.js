"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManySaveArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SaveWhereInput_1 = require("../../../inputs/SaveWhereInput");
let DeleteManySaveArgs = class DeleteManySaveArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveWhereInput_1.SaveWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SaveWhereInput_1.SaveWhereInput)
], DeleteManySaveArgs.prototype, "where", void 0);
DeleteManySaveArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteManySaveArgs);
exports.DeleteManySaveArgs = DeleteManySaveArgs;
