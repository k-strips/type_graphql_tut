"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var LocationScalarFieldEnum;
(function (LocationScalarFieldEnum) {
    LocationScalarFieldEnum["id"] = "id";
    LocationScalarFieldEnum["region"] = "region";
    LocationScalarFieldEnum["city"] = "city";
    LocationScalarFieldEnum["locationInfo"] = "locationInfo";
    LocationScalarFieldEnum["electricitySupplyRating"] = "electricitySupplyRating";
    LocationScalarFieldEnum["waterSupplyRating"] = "waterSupplyRating";
    LocationScalarFieldEnum["noiseLevelSupplyRating"] = "noiseLevelSupplyRating";
    LocationScalarFieldEnum["crimeSupplpyRating"] = "crimeSupplpyRating";
    LocationScalarFieldEnum["recreationalRating"] = "recreationalRating";
    LocationScalarFieldEnum["trafficRating"] = "trafficRating";
    LocationScalarFieldEnum["lat"] = "lat";
    LocationScalarFieldEnum["lon"] = "lon";
})(LocationScalarFieldEnum = exports.LocationScalarFieldEnum || (exports.LocationScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(LocationScalarFieldEnum, {
    name: "LocationScalarFieldEnum",
    description: undefined,
});
