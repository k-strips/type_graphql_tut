"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementWhereInput_1 = require("../inputs/AdvertisementWhereInput");
let AdvertisementRelationFilter = class AdvertisementRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementWhereInput_1.AdvertisementWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementWhereInput_1.AdvertisementWhereInput)
], AdvertisementRelationFilter.prototype, "is", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementWhereInput_1.AdvertisementWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementWhereInput_1.AdvertisementWhereInput)
], AdvertisementRelationFilter.prototype, "isNot", void 0);
AdvertisementRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdvertisementRelationFilter", {
        isAbstract: true
    })
], AdvertisementRelationFilter);
exports.AdvertisementRelationFilter = AdvertisementRelationFilter;
