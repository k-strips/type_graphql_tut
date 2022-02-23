"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var PriceScalarFieldEnum;
(function (PriceScalarFieldEnum) {
    PriceScalarFieldEnum["id"] = "id";
    PriceScalarFieldEnum["figure"] = "figure";
    PriceScalarFieldEnum["currency"] = "currency";
    PriceScalarFieldEnum["duration"] = "duration";
    PriceScalarFieldEnum["propertyId"] = "propertyId";
    PriceScalarFieldEnum["advertisementId"] = "advertisementId";
    PriceScalarFieldEnum["property_RequestId"] = "property_RequestId";
})(PriceScalarFieldEnum = exports.PriceScalarFieldEnum || (exports.PriceScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(PriceScalarFieldEnum, {
    name: "PriceScalarFieldEnum",
    description: undefined,
});
