"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property_RequestListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Property_RequestWhereInput_1 = require("../inputs/Property_RequestWhereInput");
let Property_RequestListRelationFilter = class Property_RequestListRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestWhereInput_1.Property_RequestWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestWhereInput_1.Property_RequestWhereInput)
], Property_RequestListRelationFilter.prototype, "every", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestWhereInput_1.Property_RequestWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestWhereInput_1.Property_RequestWhereInput)
], Property_RequestListRelationFilter.prototype, "some", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestWhereInput_1.Property_RequestWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestWhereInput_1.Property_RequestWhereInput)
], Property_RequestListRelationFilter.prototype, "none", void 0);
Property_RequestListRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Property_RequestListRelationFilter", {
        isAbstract: true
    })
], Property_RequestListRelationFilter);
exports.Property_RequestListRelationFilter = Property_RequestListRelationFilter;
