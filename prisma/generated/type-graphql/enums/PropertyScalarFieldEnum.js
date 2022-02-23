"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var PropertyScalarFieldEnum;
(function (PropertyScalarFieldEnum) {
    PropertyScalarFieldEnum["id"] = "id";
    PropertyScalarFieldEnum["type"] = "type";
    PropertyScalarFieldEnum["acquisition"] = "acquisition";
    PropertyScalarFieldEnum["state"] = "state";
    PropertyScalarFieldEnum["images"] = "images";
    PropertyScalarFieldEnum["amenities"] = "amenities";
    PropertyScalarFieldEnum["parkingCapacity"] = "parkingCapacity";
    PropertyScalarFieldEnum["seating"] = "seating";
    PropertyScalarFieldEnum["bedrooms"] = "bedrooms";
    PropertyScalarFieldEnum["bathrooms"] = "bathrooms";
    PropertyScalarFieldEnum["description"] = "description";
    PropertyScalarFieldEnum["views"] = "views";
    PropertyScalarFieldEnum["source"] = "source";
    PropertyScalarFieldEnum["region"] = "region";
    PropertyScalarFieldEnum["city"] = "city";
    PropertyScalarFieldEnum["town"] = "town";
    PropertyScalarFieldEnum["streetName"] = "streetName";
    PropertyScalarFieldEnum["digitalAddress"] = "digitalAddress";
    PropertyScalarFieldEnum["locationDesc"] = "locationDesc";
    PropertyScalarFieldEnum["lat"] = "lat";
    PropertyScalarFieldEnum["lon"] = "lon";
    PropertyScalarFieldEnum["isDeleted"] = "isDeleted";
    PropertyScalarFieldEnum["createdAt"] = "createdAt";
    PropertyScalarFieldEnum["updatedAt"] = "updatedAt";
    PropertyScalarFieldEnum["organizationId"] = "organizationId";
    PropertyScalarFieldEnum["userId"] = "userId";
})(PropertyScalarFieldEnum = exports.PropertyScalarFieldEnum || (exports.PropertyScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(PropertyScalarFieldEnum, {
    name: "PropertyScalarFieldEnum",
    description: undefined,
});
