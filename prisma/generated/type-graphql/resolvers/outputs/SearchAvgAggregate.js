"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let SearchAvgAggregate = class SearchAvgAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SearchAvgAggregate.prototype, "seating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SearchAvgAggregate.prototype, "bedrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SearchAvgAggregate.prototype, "bathrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SearchAvgAggregate.prototype, "parkingCapacity", void 0);
SearchAvgAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("SearchAvgAggregate", {
        isAbstract: true
    })
], SearchAvgAggregate);
exports.SearchAvgAggregate = SearchAvgAggregate;
