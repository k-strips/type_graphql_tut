"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAddressArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AddressOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/AddressOrderByWithRelationAndSearchRelevanceInput");
const AddressWhereInput_1 = require("../../../inputs/AddressWhereInput");
const AddressWhereUniqueInput_1 = require("../../../inputs/AddressWhereUniqueInput");
let AggregateAddressArgs = class AggregateAddressArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressWhereInput_1.AddressWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AddressWhereInput_1.AddressWhereInput)
], AggregateAddressArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AddressOrderByWithRelationAndSearchRelevanceInput_1.AddressOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AggregateAddressArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressWhereUniqueInput_1.AddressWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AddressWhereUniqueInput_1.AddressWhereUniqueInput)
], AggregateAddressArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AggregateAddressArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AggregateAddressArgs.prototype, "skip", void 0);
AggregateAddressArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], AggregateAddressArgs);
exports.AggregateAddressArgs = AggregateAddressArgs;
