"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSaveArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SaveUpdateInput_1 = require("../../../inputs/SaveUpdateInput");
const SaveWhereUniqueInput_1 = require("../../../inputs/SaveWhereUniqueInput");
let UpdateSaveArgs = class UpdateSaveArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveUpdateInput_1.SaveUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SaveUpdateInput_1.SaveUpdateInput)
], UpdateSaveArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveWhereUniqueInput_1.SaveWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SaveWhereUniqueInput_1.SaveWhereUniqueInput)
], UpdateSaveArgs.prototype, "where", void 0);
UpdateSaveArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateSaveArgs);
exports.UpdateSaveArgs = UpdateSaveArgs;
