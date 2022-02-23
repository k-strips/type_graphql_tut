"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePropertyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyWhereUniqueInput_1 = require("../../../inputs/PropertyWhereUniqueInput");
let DeletePropertyArgs = class DeletePropertyArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyWhereUniqueInput_1.PropertyWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PropertyWhereUniqueInput_1.PropertyWhereUniqueInput)
], DeletePropertyArgs.prototype, "where", void 0);
DeletePropertyArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeletePropertyArgs);
exports.DeletePropertyArgs = DeletePropertyArgs;
