"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationRegionCityCompoundUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let LocationRegionCityCompoundUniqueInput = class LocationRegionCityCompoundUniqueInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationRegionCityCompoundUniqueInput.prototype, "region", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationRegionCityCompoundUniqueInput.prototype, "city", void 0);
LocationRegionCityCompoundUniqueInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LocationRegionCityCompoundUniqueInput", {
        isAbstract: true
    })
], LocationRegionCityCompoundUniqueInput);
exports.LocationRegionCityCompoundUniqueInput = LocationRegionCityCompoundUniqueInput;
