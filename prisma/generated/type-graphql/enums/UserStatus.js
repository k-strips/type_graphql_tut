"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStatus = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var UserStatus;
(function (UserStatus) {
    UserStatus["SEEKER"] = "SEEKER";
    UserStatus["PROPERTYOWNER"] = "PROPERTYOWNER";
    UserStatus["INVESTORS"] = "INVESTORS";
})(UserStatus = exports.UserStatus || (exports.UserStatus = {}));
TypeGraphQL.registerEnumType(UserStatus, {
    name: "UserStatus",
    description: undefined,
});
