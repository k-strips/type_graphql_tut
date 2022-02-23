"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AcquisitionType_1 = require("../../enums/AcquisitionType");
const PropertyCategory_1 = require("../../enums/PropertyCategory");
const PropertyState_1 = require("../../enums/PropertyState");
const PropertyType_1 = require("../../enums/PropertyType");
let SearchCreateManyInput = class SearchCreateManyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SearchCreateManyInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SearchCreateManyInput.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCategory_1.PropertyCategory, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SearchCreateManyInput.prototype, "category", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyType_1.PropertyType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SearchCreateManyInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AcquisitionType_1.AcquisitionType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SearchCreateManyInput.prototype, "acquisition", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SearchCreateManyInput.prototype, "seating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyState_1.PropertyState, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SearchCreateManyInput.prototype, "state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SearchCreateManyInput.prototype, "bedrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SearchCreateManyInput.prototype, "bathrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SearchCreateManyInput.prototype, "parkingCapacity", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SearchCreateManyInput.prototype, "location", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], SearchCreateManyInput.prototype, "createdAt", void 0);
SearchCreateManyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SearchCreateManyInput", {
        isAbstract: true
    })
], SearchCreateManyInput);
exports.SearchCreateManyInput = SearchCreateManyInput;
