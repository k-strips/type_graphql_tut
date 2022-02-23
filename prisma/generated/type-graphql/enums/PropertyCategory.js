"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyCategory = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var PropertyCategory;
(function (PropertyCategory) {
    PropertyCategory["AGRICULTURAL_FARMLAND"] = "AGRICULTURAL_FARMLAND";
    PropertyCategory["COMMERCIAL"] = "COMMERCIAL";
    PropertyCategory["PARTIES_EVENT"] = "PARTIES_EVENT";
    PropertyCategory["RESIDENTIAL"] = "RESIDENTIAL";
})(PropertyCategory = exports.PropertyCategory || (exports.PropertyCategory = {}));
TypeGraphQL.registerEnumType(PropertyCategory, {
    name: "PropertyCategory",
    description: undefined,
});
