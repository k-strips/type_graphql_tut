"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property_RequestCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let Property_RequestCount = class Property_RequestCount {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Property_RequestCount.prototype, "priceRange", void 0);
Property_RequestCount = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("Property_RequestCount", {
        isAbstract: true
    })
], Property_RequestCount);
exports.Property_RequestCount = Property_RequestCount;
