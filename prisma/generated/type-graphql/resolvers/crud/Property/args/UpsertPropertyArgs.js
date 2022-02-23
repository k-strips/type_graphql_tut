"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertPropertyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyCreateInput_1 = require("../../../inputs/PropertyCreateInput");
const PropertyUpdateInput_1 = require("../../../inputs/PropertyUpdateInput");
const PropertyWhereUniqueInput_1 = require("../../../inputs/PropertyWhereUniqueInput");
let UpsertPropertyArgs = class UpsertPropertyArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyWhereUniqueInput_1.PropertyWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PropertyWhereUniqueInput_1.PropertyWhereUniqueInput)
], UpsertPropertyArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateInput_1.PropertyCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateInput_1.PropertyCreateInput)
], UpsertPropertyArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyUpdateInput_1.PropertyUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PropertyUpdateInput_1.PropertyUpdateInput)
], UpsertPropertyArgs.prototype, "update", void 0);
UpsertPropertyArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpsertPropertyArgs);
exports.UpsertPropertyArgs = UpsertPropertyArgs;
