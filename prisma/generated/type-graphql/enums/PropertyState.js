"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyState = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var PropertyState;
(function (PropertyState) {
    PropertyState["FURNISHED"] = "FURNISHED";
    PropertyState["NOT_FURNISHED"] = "NOT_FURNISHED";
    PropertyState["PARTLY_FURNISHED"] = "PARTLY_FURNISHED";
})(PropertyState = exports.PropertyState || (exports.PropertyState = {}));
TypeGraphQL.registerEnumType(PropertyState, {
    name: "PropertyState",
    description: undefined,
});
