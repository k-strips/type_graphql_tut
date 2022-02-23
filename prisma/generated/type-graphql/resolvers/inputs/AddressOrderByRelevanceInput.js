"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AddressOrderByRelevanceFieldEnum_1 = require("../../enums/AddressOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let AddressOrderByRelevanceInput = class AddressOrderByRelevanceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AddressOrderByRelevanceFieldEnum_1.AddressOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AddressOrderByRelevanceInput.prototype, "fields", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AddressOrderByRelevanceInput.prototype, "sort", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AddressOrderByRelevanceInput.prototype, "search", void 0);
AddressOrderByRelevanceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AddressOrderByRelevanceInput", {
        isAbstract: true
    })
], AddressOrderByRelevanceInput);
exports.AddressOrderByRelevanceInput = AddressOrderByRelevanceInput;
