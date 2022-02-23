"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SaveCountAggregate_1 = require("../outputs/SaveCountAggregate");
const SaveMaxAggregate_1 = require("../outputs/SaveMaxAggregate");
const SaveMinAggregate_1 = require("../outputs/SaveMinAggregate");
let SaveGroupBy = class SaveGroupBy {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SaveGroupBy.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], SaveGroupBy.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SaveGroupBy.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SaveGroupBy.prototype, "propertyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveCountAggregate_1.SaveCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SaveCountAggregate_1.SaveCountAggregate)
], SaveGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveMinAggregate_1.SaveMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SaveMinAggregate_1.SaveMinAggregate)
], SaveGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveMaxAggregate_1.SaveMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SaveMaxAggregate_1.SaveMaxAggregate)
], SaveGroupBy.prototype, "_max", void 0);
SaveGroupBy = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("SaveGroupBy", {
        isAbstract: true
    })
], SaveGroupBy);
exports.SaveGroupBy = SaveGroupBy;
