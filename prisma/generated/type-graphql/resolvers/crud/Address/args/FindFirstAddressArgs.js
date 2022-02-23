"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstAddressArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AddressOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/AddressOrderByWithRelationAndSearchRelevanceInput");
const AddressWhereInput_1 = require("../../../inputs/AddressWhereInput");
const AddressWhereUniqueInput_1 = require("../../../inputs/AddressWhereUniqueInput");
const AddressScalarFieldEnum_1 = require("../../../../enums/AddressScalarFieldEnum");
let FindFirstAddressArgs = class FindFirstAddressArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressWhereInput_1.AddressWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AddressWhereInput_1.AddressWhereInput)
], FindFirstAddressArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AddressOrderByWithRelationAndSearchRelevanceInput_1.AddressOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstAddressArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressWhereUniqueInput_1.AddressWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AddressWhereUniqueInput_1.AddressWhereUniqueInput)
], FindFirstAddressArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstAddressArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstAddressArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AddressScalarFieldEnum_1.AddressScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstAddressArgs.prototype, "distinct", void 0);
FindFirstAddressArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindFirstAddressArgs);
exports.FindFirstAddressArgs = FindFirstAddressArgs;
