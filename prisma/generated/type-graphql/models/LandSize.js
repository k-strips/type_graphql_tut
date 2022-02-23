"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandSize = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LandSizeUnit_1 = require("../enums/LandSizeUnit");
let LandSize = class LandSize {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSize.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], LandSize.prototype, "measurement", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeUnit_1.LandSizeUnit, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSize.prototype, "unit", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSize.prototype, "propertyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSize.prototype, "property_RequestId", void 0);
LandSize = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("LandSize", {
        isAbstract: true
    })
], LandSize);
exports.LandSize = LandSize;
