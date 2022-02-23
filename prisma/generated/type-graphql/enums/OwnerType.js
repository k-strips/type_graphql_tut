"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OwnerType = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var OwnerType;
(function (OwnerType) {
    OwnerType["INDIVIDUAL"] = "INDIVIDUAL";
    OwnerType["AGENT"] = "AGENT";
    OwnerType["DEVELOPER"] = "DEVELOPER";
})(OwnerType = exports.OwnerType || (exports.OwnerType = {}));
TypeGraphQL.registerEnumType(OwnerType, {
    name: "OwnerType",
    description: undefined,
});
