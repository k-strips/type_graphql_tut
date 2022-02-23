"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property_RequestCreateamenitiesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let Property_RequestCreateamenitiesInput = class Property_RequestCreateamenitiesInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], Property_RequestCreateamenitiesInput.prototype, "set", void 0);
Property_RequestCreateamenitiesInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Property_RequestCreateamenitiesInput", {
        isAbstract: true
    })
], Property_RequestCreateamenitiesInput);
exports.Property_RequestCreateamenitiesInput = Property_RequestCreateamenitiesInput;
