"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSave = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SaveCountAggregate_1 = require("../outputs/SaveCountAggregate");
const SaveMaxAggregate_1 = require("../outputs/SaveMaxAggregate");
const SaveMinAggregate_1 = require("../outputs/SaveMinAggregate");
let AggregateSave = class AggregateSave {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveCountAggregate_1.SaveCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SaveCountAggregate_1.SaveCountAggregate)
], AggregateSave.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveMinAggregate_1.SaveMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SaveMinAggregate_1.SaveMinAggregate)
], AggregateSave.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveMaxAggregate_1.SaveMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SaveMaxAggregate_1.SaveMaxAggregate)
], AggregateSave.prototype, "_max", void 0);
AggregateSave = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AggregateSave", {
        isAbstract: true
    })
], AggregateSave);
exports.AggregateSave = AggregateSave;
