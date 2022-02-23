"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var UserOrderByRelevanceFieldEnum;
(function (UserOrderByRelevanceFieldEnum) {
    UserOrderByRelevanceFieldEnum["id"] = "id";
    UserOrderByRelevanceFieldEnum["firstName"] = "firstName";
    UserOrderByRelevanceFieldEnum["lastName"] = "lastName";
    UserOrderByRelevanceFieldEnum["middleName"] = "middleName";
    UserOrderByRelevanceFieldEnum["organizationId"] = "organizationId";
})(UserOrderByRelevanceFieldEnum = exports.UserOrderByRelevanceFieldEnum || (exports.UserOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(UserOrderByRelevanceFieldEnum, {
    name: "UserOrderByRelevanceFieldEnum",
    description: undefined,
});
