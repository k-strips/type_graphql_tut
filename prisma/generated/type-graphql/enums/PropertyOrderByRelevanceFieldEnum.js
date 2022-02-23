"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var PropertyOrderByRelevanceFieldEnum;
(function (PropertyOrderByRelevanceFieldEnum) {
    PropertyOrderByRelevanceFieldEnum["id"] = "id";
    PropertyOrderByRelevanceFieldEnum["images"] = "images";
    PropertyOrderByRelevanceFieldEnum["amenities"] = "amenities";
    PropertyOrderByRelevanceFieldEnum["description"] = "description";
    PropertyOrderByRelevanceFieldEnum["source"] = "source";
    PropertyOrderByRelevanceFieldEnum["region"] = "region";
    PropertyOrderByRelevanceFieldEnum["city"] = "city";
    PropertyOrderByRelevanceFieldEnum["town"] = "town";
    PropertyOrderByRelevanceFieldEnum["streetName"] = "streetName";
    PropertyOrderByRelevanceFieldEnum["digitalAddress"] = "digitalAddress";
    PropertyOrderByRelevanceFieldEnum["locationDesc"] = "locationDesc";
    PropertyOrderByRelevanceFieldEnum["organizationId"] = "organizationId";
    PropertyOrderByRelevanceFieldEnum["userId"] = "userId";
})(PropertyOrderByRelevanceFieldEnum = exports.PropertyOrderByRelevanceFieldEnum || (exports.PropertyOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(PropertyOrderByRelevanceFieldEnum, {
    name: "PropertyOrderByRelevanceFieldEnum",
    description: undefined,
});
