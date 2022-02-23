"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LocationOrderByRelevanceFieldEnum_1 = require("../../enums/LocationOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let LocationOrderByRelevanceInput = class LocationOrderByRelevanceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LocationOrderByRelevanceFieldEnum_1.LocationOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], LocationOrderByRelevanceInput.prototype, "fields", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationOrderByRelevanceInput.prototype, "sort", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationOrderByRelevanceInput.prototype, "search", void 0);
LocationOrderByRelevanceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LocationOrderByRelevanceInput", {
        isAbstract: true
    })
], LocationOrderByRelevanceInput);
exports.LocationOrderByRelevanceInput = LocationOrderByRelevanceInput;
