"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Search = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AcquisitionType_1 = require("../enums/AcquisitionType");
const PropertyCategory_1 = require("../enums/PropertyCategory");
const PropertyState_1 = require("../enums/PropertyState");
const PropertyType_1 = require("../enums/PropertyType");
let Search = class Search {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Search.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Search.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCategory_1.PropertyCategory, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Search.prototype, "category", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyType_1.PropertyType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Search.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AcquisitionType_1.AcquisitionType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Search.prototype, "acquisition", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Search.prototype, "seating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyState_1.PropertyState, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Search.prototype, "state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Search.prototype, "bedrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Search.prototype, "bathrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Search.prototype, "parkingCapacity", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Search.prototype, "location", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], Search.prototype, "createdAt", void 0);
Search = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("Search", {
        isAbstract: true
    })
], Search);
exports.Search = Search;
