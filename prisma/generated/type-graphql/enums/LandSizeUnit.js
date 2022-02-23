"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandSizeUnit = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var LandSizeUnit;
(function (LandSizeUnit) {
    LandSizeUnit["ACRE"] = "ACRE";
    LandSizeUnit["PLOT"] = "PLOT";
    LandSizeUnit["HECTARE"] = "HECTARE";
    LandSizeUnit["SQUAREMETER"] = "SQUAREMETER";
})(LandSizeUnit = exports.LandSizeUnit || (exports.LandSizeUnit = {}));
TypeGraphQL.registerEnumType(LandSizeUnit, {
    name: "LandSizeUnit",
    description: undefined,
});
