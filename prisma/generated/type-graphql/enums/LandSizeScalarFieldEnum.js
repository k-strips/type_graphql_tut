"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandSizeScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var LandSizeScalarFieldEnum;
(function (LandSizeScalarFieldEnum) {
    LandSizeScalarFieldEnum["id"] = "id";
    LandSizeScalarFieldEnum["measurement"] = "measurement";
    LandSizeScalarFieldEnum["unit"] = "unit";
    LandSizeScalarFieldEnum["propertyId"] = "propertyId";
    LandSizeScalarFieldEnum["property_RequestId"] = "property_RequestId";
})(LandSizeScalarFieldEnum = exports.LandSizeScalarFieldEnum || (exports.LandSizeScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(LandSizeScalarFieldEnum, {
    name: "LandSizeScalarFieldEnum",
    description: undefined,
});
