"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property_RequestRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Property_RequestWhereInput_1 = require("../inputs/Property_RequestWhereInput");
let Property_RequestRelationFilter = class Property_RequestRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestWhereInput_1.Property_RequestWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestWhereInput_1.Property_RequestWhereInput)
], Property_RequestRelationFilter.prototype, "is", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestWhereInput_1.Property_RequestWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestWhereInput_1.Property_RequestWhereInput)
], Property_RequestRelationFilter.prototype, "isNot", void 0);
Property_RequestRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Property_RequestRelationFilter", {
        isAbstract: true
    })
], Property_RequestRelationFilter);
exports.Property_RequestRelationFilter = Property_RequestRelationFilter;
