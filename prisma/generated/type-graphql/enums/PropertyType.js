"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyType = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var PropertyType;
(function (PropertyType) {
    PropertyType["FISH_FARM"] = "FISH_FARM";
    PropertyType["CROP_FARM"] = "CROP_FARM";
    PropertyType["LIVESTOCK_FARM"] = "LIVESTOCK_FARM";
    PropertyType["RETAIL"] = "RETAIL";
    PropertyType["OFFICE"] = "OFFICE";
    PropertyType["BANKING"] = "BANKING";
    PropertyType["LEISURE"] = "LEISURE";
    PropertyType["HEALTHCARE"] = "HEALTHCARE";
    PropertyType["HOTEL"] = "HOTEL";
    PropertyType["SHOP"] = "SHOP";
    PropertyType["SHIPPING_CONTAINER"] = "SHIPPING_CONTAINER";
    PropertyType["INDOOR"] = "INDOOR";
    PropertyType["BANQUET_HALL"] = "BANQUET_HALL";
    PropertyType["BALLROOM"] = "BALLROOM";
    PropertyType["COMMUNITY_CENTER"] = "COMMUNITY_CENTER";
    PropertyType["CONFERENCE_ROOMS"] = "CONFERENCE_ROOMS";
    PropertyType["hOTELS"] = "hOTELS";
    PropertyType["NIGHT_CLUBS"] = "NIGHT_CLUBS";
    PropertyType["GARDENS"] = "GARDENS";
    PropertyType["CHURCH"] = "CHURCH";
    PropertyType["STADIA"] = "STADIA";
    PropertyType["THEATERS"] = "THEATERS";
    PropertyType["HOUSE"] = "HOUSE";
    PropertyType["NEW_DEVELOPMENT"] = "NEW_DEVELOPMENT";
    PropertyType["BUNGALOW"] = "BUNGALOW";
    PropertyType["APARTMENT"] = "APARTMENT";
    PropertyType["STUDION"] = "STUDION";
    PropertyType["PENTHOUSE"] = "PENTHOUSE";
    PropertyType["BUILDING_PLOT"] = "BUILDING_PLOT";
})(PropertyType = exports.PropertyType || (exports.PropertyType = {}));
TypeGraphQL.registerEnumType(PropertyType, {
    name: "PropertyType",
    description: undefined,
});
