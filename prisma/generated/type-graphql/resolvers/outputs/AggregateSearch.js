"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSearch = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SearchAvgAggregate_1 = require("../outputs/SearchAvgAggregate");
const SearchCountAggregate_1 = require("../outputs/SearchCountAggregate");
const SearchMaxAggregate_1 = require("../outputs/SearchMaxAggregate");
const SearchMinAggregate_1 = require("../outputs/SearchMinAggregate");
const SearchSumAggregate_1 = require("../outputs/SearchSumAggregate");
let AggregateSearch = class AggregateSearch {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SearchCountAggregate_1.SearchCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SearchCountAggregate_1.SearchCountAggregate)
], AggregateSearch.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SearchAvgAggregate_1.SearchAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SearchAvgAggregate_1.SearchAvgAggregate)
], AggregateSearch.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SearchSumAggregate_1.SearchSumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SearchSumAggregate_1.SearchSumAggregate)
], AggregateSearch.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SearchMinAggregate_1.SearchMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SearchMinAggregate_1.SearchMinAggregate)
], AggregateSearch.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SearchMaxAggregate_1.SearchMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SearchMaxAggregate_1.SearchMaxAggregate)
], AggregateSearch.prototype, "_max", void 0);
AggregateSearch = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AggregateSearch", {
        isAbstract: true
    })
], AggregateSearch);
exports.AggregateSearch = AggregateSearch;
