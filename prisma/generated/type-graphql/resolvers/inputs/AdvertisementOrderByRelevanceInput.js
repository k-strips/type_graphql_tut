"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementOrderByRelevanceFieldEnum_1 = require("../../enums/AdvertisementOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let AdvertisementOrderByRelevanceInput = class AdvertisementOrderByRelevanceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementOrderByRelevanceFieldEnum_1.AdvertisementOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AdvertisementOrderByRelevanceInput.prototype, "fields", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdvertisementOrderByRelevanceInput.prototype, "sort", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdvertisementOrderByRelevanceInput.prototype, "search", void 0);
AdvertisementOrderByRelevanceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdvertisementOrderByRelevanceInput", {
        isAbstract: true
    })
], AdvertisementOrderByRelevanceInput);
exports.AdvertisementOrderByRelevanceInput = AdvertisementOrderByRelevanceInput;
