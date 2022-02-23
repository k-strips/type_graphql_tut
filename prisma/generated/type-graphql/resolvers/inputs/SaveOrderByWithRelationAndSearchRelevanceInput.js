"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyOrderByWithRelationAndSearchRelevanceInput_1 = require("../inputs/PropertyOrderByWithRelationAndSearchRelevanceInput");
const SaveOrderByRelevanceInput_1 = require("../inputs/SaveOrderByRelevanceInput");
const UserOrderByWithRelationAndSearchRelevanceInput_1 = require("../inputs/UserOrderByWithRelationAndSearchRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SaveOrderByWithRelationAndSearchRelevanceInput = class SaveOrderByWithRelationAndSearchRelevanceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SaveOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SaveOrderByWithRelationAndSearchRelevanceInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserOrderByWithRelationAndSearchRelevanceInput_1.UserOrderByWithRelationAndSearchRelevanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserOrderByWithRelationAndSearchRelevanceInput_1.UserOrderByWithRelationAndSearchRelevanceInput)
], SaveOrderByWithRelationAndSearchRelevanceInput.prototype, "User", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SaveOrderByWithRelationAndSearchRelevanceInput.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyOrderByWithRelationAndSearchRelevanceInput_1.PropertyOrderByWithRelationAndSearchRelevanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyOrderByWithRelationAndSearchRelevanceInput_1.PropertyOrderByWithRelationAndSearchRelevanceInput)
], SaveOrderByWithRelationAndSearchRelevanceInput.prototype, "Property", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SaveOrderByWithRelationAndSearchRelevanceInput.prototype, "propertyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveOrderByRelevanceInput_1.SaveOrderByRelevanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SaveOrderByRelevanceInput_1.SaveOrderByRelevanceInput)
], SaveOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
SaveOrderByWithRelationAndSearchRelevanceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SaveOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], SaveOrderByWithRelationAndSearchRelevanceInput);
exports.SaveOrderByWithRelationAndSearchRelevanceInput = SaveOrderByWithRelationAndSearchRelevanceInput;
