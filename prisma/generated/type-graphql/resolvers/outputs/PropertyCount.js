"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let PropertyCount = class PropertyCount {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PropertyCount.prototype, "likes", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PropertyCount.prototype, "advertisement", void 0);
PropertyCount = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("PropertyCount", {
        isAbstract: true
    })
], PropertyCount);
exports.PropertyCount = PropertyCount;
