"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyPropertyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyWhereInput_1 = require("../../../inputs/PropertyWhereInput");
let DeleteManyPropertyArgs = class DeleteManyPropertyArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyWhereInput_1.PropertyWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyWhereInput_1.PropertyWhereInput)
], DeleteManyPropertyArgs.prototype, "where", void 0);
DeleteManyPropertyArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteManyPropertyArgs);
exports.DeleteManyPropertyArgs = DeleteManyPropertyArgs;
