"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let SaveMinAggregate = class SaveMinAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SaveMinAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], SaveMinAggregate.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SaveMinAggregate.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SaveMinAggregate.prototype, "propertyId", void 0);
SaveMinAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("SaveMinAggregate", {
        isAbstract: true
    })
], SaveMinAggregate);
exports.SaveMinAggregate = SaveMinAggregate;
