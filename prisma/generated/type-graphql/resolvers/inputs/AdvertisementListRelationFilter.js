"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementWhereInput_1 = require("../inputs/AdvertisementWhereInput");
let AdvertisementListRelationFilter = class AdvertisementListRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementWhereInput_1.AdvertisementWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementWhereInput_1.AdvertisementWhereInput)
], AdvertisementListRelationFilter.prototype, "every", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementWhereInput_1.AdvertisementWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementWhereInput_1.AdvertisementWhereInput)
], AdvertisementListRelationFilter.prototype, "some", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementWhereInput_1.AdvertisementWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementWhereInput_1.AdvertisementWhereInput)
], AdvertisementListRelationFilter.prototype, "none", void 0);
AdvertisementListRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdvertisementListRelationFilter", {
        isAbstract: true
    })
], AdvertisementListRelationFilter);
exports.AdvertisementListRelationFilter = AdvertisementListRelationFilter;
