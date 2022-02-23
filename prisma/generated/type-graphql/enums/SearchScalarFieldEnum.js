"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var SearchScalarFieldEnum;
(function (SearchScalarFieldEnum) {
    SearchScalarFieldEnum["id"] = "id";
    SearchScalarFieldEnum["userId"] = "userId";
    SearchScalarFieldEnum["category"] = "category";
    SearchScalarFieldEnum["type"] = "type";
    SearchScalarFieldEnum["acquisition"] = "acquisition";
    SearchScalarFieldEnum["seating"] = "seating";
    SearchScalarFieldEnum["state"] = "state";
    SearchScalarFieldEnum["bedrooms"] = "bedrooms";
    SearchScalarFieldEnum["bathrooms"] = "bathrooms";
    SearchScalarFieldEnum["parkingCapacity"] = "parkingCapacity";
    SearchScalarFieldEnum["location"] = "location";
    SearchScalarFieldEnum["createdAt"] = "createdAt";
})(SearchScalarFieldEnum = exports.SearchScalarFieldEnum || (exports.SearchScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(SearchScalarFieldEnum, {
    name: "SearchScalarFieldEnum",
    description: undefined,
});
