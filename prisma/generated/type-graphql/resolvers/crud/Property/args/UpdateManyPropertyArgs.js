"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyPropertyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyUpdateManyMutationInput_1 = require("../../../inputs/PropertyUpdateManyMutationInput");
const PropertyWhereInput_1 = require("../../../inputs/PropertyWhereInput");
let UpdateManyPropertyArgs = class UpdateManyPropertyArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyUpdateManyMutationInput_1.PropertyUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PropertyUpdateManyMutationInput_1.PropertyUpdateManyMutationInput)
], UpdateManyPropertyArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyWhereInput_1.PropertyWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyWhereInput_1.PropertyWhereInput)
], UpdateManyPropertyArgs.prototype, "where", void 0);
UpdateManyPropertyArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateManyPropertyArgs);
exports.UpdateManyPropertyArgs = UpdateManyPropertyArgs;
