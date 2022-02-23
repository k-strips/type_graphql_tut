"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var SearchOrderByRelevanceFieldEnum;
(function (SearchOrderByRelevanceFieldEnum) {
    SearchOrderByRelevanceFieldEnum["id"] = "id";
    SearchOrderByRelevanceFieldEnum["userId"] = "userId";
    SearchOrderByRelevanceFieldEnum["location"] = "location";
})(SearchOrderByRelevanceFieldEnum = exports.SearchOrderByRelevanceFieldEnum || (exports.SearchOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(SearchOrderByRelevanceFieldEnum, {
    name: "SearchOrderByRelevanceFieldEnum",
    description: undefined,
});
