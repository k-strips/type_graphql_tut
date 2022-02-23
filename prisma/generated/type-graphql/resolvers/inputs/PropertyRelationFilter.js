"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyWhereInput_1 = require("../inputs/PropertyWhereInput");
let PropertyRelationFilter = class PropertyRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyWhereInput_1.PropertyWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyWhereInput_1.PropertyWhereInput)
], PropertyRelationFilter.prototype, "is", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyWhereInput_1.PropertyWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyWhereInput_1.PropertyWhereInput)
], PropertyRelationFilter.prototype, "isNot", void 0);
PropertyRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PropertyRelationFilter", {
        isAbstract: true
    })
], PropertyRelationFilter);
exports.PropertyRelationFilter = PropertyRelationFilter;
