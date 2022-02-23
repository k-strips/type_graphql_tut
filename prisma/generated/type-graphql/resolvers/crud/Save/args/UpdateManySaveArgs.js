"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManySaveArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SaveUpdateManyMutationInput_1 = require("../../../inputs/SaveUpdateManyMutationInput");
const SaveWhereInput_1 = require("../../../inputs/SaveWhereInput");
let UpdateManySaveArgs = class UpdateManySaveArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveUpdateManyMutationInput_1.SaveUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SaveUpdateManyMutationInput_1.SaveUpdateManyMutationInput)
], UpdateManySaveArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveWhereInput_1.SaveWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SaveWhereInput_1.SaveWhereInput)
], UpdateManySaveArgs.prototype, "where", void 0);
UpdateManySaveArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateManySaveArgs);
exports.UpdateManySaveArgs = UpdateManySaveArgs;
