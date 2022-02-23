"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SearchAvgAggregate_1 = require("../outputs/SearchAvgAggregate");
const SearchCountAggregate_1 = require("../outputs/SearchCountAggregate");
const SearchMaxAggregate_1 = require("../outputs/SearchMaxAggregate");
const SearchMinAggregate_1 = require("../outputs/SearchMinAggregate");
const SearchSumAggregate_1 = require("../outputs/SearchSumAggregate");
const AcquisitionType_1 = require("../../enums/AcquisitionType");
const PropertyCategory_1 = require("../../enums/PropertyCategory");
const PropertyState_1 = require("../../enums/PropertyState");
const PropertyType_1 = require("../../enums/PropertyType");
let SearchGroupBy = class SearchGroupBy {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SearchGroupBy.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SearchGroupBy.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCategory_1.PropertyCategory, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SearchGroupBy.prototype, "category", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyType_1.PropertyType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SearchGroupBy.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AcquisitionType_1.AcquisitionType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SearchGroupBy.prototype, "acquisition", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SearchGroupBy.prototype, "seating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyState_1.PropertyState, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SearchGroupBy.prototype, "state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SearchGroupBy.prototype, "bedrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SearchGroupBy.prototype, "bathrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SearchGroupBy.prototype, "parkingCapacity", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SearchGroupBy.prototype, "location", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], SearchGroupBy.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SearchCountAggregate_1.SearchCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SearchCountAggregate_1.SearchCountAggregate)
], SearchGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SearchAvgAggregate_1.SearchAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SearchAvgAggregate_1.SearchAvgAggregate)
], SearchGroupBy.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SearchSumAggregate_1.SearchSumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SearchSumAggregate_1.SearchSumAggregate)
], SearchGroupBy.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SearchMinAggregate_1.SearchMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SearchMinAggregate_1.SearchMinAggregate)
], SearchGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SearchMaxAggregate_1.SearchMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SearchMaxAggregate_1.SearchMaxAggregate)
], SearchGroupBy.prototype, "_max", void 0);
SearchGroupBy = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("SearchGroupBy", {
        isAbstract: true
    })
], SearchGroupBy);
exports.SearchGroupBy = SearchGroupBy;
