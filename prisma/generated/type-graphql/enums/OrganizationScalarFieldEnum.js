"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var OrganizationScalarFieldEnum;
(function (OrganizationScalarFieldEnum) {
    OrganizationScalarFieldEnum["id"] = "id";
    OrganizationScalarFieldEnum["title"] = "title";
    OrganizationScalarFieldEnum["isVerified"] = "isVerified";
    OrganizationScalarFieldEnum["isRegistrated"] = "isRegistrated";
    OrganizationScalarFieldEnum["isDeleted"] = "isDeleted";
    OrganizationScalarFieldEnum["createdAt"] = "createdAt";
    OrganizationScalarFieldEnum["updatedAt"] = "updatedAt";
})(OrganizationScalarFieldEnum = exports.OrganizationScalarFieldEnum || (exports.OrganizationScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(OrganizationScalarFieldEnum, {
    name: "OrganizationScalarFieldEnum",
    description: undefined,
});
