"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateUserArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/UserOrderByWithRelationAndSearchRelevanceInput");
const UserWhereInput_1 = require("../../../inputs/UserWhereInput");
const UserWhereUniqueInput_1 = require("../../../inputs/UserWhereUniqueInput");
let AggregateUserArgs = class AggregateUserArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereInput_1.UserWhereInput)
], AggregateUserArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [UserOrderByWithRelationAndSearchRelevanceInput_1.UserOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AggregateUserArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], AggregateUserArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AggregateUserArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AggregateUserArgs.prototype, "skip", void 0);
AggregateUserArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], AggregateUserArgs);
exports.AggregateUserArgs = AggregateUserArgs;
