"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property_RequestScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var Property_RequestScalarFieldEnum;
(function (Property_RequestScalarFieldEnum) {
    Property_RequestScalarFieldEnum["id"] = "id";
    Property_RequestScalarFieldEnum["type"] = "type";
    Property_RequestScalarFieldEnum["acquisition"] = "acquisition";
    Property_RequestScalarFieldEnum["state"] = "state";
    Property_RequestScalarFieldEnum["amenities"] = "amenities";
    Property_RequestScalarFieldEnum["parkingCapacity"] = "parkingCapacity";
    Property_RequestScalarFieldEnum["seating"] = "seating";
    Property_RequestScalarFieldEnum["bedrooms"] = "bedrooms";
    Property_RequestScalarFieldEnum["bathrooms"] = "bathrooms";
    Property_RequestScalarFieldEnum["additionalInfo"] = "additionalInfo";
    Property_RequestScalarFieldEnum["region"] = "region";
    Property_RequestScalarFieldEnum["city"] = "city";
    Property_RequestScalarFieldEnum["town"] = "town";
    Property_RequestScalarFieldEnum["createdAt"] = "createdAt";
    Property_RequestScalarFieldEnum["updatedAt"] = "updatedAt";
    Property_RequestScalarFieldEnum["userId"] = "userId";
})(Property_RequestScalarFieldEnum = exports.Property_RequestScalarFieldEnum || (exports.Property_RequestScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(Property_RequestScalarFieldEnum, {
    name: "Property_RequestScalarFieldEnum",
    description: undefined,
});
