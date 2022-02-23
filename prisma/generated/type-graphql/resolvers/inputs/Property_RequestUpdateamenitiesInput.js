"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property_RequestUpdateamenitiesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let Property_RequestUpdateamenitiesInput = class Property_RequestUpdateamenitiesInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], Property_RequestUpdateamenitiesInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], Property_RequestUpdateamenitiesInput.prototype, "push", void 0);
Property_RequestUpdateamenitiesInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Property_RequestUpdateamenitiesInput", {
        isAbstract: true
    })
], Property_RequestUpdateamenitiesInput);
exports.Property_RequestUpdateamenitiesInput = Property_RequestUpdateamenitiesInput;
