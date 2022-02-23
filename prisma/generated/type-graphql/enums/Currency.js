"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var Currency;
(function (Currency) {
    Currency["GHS"] = "GHS";
    Currency["USD"] = "USD";
})(Currency = exports.Currency || (exports.Currency = {}));
TypeGraphQL.registerEnumType(Currency, {
    name: "Currency",
    description: undefined,
});
