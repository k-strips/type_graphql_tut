"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
const UserOrderByRelevanceFieldEnum_1 = require("../../enums/UserOrderByRelevanceFieldEnum");
let UserOrderByRelevanceInput = class UserOrderByRelevanceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [UserOrderByRelevanceFieldEnum_1.UserOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], UserOrderByRelevanceInput.prototype, "fields", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserOrderByRelevanceInput.prototype, "sort", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserOrderByRelevanceInput.prototype, "search", void 0);
UserOrderByRelevanceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserOrderByRelevanceInput", {
        isAbstract: true
    })
], UserOrderByRelevanceInput);
exports.UserOrderByRelevanceInput = UserOrderByRelevanceInput;
