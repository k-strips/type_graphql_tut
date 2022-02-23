"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var SaveScalarFieldEnum;
(function (SaveScalarFieldEnum) {
    SaveScalarFieldEnum["id"] = "id";
    SaveScalarFieldEnum["createdAt"] = "createdAt";
    SaveScalarFieldEnum["userId"] = "userId";
    SaveScalarFieldEnum["propertyId"] = "propertyId";
})(SaveScalarFieldEnum = exports.SaveScalarFieldEnum || (exports.SaveScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(SaveScalarFieldEnum, {
    name: "SaveScalarFieldEnum",
    description: undefined,
});
