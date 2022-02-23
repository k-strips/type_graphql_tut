"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandSizeWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let LandSizeWhereUniqueInput = class LandSizeWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSizeWhereUniqueInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSizeWhereUniqueInput.prototype, "propertyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSizeWhereUniqueInput.prototype, "property_RequestId", void 0);
LandSizeWhereUniqueInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LandSizeWhereUniqueInput", {
        isAbstract: true
    })
], LandSizeWhereUniqueInput);
exports.LandSizeWhereUniqueInput = LandSizeWhereUniqueInput;
