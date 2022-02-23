"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProperty_RequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Property_RequestOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/Property_RequestOrderByWithRelationAndSearchRelevanceInput");
const Property_RequestWhereInput_1 = require("../../../inputs/Property_RequestWhereInput");
const Property_RequestWhereUniqueInput_1 = require("../../../inputs/Property_RequestWhereUniqueInput");
let AggregateProperty_RequestArgs = class AggregateProperty_RequestArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestWhereInput_1.Property_RequestWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestWhereInput_1.Property_RequestWhereInput)
], AggregateProperty_RequestArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Property_RequestOrderByWithRelationAndSearchRelevanceInput_1.Property_RequestOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AggregateProperty_RequestArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestWhereUniqueInput_1.Property_RequestWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestWhereUniqueInput_1.Property_RequestWhereUniqueInput)
], AggregateProperty_RequestArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AggregateProperty_RequestArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AggregateProperty_RequestArgs.prototype, "skip", void 0);
AggregateProperty_RequestArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], AggregateProperty_RequestArgs);
exports.AggregateProperty_RequestArgs = AggregateProperty_RequestArgs;
