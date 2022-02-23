"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LocationRegionCityCompoundUniqueInput_1 = require("../inputs/LocationRegionCityCompoundUniqueInput");
let LocationWhereUniqueInput = class LocationWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationWhereUniqueInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationRegionCityCompoundUniqueInput_1.LocationRegionCityCompoundUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationRegionCityCompoundUniqueInput_1.LocationRegionCityCompoundUniqueInput)
], LocationWhereUniqueInput.prototype, "region_city", void 0);
LocationWhereUniqueInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LocationWhereUniqueInput", {
        isAbstract: true
    })
], LocationWhereUniqueInput);
exports.LocationWhereUniqueInput = LocationWhereUniqueInput;
