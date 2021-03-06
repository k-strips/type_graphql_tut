"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandSizeSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let LandSizeSumAggregate = class LandSizeSumAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], LandSizeSumAggregate.prototype, "measurement", void 0);
LandSizeSumAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("LandSizeSumAggregate", {
        isAbstract: true
    })
], LandSizeSumAggregate);
exports.LandSizeSumAggregate = LandSizeSumAggregate;
