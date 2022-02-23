"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var PriceOrderByRelevanceFieldEnum;
(function (PriceOrderByRelevanceFieldEnum) {
    PriceOrderByRelevanceFieldEnum["id"] = "id";
    PriceOrderByRelevanceFieldEnum["propertyId"] = "propertyId";
    PriceOrderByRelevanceFieldEnum["advertisementId"] = "advertisementId";
    PriceOrderByRelevanceFieldEnum["property_RequestId"] = "property_RequestId";
})(PriceOrderByRelevanceFieldEnum = exports.PriceOrderByRelevanceFieldEnum || (exports.PriceOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(PriceOrderByRelevanceFieldEnum, {
    name: "PriceOrderByRelevanceFieldEnum",
    description: undefined,
});
