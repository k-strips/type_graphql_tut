"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var AddressScalarFieldEnum;
(function (AddressScalarFieldEnum) {
    AddressScalarFieldEnum["id"] = "id";
    AddressScalarFieldEnum["email"] = "email";
    AddressScalarFieldEnum["mobile"] = "mobile";
    AddressScalarFieldEnum["work"] = "work";
    AddressScalarFieldEnum["office"] = "office";
    AddressScalarFieldEnum["createdAt"] = "createdAt";
    AddressScalarFieldEnum["updatedAt"] = "updatedAt";
    AddressScalarFieldEnum["organizationId"] = "organizationId";
    AddressScalarFieldEnum["userId"] = "userId";
})(AddressScalarFieldEnum = exports.AddressScalarFieldEnum || (exports.AddressScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(AddressScalarFieldEnum, {
    name: "AddressScalarFieldEnum",
    description: undefined,
});
