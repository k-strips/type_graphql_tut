"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let PriceSumAggregate = class PriceSumAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PriceSumAggregate.prototype, "figure", void 0);
PriceSumAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("PriceSumAggregate", {
        isAbstract: true
    })
], PriceSumAggregate);
exports.PriceSumAggregate = PriceSumAggregate;
