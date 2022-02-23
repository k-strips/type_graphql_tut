"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcquisitionType = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var AcquisitionType;
(function (AcquisitionType) {
    AcquisitionType["BUY"] = "BUY";
    AcquisitionType["RENT"] = "RENT";
    AcquisitionType["SHORT_STAY"] = "SHORT_STAY";
    AcquisitionType["LONG_STAY"] = "LONG_STAY";
})(AcquisitionType = exports.AcquisitionType || (exports.AcquisitionType = {}));
TypeGraphQL.registerEnumType(AcquisitionType, {
    name: "AcquisitionType",
    description: undefined,
});
