"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var LocationOrderByRelevanceFieldEnum;
(function (LocationOrderByRelevanceFieldEnum) {
    LocationOrderByRelevanceFieldEnum["id"] = "id";
    LocationOrderByRelevanceFieldEnum["region"] = "region";
    LocationOrderByRelevanceFieldEnum["city"] = "city";
    LocationOrderByRelevanceFieldEnum["locationInfo"] = "locationInfo";
})(LocationOrderByRelevanceFieldEnum = exports.LocationOrderByRelevanceFieldEnum || (exports.LocationOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(LocationOrderByRelevanceFieldEnum, {
    name: "LocationOrderByRelevanceFieldEnum",
    description: undefined,
});
