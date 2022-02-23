"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var AdvertisementOrderByRelevanceFieldEnum;
(function (AdvertisementOrderByRelevanceFieldEnum) {
    AdvertisementOrderByRelevanceFieldEnum["id"] = "id";
    AdvertisementOrderByRelevanceFieldEnum["userId"] = "userId";
    AdvertisementOrderByRelevanceFieldEnum["organizationId"] = "organizationId";
    AdvertisementOrderByRelevanceFieldEnum["propertyId"] = "propertyId";
})(AdvertisementOrderByRelevanceFieldEnum = exports.AdvertisementOrderByRelevanceFieldEnum || (exports.AdvertisementOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(AdvertisementOrderByRelevanceFieldEnum, {
    name: "AdvertisementOrderByRelevanceFieldEnum",
    description: undefined,
});
