"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandSizeAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let LandSizeAvgAggregate = class LandSizeAvgAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], LandSizeAvgAggregate.prototype, "measurement", void 0);
LandSizeAvgAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("LandSizeAvgAggregate", {
        isAbstract: true
    })
], LandSizeAvgAggregate);
exports.LandSizeAvgAggregate = LandSizeAvgAggregate;
