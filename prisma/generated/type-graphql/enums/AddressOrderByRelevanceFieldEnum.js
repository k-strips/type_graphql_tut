"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var AddressOrderByRelevanceFieldEnum;
(function (AddressOrderByRelevanceFieldEnum) {
    AddressOrderByRelevanceFieldEnum["id"] = "id";
    AddressOrderByRelevanceFieldEnum["email"] = "email";
    AddressOrderByRelevanceFieldEnum["mobile"] = "mobile";
    AddressOrderByRelevanceFieldEnum["work"] = "work";
    AddressOrderByRelevanceFieldEnum["office"] = "office";
    AddressOrderByRelevanceFieldEnum["organizationId"] = "organizationId";
    AddressOrderByRelevanceFieldEnum["userId"] = "userId";
})(AddressOrderByRelevanceFieldEnum = exports.AddressOrderByRelevanceFieldEnum || (exports.AddressOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(AddressOrderByRelevanceFieldEnum, {
    name: "AddressOrderByRelevanceFieldEnum",
    description: undefined,
});
