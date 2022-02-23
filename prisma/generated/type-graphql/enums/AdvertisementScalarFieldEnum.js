"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var AdvertisementScalarFieldEnum;
(function (AdvertisementScalarFieldEnum) {
    AdvertisementScalarFieldEnum["id"] = "id";
    AdvertisementScalarFieldEnum["isExpired"] = "isExpired";
    AdvertisementScalarFieldEnum["isPaused"] = "isPaused";
    AdvertisementScalarFieldEnum["createdAt"] = "createdAt";
    AdvertisementScalarFieldEnum["updatedAt"] = "updatedAt";
    AdvertisementScalarFieldEnum["userId"] = "userId";
    AdvertisementScalarFieldEnum["organizationId"] = "organizationId";
    AdvertisementScalarFieldEnum["propertyId"] = "propertyId";
})(AdvertisementScalarFieldEnum = exports.AdvertisementScalarFieldEnum || (exports.AdvertisementScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(AdvertisementScalarFieldEnum, {
    name: "AdvertisementScalarFieldEnum",
    description: undefined,
});
