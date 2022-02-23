"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandSizeRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LandSizeWhereInput_1 = require("../inputs/LandSizeWhereInput");
let LandSizeRelationFilter = class LandSizeRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeWhereInput_1.LandSizeWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeWhereInput_1.LandSizeWhereInput)
], LandSizeRelationFilter.prototype, "is", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeWhereInput_1.LandSizeWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeWhereInput_1.LandSizeWhereInput)
], LandSizeRelationFilter.prototype, "isNot", void 0);
LandSizeRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LandSizeRelationFilter", {
        isAbstract: true
    })
], LandSizeRelationFilter);
exports.LandSizeRelationFilter = LandSizeRelationFilter;
