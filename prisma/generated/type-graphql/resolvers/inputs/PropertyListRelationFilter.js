"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyWhereInput_1 = require("../inputs/PropertyWhereInput");
let PropertyListRelationFilter = class PropertyListRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyWhereInput_1.PropertyWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyWhereInput_1.PropertyWhereInput)
], PropertyListRelationFilter.prototype, "every", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyWhereInput_1.PropertyWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyWhereInput_1.PropertyWhereInput)
], PropertyListRelationFilter.prototype, "some", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyWhereInput_1.PropertyWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyWhereInput_1.PropertyWhereInput)
], PropertyListRelationFilter.prototype, "none", void 0);
PropertyListRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PropertyListRelationFilter", {
        isAbstract: true
    })
], PropertyListRelationFilter);
exports.PropertyListRelationFilter = PropertyListRelationFilter;
